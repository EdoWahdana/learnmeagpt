declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter:
    | {
        title?: string;
        description?: string;
        updated?: string | Date;
        author?: string;
      }
    | undefined;

  const MDXContent: ComponentType;
  export default MDXContent;
}
