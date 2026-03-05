import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Garden Station — Automated Indoor Growing System",
  description: "Garden Station automates your entire plant lifecycle using computer vision, AI decisions, and precise hardware control. No cloud required.",
  metadataBase: new URL("https://gardenstation.app"),
  openGraph: {
    title: "Garden Station — Automated Indoor Growing System",
    description: "Garden Station automates your entire plant lifecycle using computer vision, AI decisions, and precise hardware control. No cloud required.",
    type: "website",
    siteName: "Garden Station",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased font-sans text-gray-900 bg-white ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
