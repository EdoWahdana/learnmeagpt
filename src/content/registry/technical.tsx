import type { ArticleRegistration } from "./article";

export type { ArticleRegistration } from "./article";

// Page sessions assign the MDX module (`import * as page`) so `frontmatter.updated` reaches the article.
export const technicalPages: Record<string, ArticleRegistration> = {};
