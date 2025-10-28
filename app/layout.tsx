import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EVOC Digital — Advertising Enthusiasm for Your Brand",
  description: "We craft data-driven strategies and creative campaigns that connect you with your audience and deliver proven results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
