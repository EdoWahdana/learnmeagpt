import type { Metadata } from "next";
import Script from "next/script";
import { Source_Serif_4, Source_Sans_3, Source_Code_Pro } from "next/font/google";
import { Footer } from "@/components/shell/Footer";
import { Header } from "@/components/shell/Header";
import { ThemeBoot, themeInitScript } from "@/components/shell/ThemeBoot";
import { siteDescription, siteName, siteTagline, siteUrl } from "@/lib/seo";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} · ${siteTagline}`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "how GPT works",
    "how ChatGPT works",
    "GPT explained",
    "large language models explained",
    "LLM for beginners",
    "transformer explained",
    "attention mechanism",
    "tokens and tokenizer",
    "embeddings",
    "softmax",
    "temperature",
    "GPT-2",
  ],
  category: "education",
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: "/",
    title: `${siteName} · ${siteTagline}`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} · ${siteTagline}`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSerif4.variable} ${sourceSans3.variable} ${sourceCodePro.variable}`}
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeBoot />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content" tabIndex={-1} className="shell-column">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
