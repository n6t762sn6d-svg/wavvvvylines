import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = "https://wavvvvylines.com"; 

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wavvvvylines.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: "Casey Lentz — Senior Software Engineer",
  description: "Senior Software Engineer focused on scalable UI systems, design patterns, and cross-functional technical leadership.",
  openGraph: {
    title: "Casey Lentz - Senior Software Engineer",
    description: "Senior Software Engineer focused on scalable UI systems, design patterns, and cross-functional technical leadership.",
    url: siteUrl,
    siteName: "Wavvvvylines",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Casey Lentz - Senior Software Engineer"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Casey Lentz - Senior Software Engineer",
    description: "Senior Software Engineer focused on scalable UI systems, design patterns, and cross-functional technical leadership.",
    images: [`${siteUrl}/og-image.png`]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
