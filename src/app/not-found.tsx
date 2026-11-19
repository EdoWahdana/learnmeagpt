import Link from "next/link";

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
