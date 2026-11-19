import Link from "next/link";
import { LogoMark } from "@/components/shell/Logo";
import { curriculum, getByRoute } from "@/content/curriculum";

const sections = [
  { route: "/beginners", summary: "The reading order, in plain language." },
  { route: "/technical", summary: "The same system, one calculation at a time." },
  { route: "/tools", summary: "Small calculators for the operations those pages describe." },
  { route: "/explorer", summary: "GPT-2 small, opened on one fixed sentence." },
];

export default function Home() {
  const first = curriculum
    .filter((entry) => entry.section === "beginners" && entry.kind === "article" && entry.status === "ready")
    .sort((a, b) => a.order - b.order)[0];

  return (
    <div className="home">
      <section className="home-hero">
        <LogoMark size={48} />
        <h1>How GPT models work, one token at a time</h1>
        <p className="home-lede">
          This site explains how GPT-style language models work, from the text in a chat window down to
          the calculation that produces the next token. When a page inspects a real model, that model is
          GPT-2 small.
        </p>
        <p className="home-start-row">
          {first ? (
            <Link className="home-start" href={first.route}>
              Start with {first.title}
              <span aria-hidden="true"> →</span>
            </Link>
          ) : (
            <span className="home-start is-planned">How a GPT works</span>
          )}
        </p>
      </section>

      <ul className="home-sections">
        {sections.map(({ route, summary }) => {
          const entry = getByRoute(route);
          if (!entry) {
            return null;
          }
          const ready = entry.status === "ready";
          const body = (
            <>
              <span className="home-card-title">{entry.title}</span>
              <span className="home-card-summary">{summary}</span>
              {ready ? null : <span className="home-card-badge">Not written yet</span>}
            </>
          );
          return (
            <li key={route}>
              {ready ? (
                <Link className="home-card" href={route}>
                  {body}
                </Link>
              ) : (
                <div className="home-card is-planned">{body}</div>
              )}
            </li>
          );
        })}
      </ul>

      <aside className="home-tribute" aria-label="Inspiration">
        <p>
          This site is heavily inspired by{" "}
          <a href="https://learnmeabitcoin.com/" target="_blank" rel="noopener noreferrer">
            learnmeabitcoin.com
          </a>
          . Its way of explaining Bitcoin, in plain language with one worked example at a time, is the
          model for every page here.
        </p>
      </aside>

      <p className="home-foot">
        The <Link href="/map">full list</Link> includes titles that are not written yet. The header field
        finds a written page or tool by name.
      </p>
    </div>
  );
}
