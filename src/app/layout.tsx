import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jakartaBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICBCLT-2026 | Interfacing Business, Culture, Language and Technology",
  description: "3rd International Conference on Interfacing Business, Culture, Language and Technology: Transforming Global Communication and Innovation (ICBCLT-2026)",
  keywords: ["ICBCLT", "ICBCLT-2026", "VIT Bhopal", "International Conference", "Business", "Culture", "Language", "Technology", "Innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakartaBody.variable} h-full antialiased scroll-smooth overflow-x-hidden w-full max-w-full`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
