import Link from "next/link";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="shell-footer">
      <div className="shell-column footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark">
            <LogoMark size={22} />
            <span>
              learn me a <span className="wordmark-gpt">gpt</span>
            </span>
          </Link>
          <p>How GPT-style language models work, from tokens to a GPT-2 forward pass.</p>
          <p className="footer-tribute">
            Heavily inspired by{" "}
            <a href="https://learnmeabitcoin.com/" target="_blank" rel="noopener noreferrer">
              learnmeabitcoin.com
            </a>
            , the clearest plain-language guide to how Bitcoin works.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <div>
            <p className="footer-heading">Learn</p>
            <ul>
              <li>
                <Link href="/beginners">Beginners</Link>
              </li>
              <li>
                <Link href="/tools">Tools</Link>
              </li>
              <li>
                <Link href="/map">Map</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Site</p>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
