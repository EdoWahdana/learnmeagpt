import type { ArticleRegistration } from "./article";
import * as softmax from "../tools/softmax.mdx";
import * as temperature from "../tools/temperature.mdx";
import * as tokenizer from "../tools/tokenizer.mdx";
import * as vectorDotProduct from "../tools/vector-dot-product.mdx";

export type { ArticleRegistration } from "./article";

// Keys are the slug after /tools/. Values are MDX modules (`import * as page`).
export const toolPages: Record<string, ArticleRegistration> = {
  "vector-dot-product": vectorDotProduct,
  softmax,
  tokenizer,
  temperature,
};
