import type { Metadata } from "next";
import {
  Playfair_Display,
  Great_Vibes,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firdavsbek & Nozima | To'y Taklifnomasi",
  description:
    "Sizni Firdavsbek va Nozimaning to'y marosimiga taklif qilamiz. 10.06.2026, Chust shahri.",
  openGraph: {
    title: "Firdavsbek & Nozima | To'y Taklifnomasi",
    description: "Bizning eng baxtli kunimizga marhamat! 10.06.2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
