import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <h1>This page is not in the curriculum.</h1>
      <p>
        Go back to the <Link href="/">home page</Link>. The header search lists written pages.
      </p>
    </>
  );
}
