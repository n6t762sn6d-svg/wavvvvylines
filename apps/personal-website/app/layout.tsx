import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
});

const siteUrl = "https://wavvvvylines.com";

export const metadata: Metadata = {
  metadataBase: new URL('https://wavvvvylines.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: "Casey Lentz — Senior Frontend Engineer",
  description: "Senior frontend engineer specializing in React, TypeScript and Next.js, design systems, accessibility, and web performance.",
  openGraph: {
    title: "Casey Lentz - Senior Frontend Engineer",
    description: "Senior frontend engineer specializing in React, TypeScript and Next.js, design systems, accessibility, and web performance.",
    url: siteUrl,
    siteName: "Wavvvvylines",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Casey Lentz - Senior Frontend Engineer"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Casey Lentz - Senior Frontend Engineer",
    description: "Senior frontend engineer specializing in React, TypeScript and Next.js, design systems, accessibility, and web performance.",
    images: [`${siteUrl}/og-image.png`]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geist.variable, "font-sans")}>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
