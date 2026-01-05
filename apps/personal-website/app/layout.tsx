import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://wavvvvylines.com"; 

export const metadata: Metadata = {
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
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
