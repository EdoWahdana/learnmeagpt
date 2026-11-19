import type { MetadataRoute } from "next";
import { curriculum } from "@/content/curriculum";
import { articleContent, type ArticleRegistration } from "@/content/registry/article";
import { beginnerPages } from "@/content/registry/beginners";
import { toolPages } from "@/content/registry/tools";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const built: Record<string, Record<string, ArticleRegistration>> = {
  beginners: beginnerPages,
  tools: toolPages,
};

function lastModified(route: string): string | undefined {
  const [, section, slug] = route.split("/");
  const page = slug ? built[section]?.[slug] : undefined;
  return page ? articleContent(page).updated : undefined;
}

function isBuilt(route: string): boolean {
  const [, section, slug] = route.split("/");
  if (!slug) {
    return true;
  }
  return Boolean(built[section]?.[slug]);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = curriculum
    .filter((entry) => entry.status === "ready" && isBuilt(entry.route))
    .map((entry) => {
      const modified = lastModified(entry.route);
      return {
        url: absoluteUrl(entry.route),
        ...(modified ? { lastModified: modified } : {}),
        priority: entry.kind === "index" ? 0.8 : 0.7,
      };
    });
  return [{ url: absoluteUrl("/"), priority: 1 }, ...pages];
}
