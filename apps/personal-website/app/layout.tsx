import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wavvvvylines — Casey",
  description: "Personal site built with Next.js, Base UI, and Tailwind CSS."
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
