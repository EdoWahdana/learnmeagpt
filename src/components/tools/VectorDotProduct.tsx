"use client";

import { useId, useState } from "react";
import { dot } from "@/lib/numeric";

const LENGTHS = [2, 3, 4] as const;
const MIN_LENGTH = 2;
const MAX_LENGTH = 4;

type VectorDotProductProps = {
  initialA?: readonly number[];
  initialB?: readonly number[];
};

function toCells(values: readonly number[], length: number): string[] {
  return Array.from({ length }, (_, i) => {
    const value = values[i];
    return typeof value === "number" && Number.isFinite(value) ? String(value) : "0";
  });
}

function resize(cells: readonly string[], length: number): string[] {
  return Array.from({ length }, (_, i) => cells[i] ?? "0");
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

function formatTerm(value: number): string {
  const text = formatNumber(value);
  return value < 0 ? `(${text})` : text;
}

export function VectorDotProduct({ initialA = [1, 2, 3], initialB = [4, 5, 6] }: VectorDotProductProps) {
  const id = useId();
  const startLength = Math.min(MAX_LENGTH, Math.max(MIN_LENGTH, initialA.length, initialB.length));
  const [length, setLength] = useState(startLength);
  const [a, setA] = useState(() => toCells(initialA, startLength));
  const [b, setB] = useState(() => toCells(initialB, startLength));

  function changeLength(next: number) {
    setLength(next);
    setA((cells) => resize(cells, next));
    setB((cells) => resize(cells, next));
  }

  function updateCell(which: "a" | "b", index: number, text: string) {
    const setter = which === "a" ? setA : setB;
    setter((cells) => cells.map((cell, i) => (i === index ? text : cell)));
  }

  const numbersA = a.map(parseCell);
  const numbersB = b.map(parseCell);

  let message: string | null = null;
  const badA = numbersA.findIndex((value) => value === null);
  const badB = numbersB.findIndex((value) => value === null);
  if (badA !== -1) {
    message = `Position ${badA + 1} of vector A needs a number.`;
  } else if (badB !== -1) {
    message = `Position ${badB + 1} of vector B needs a number.`;
  } else if (numbersA.length !== numbersB.length) {
    message = "Both vectors need the same length.";
  }

  let working: { pairs: string; products: string; total: string } | null = null;
  if (message === null) {
    const valuesA = numbersA as number[];
    const valuesB = numbersB as number[];
    const products = valuesA.map((value, i) => value * valuesB[i]);
    const total = dot(valuesA, valuesB);
    if (!Number.isFinite(total) || products.some((value) => !Number.isFinite(value))) {
      message = "The numbers are too large to multiply here. Try smaller numbers.";
    } else {
      working = {
        pairs: valuesA.map((value, i) => `${formatTerm(value)} × ${formatTerm(valuesB[i])}`).join(" + "),
        products: products.map(formatTerm).join(" + "),
        total: formatNumber(total),
      };
    }
  }

  return (
    <div className="tool">
      <div className="tool-row">
        <label htmlFor={`${id}-length`}>Length</label>
        <select id={`${id}-length`} value={length} onChange={(event) => changeLength(Number(event.target.value))}>
          {LENGTHS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {(["a", "b"] as const).map((which) => {
        const cells = which === "a" ? a : b;
        const name = which === "a" ? "A" : "B";
        return (
          <div className="tool-row" key={which} role="group" aria-labelledby={`${id}-${which}`}>
            <span id={`${id}-${which}`} style={{ minWidth: "4.5rem" }}>
              Vector {name}
            </span>
            {cells.map((cell, i) => (
              <input
                key={i}
                type="number"
                step="any"
                inputMode="decimal"
                aria-label={`Vector ${name}, position ${i + 1}`}
                value={cell}
                onChange={(event) => updateCell(which, i, event.target.value)}
              />
            ))}
          </div>
        );
      })}
      <div aria-live="polite">
        {working ? (
          <>
            <p className="tool-result" style={{ margin: 0, overflowWrap: "anywhere" }}>
              {working.pairs} = {working.total}
            </p>
            <p className="tool-result" style={{ margin: 0, overflowWrap: "anywhere" }}>
              {working.products} = {working.total}
            </p>
            <p className="tool-note">
              Each position in A is multiplied by the same position in B. The products are added to give one number:{" "}
              {working.total}.
            </p>
          </>
        ) : (
          <p className="tool-note">{message}</p>
        )}
      </div>
    </div>
  );
}
