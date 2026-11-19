import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Static HTML in `out/`, served by Cloudflare without a server.
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

// Plugin names stay serializable for Turbopack. Imported functions are not.
const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm"], ["remark-frontmatter"], ["remark-mdx-frontmatter"]],
    rehypePlugins: [["rehype-slug"]],
  },
});

export default withMDX(nextConfig);
