import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garden Station",
  description: "Stationary, automated indoor growing environment with a robotic arm, sensor network, and AI decision engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans text-gray-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
