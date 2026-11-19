import Link from "next/link";

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="11" width="8" height="10" rx="2" className="logo-token" />
      <rect x="12" y="11" width="8" height="10" rx="2" className="logo-token" />
      <rect x="23" y="7" width="8" height="18" rx="2" className="logo-next" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="wordmark" aria-label="learn me a gpt, home">
      <LogoMark />
      <span className="wordmark-text">
        learn me a <span className="wordmark-gpt">gpt</span>
      </span>
    </Link>
  );
}
