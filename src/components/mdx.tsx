import type { MDXComponents } from "mdx/types";
import { Figure } from "./article/Figure";
import { Note } from "./article/Note";
import { Term } from "./article/Term";

export function mdxComponents(components: MDXComponents = {}): MDXComponents {
  return {
    Figure,
    Note,
    Term,
    ...components,
  };
}
