"use client";

import { useState } from "react";
import { round, softmax } from "@/lib/numeric";

const MIN_SCORES = 2;
const MAX_SCORES = 6;

type SoftmaxProps = {
  initialLogits?: readonly number[];
};

function toCells(values: readonly number[]): string[] {
  const cells = values
    .slice(0, MAX_SCORES)
    .map((value) => (Number.isFinite(value) ? String(value) : "0"));
  while (cells.length < MIN_SCORES) cells.push("0");
  return cells;
}

function parseCell(text: string): number | null {
  const trimmed = text.trim();
  if (trimmed === "") return null;
  const value = Number(trimmed);
  return Number.isFinite(value) ? value : null;
}

function formatNumber(value: number): string {
  const clean = Number(value.toPrecision(12));
  return Object.is(clean, -0) ? "0" : String(clean);
}

export function Softmax({ initialLogits = [1, 2, 3] }: SoftmaxProps) {
  const [cells, setCells] = useState(() => toCells(initialLogits));

  function updateCell(index: number, text: string) {
    setCells((current) => current.map((cell, i) => (i === index ? text : cell)));
  }

  function addScore() {
    setCells((current) => (current.length < MAX_SCORES ? [...current, "0"] : current));
  }

  function removeScore() {
    setCells((current) => (current.length > MIN_SCORES ? current.slice(0, -1) : current));
  }

  const scores = cells.map(parseCell);
  const bad = scores.findIndex((value) => value === null);

  let message: string | null = null;
  let rows: { score: number; shifted: number; raised: number; probability: number }[] = [];
  let largest = 0;
  let raisedTotal = 0;
  let probabilityTotal = 0;

  if (bad !== -1) {
    message = `Score ${bad + 1} needs a number.`;
  } else {
    const values = scores as number[];
    largest = Math.max(...values);
    const probabilities = softmax(values);
    rows = values.map((score, i) => {
      const shifted = score - largest;
      return { score, shifted, raised: Math.exp(shifted), probability: probabilities[i] };
    });
    raisedTotal = rows.reduce((sum, row) => sum + row.raised, 0);
    probabilityTotal = probabilities.reduce((sum, value) => sum + value, 0);
    if (
      !rows.every((row) => Number.isFinite(row.shifted) && Number.isFinite(row.probability)) ||
      !Number.isFinite(probabilityTotal)
    ) {
      message = "These scores are too far apart to compute here. Try smaller numbers.";
    }
  }

  return (
    <div className="tool">
      <div className="tool-row" role="group" aria-label="Scores">
        <span>Scores</span>
        {cells.map((cell, i) => (
          <input
            key={i}
            type="number"
            step="any"
            inputMode="decimal"
            aria-label={`Score ${i + 1}`}
            value={cell}
            onChange={(event) => updateCell(i, event.target.value)}
          />
        ))}
      </div>
      <div className="tool-row">
        <button type="button" onClick={addScore} disabled={cells.length >= MAX_SCORES}>
          Add a score
        </button>
        <button type="button" onClick={removeScore} disabled={cells.length <= MIN_SCORES}>
          Remove the last score
        </button>
        <span className="tool-note" style={{ margin: 0 }}>
          {cells.length} of {MAX_SCORES} scores
        </span>
      </div>
      <div aria-live="polite">
        {message ? (
          <p className="tool-note">{message}</p>
        ) : (
          <>
            <div className="tool-scroll">
              <table className="tool-table">
                <thead>
                  <tr>
                    <th scope="col">Score</th>
                    <th scope="col">Minus largest ({formatNumber(largest)})</th>
                    <th scope="col">e to that power</th>
                    <th scope="col">Probability</th>
                    <th scope="col" style={{ width: "30%", minWidth: "4rem" }}>
                      <span style={visuallyHidden}>
                        Bar
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i}>
                      <td className="tool-result">{formatNumber(row.score)}</td>
                      <td className="tool-result">{formatNumber(row.shifted)}</td>
                      <td className="tool-result">{round(row.raised)}</td>
                      <td className="tool-result">{round(row.probability)}</td>
                      <td aria-hidden="true">
                        <div className="tool-bar" style={{ width: `${row.probability * 100}%` }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Total</th>
                    <td />
                    <td className="tool-result">{round(raisedTotal)}</td>
                    <td className="tool-result">{round(probabilityTotal)}</td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="tool-note">
              Each score has the largest score subtracted, is raised as a power of e (about 2.718), and is divided by
              the total of those powers. The probabilities always add up to 1.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

const visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
} as const;
