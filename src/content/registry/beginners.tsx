import type { ArticleRegistration } from "./article";
import * as aModelIsAFunction from "../beginners/a-model-is-a-function.mdx";
import * as attention from "../beginners/attention.mdx";
import * as contextWindow from "../beginners/context-window.mdx";
import * as gpt2AndLaterModels from "../beginners/gpt-2-and-later-models.mdx";
import * as howAGptWorks from "../beginners/how-a-gpt-works.mdx";
import * as likelihoodAndTruth from "../beginners/likelihood-and-truth.mdx";
import * as parameters from "../beginners/parameters.mdx";
import * as prompts from "../beginners/prompts.mdx";
import * as temperature from "../beginners/temperature.mdx";
import * as textBecomesNumbers from "../beginners/text-becomes-numbers.mdx";
import * as theNextToken from "../beginners/the-next-token.mdx";
import * as theTransformer from "../beginners/the-transformer.mdx";
import * as tokens from "../beginners/tokens.mdx";
import * as trainingAndInference from "../beginners/training-and-inference.mdx";
import * as usingAChatbot from "../beginners/using-a-chatbot.mdx";
import * as vectors from "../beginners/vectors.mdx";
import * as whatAChatRequestContains from "../beginners/what-a-chat-request-contains.mdx";

export type { ArticleRegistration } from "./article";

// Page sessions assign the MDX module (`import * as page`) so `frontmatter.updated` reaches the article.
export const beginnerPages: Record<string, ArticleRegistration> = {
  "how-a-gpt-works": howAGptWorks,
  "using-a-chatbot": usingAChatbot,
  prompts,
  tokens,
  "context-window": contextWindow,
  "likelihood-and-truth": likelihoodAndTruth,
  "what-a-chat-request-contains": whatAChatRequestContains,
  "a-model-is-a-function": aModelIsAFunction,
  "training-and-inference": trainingAndInference,
  vectors,
  "text-becomes-numbers": textBecomesNumbers,
  "the-next-token": theNextToken,
  attention,
  "the-transformer": theTransformer,
  temperature,
  parameters,
  "gpt-2-and-later-models": gpt2AndLaterModels,
};
