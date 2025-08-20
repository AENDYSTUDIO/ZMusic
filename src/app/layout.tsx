import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZMusic - Decentralized Music Platform",
  description: "Discover, stream, and share music in a decentralized way. Built with Next.js, TypeScript, and Web3.",
  keywords: ["ZMusic", "Decentralized", "Music", "Streaming", "Web3", "Next.js", "TypeScript"],
  authors: [{ name: "ZMusic Team" }],
  openGraph: {
    title: "ZMusic - Decentralized Music Platform",
    description: "Discover, stream, and share music in a decentralized way",
    url: "https://zmusic.app",
    siteName: "ZMusic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZMusic - Decentralized Music Platform",
    description: "Discover, stream, and share music in a decentralized way",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
