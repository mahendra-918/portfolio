import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahendra Kasula — AI/ML Engineer",
  description:
    "Portfolio of Mahendra Kasula, an AI/ML Engineer building intelligent systems with LLMs, RAG pipelines, and automation. GSoC contributor with 300+ LeetCode problems solved.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "LLM",
    "RAG",
    "LangChain",
    "Python",
    "Portfolio",
    "Machine Learning",
  ],
  metadataBase: new URL("https://mahendrakasula.me"),
  authors: [{ name: "Mahendra Kasula" }],
  creator: "Mahendra Kasula",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahendrakasula.me",
    title: "Mahendra Kasula — AI/ML Engineer",
    description:
      "Building intelligent systems with AI, LLMs and automation.",
    siteName: "Mahendra Kasula Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahendra Kasula — AI/ML Engineer",
    description:
      "Building intelligent systems with AI, LLMs and automation.",
    creator: "@mahendra-918",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
