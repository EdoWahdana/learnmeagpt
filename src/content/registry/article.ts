import type { ComponentType } from "react";

export type ArticleFrontmatter = {
  title?: string;
  description?: string;
  updated?: string | Date;
  author?: string;
};

export type ArticleModule = {
  default: ComponentType;
  frontmatter?: ArticleFrontmatter;
};

export type ArticleRegistration = ComponentType | ArticleModule;

export function articleContent(page: ArticleRegistration): {
  Content: ComponentType;
  updated?: string;
} {
  if (typeof page === "function") {
    return { Content: page };
  }
  return { Content: page.default, updated: readUpdated(page.frontmatter?.updated) };
}

function readUpdated(value: ArticleFrontmatter["updated"]): string | undefined {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return undefined;
}
