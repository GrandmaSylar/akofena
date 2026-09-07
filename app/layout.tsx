import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akofena — Built for Africa. Built to last.",
    template: "%s | Akofena",
  },
  description:
    "Akofena is a technology company founded in Accra, Ghana. We build software products through PhiNova and deliver IT services through AuraTech Solutions.",
  keywords: [
    "Akofena",
    "Ghana technology",
    "African software",
    "PhiNova",
    "AuraTech Solutions",
    "Accra tech company",
    "SaaS Ghana",
  ],
  authors: [{ name: "Akofena" }],
  creator: "Akofena",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://akofena.com",
    siteName: "Akofena",
    title: "Akofena — Built for Africa. Built to last.",
    description:
      "Technology company founded in Accra, Ghana. Software products and IT services for African businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akofena — Built for Africa. Built to last.",
    description:
      "Technology company founded in Accra, Ghana. Software products and IT services for African businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
