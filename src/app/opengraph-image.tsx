import { siteTagline } from "@/lib/seo";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const dynamic = "force-static";
export const alt = `learn me a gpt: ${siteTagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    kicker: "A plain-language guide",
    title: "How GPT models work, one token at a time",
  });
}
