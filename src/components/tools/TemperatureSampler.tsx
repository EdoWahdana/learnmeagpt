"use client";

import { useId, useMemo, useState } from "react";
import { round, sampleIndex, softmaxWithTemperature } from "@/lib/numeric";

const T_MIN = 0.2;
const T_MAX = 2;
const T_STEP = 0.1;
const SCORE_LIMIT = 100;

function clampTemperature(value: number): number {
  if (!Number.isFinite(value)) {
    return 1;
  }
  const clamped = Math.min(T_MAX, Math.max(T_MIN, value));
  return Math.round(clamped * 10) / 10;
}

function parseScores(fields: readonly string[]): number[] | null {
  const scores = fields.map((field) => (field.trim() === "" ? Number.NaN : Number(field)));
  return scores.every((score) => Number.isFinite(score) && Math.abs(score) <= SCORE_LIMIT) ? scores : null;
}

export function TemperatureSampler({
  initialLogits = [1, 2, 3],
  initialTemperature = 1,
}: {
  initialLogits?: number[];
  initialTemperature?: number;
}) {
  const sliderId = useId();
  const [fields, setFields] = useState(() => initialLogits.map(String));
  const [temperature, setTemperature] = useState(() => clampTemperature(initialTemperature));
  const [drawn, setDrawn] = useState<number | null>(null);

  const scores = useMemo(() => parseScores(fields), [fields]);
  const atOne = useMemo(() => (scores ? softmaxWithTemperature(scores, 1) : null), [scores]);
  const atT = useMemo(() => (scores ? softmaxWithTemperature(scores, temperature) : null), [scores, temperature]);
  const label = temperature.toFixed(1);

  function updateField(index: number, value: string) {
    setFields((current) => current.map((field, i) => (i === index ? value : field)));
    setDrawn(null);
  }

  return (
    <div className="tool">
      <div className="tool-row">
        <span>Scores (logits):</span>
        {fields.map((field, index) => (
          <input
            key={index}
            type="number"
            step="any"
            min={-SCORE_LIMIT}
            max={SCORE_LIMIT}
            inputMode="decimal"
            value={field}
            aria-label={`Score for option ${index + 1}`}
            onChange={(event) => updateField(index, event.target.value)}
          />
        ))}
      </div>
      <div className="tool-row">
        <label htmlFor={sliderId}>Temperature T</label>
        <input
          id={sliderId}
          type="range"
          min={T_MIN}
          max={T_MAX}
          step={T_STEP}
          value={temperature}
          aria-valuetext={`T = ${label}`}
          onChange={(event) => {
            setTemperature(clampTemperature(Number(event.target.value)));
            setDrawn(null);
          }}
        />
        <span className="tool-result">T = {label}</span>
      </div>
      <p className="tool-note">
        Each score is divided by T, then softmax turns the scores into probabilities that add up to 1. T below 1
        makes the top option more likely; T above 1 spreads the chances out.
      </p>

      {scores === null || atOne === null || atT === null ? (
        <p className="tool-note" role="alert">
          Enter a number from {-SCORE_LIMIT} to {SCORE_LIMIT} in every score box.
        </p>
      ) : (
        <>
          <div className="tool-scroll">
            <table className="tool-table">
              <thead>
                <tr>
                  <th scope="col">Option</th>
                  <th scope="col">Score</th>
                  <th scope="col">Probability at T = 1</th>
                  <th scope="col">Probability at T = {label}</th>
                  <th scope="col">
                    <span aria-hidden="true">Bar at T = {label}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="tool-result">{score}</td>
                    <td className="tool-result">{round(atOne[index])}</td>
                    <td className="tool-result">{round(atT[index])}</td>
                    <td style={{ minWidth: "4rem" }}>
                      <div className="tool-bar" style={{ width: `${atT[index] * 100}%` }} aria-hidden="true" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="tool-row">
            <button type="button" onClick={() => setDrawn(sampleIndex(atT))}>
              Draw
            </button>
            <span aria-live="polite">
              {drawn === null
                ? "Draw picks one option at random, using the probabilities at the chosen T."
                : `One sample at T = ${label}: option ${drawn + 1}. Each draw is one sample; another draw can pick a different option.`}
            </span>
          </div>
        </>
      )}
      <p className="tool-note">The calculation runs in this browser. The numbers are not sent anywhere.</p>
    </div>
  );
}
