"use client";

import { useId, useMemo, useState } from "react";
import { decode, encode } from "gpt-tokenizer/encoding/r50k_base";
import styles from "./Tokenizer.module.css";

const MAX_CHARACTERS = 200;
const REPLACEMENT_CHARACTER = "\uFFFD";

type Token = { id: number; text: string };

type Result = { tokens: Token[]; error: null } | { tokens: null; error: string };

function tokenize(text: string): Result {
  try {
    // Text such as "<|endoftext|>" is encoded as ordinary characters instead of throwing.
    const ids = encode(text, { disallowedSpecial: new Set() });
    return { tokens: ids.map((id) => ({ id, text: decode([id]) })), error: null };
  } catch {
    return { tokens: null, error: "This text could not be split into tokens." };
  }
}

function visible(text: string): string {
  return text.replace(/ /g, "\u00B7").replace(/\n/g, "\u21B5").replace(/\t/g, "\u2192");
}

export function Tokenizer({ initialText = "" }: { initialText?: string }) {
  const fieldId = useId();
  const limitId = useId();
  const [text, setText] = useState(() => initialText.slice(0, MAX_CHARACTERS));
  const result = useMemo(() => tokenize(text), [text]);
  const hasPartial = result.tokens?.some((token) => token.text.includes(REPLACEMENT_CHARACTER)) ?? false;

  return (
    <div className="tool">
      <div className="tool-row">
        <label htmlFor={fieldId}>Text</label>
      </div>
      <textarea
        id={fieldId}
        value={text}
        maxLength={MAX_CHARACTERS}
        rows={3}
        spellCheck={false}
        placeholder="Type a sentence, for example: A cat sat on the mat."
        aria-describedby={limitId}
        onChange={(event) => setText(event.target.value.slice(0, MAX_CHARACTERS))}
      />
      <p id={limitId} className="tool-note">
        Up to {MAX_CHARACTERS} characters. {text.length} / {MAX_CHARACTERS} used.
      </p>

      {result.error !== null ? (
        <p className="tool-note" role="alert">
          {result.error}
        </p>
      ) : (
        <div>
          <div className="tool-row" aria-live="polite">
            <span>Tokens:</span>
            <span className="tool-result">{result.tokens.length}</span>
          </div>
          {result.tokens.length === 0 ? (
            <p className="tool-note">Type some text to see its tokens.</p>
          ) : (
            <>
              <ol className={styles.chips} aria-label="Tokens, in order">
                {result.tokens.map((token, index) => (
                  <li key={index} className={styles.chip}>
                    <span className={styles.text}>{visible(token.text)}</span>
                    <span className={styles.id}>id {token.id}</span>
                  </li>
                ))}
              </ol>
              <p className="tool-note">
                Each box is one token: its text on top, its token id underneath. A · stands for a space. Many
                tokens begin with a space because GPT-2 keeps the space together with the word after it.
                {hasPartial
                  ? " A � means the token holds only part of a character, such as an emoji; it takes two or more tokens to make that character."
                  : null}
              </p>
              <div className="tool-row">
                <span>Token ids:</span>
                <span className="tool-result">{result.tokens.map((token) => token.id).join(", ")}</span>
              </div>
            </>
          )}
        </div>
      )}
      <p className="tool-note">The text is split by the GPT-2 tokenizer in this browser and is not sent anywhere.</p>
    </div>
  );
}
