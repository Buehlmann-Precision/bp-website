import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bühlmann Precision | CNC-Fertigung & Technischer 3D-Druck",
  description:
    "Schweizer CNC-Fertigung und technischer 3D-Druck für hochwertige Einzelteile, Prototypen und Kleinserien. Präzision beginnt im Detail.",

  keywords: [
    "CNC",
    "CNC Fertigung",
    "3D Druck",
    "Technischer 3D Druck",
    "Prototypen",
    "Kleinserien",
    "Schweiz",
    "Biel",
    "Bühlmann Precision",
  ],

  authors: [
    {
      name: "Jarno Bühlmann",
    },
  ],

  creator: "Jarno Bühlmann",

  openGraph: {
    title: "Bühlmann Precision",
    description:
      "Schweizer CNC-Fertigung und technischer 3D-Druck für hochwertige Einzelteile und Prototypen.",
    siteName: "Bühlmann Precision",
    locale: "de_CH",
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
      lang="de-CH"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}