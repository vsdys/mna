import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tarafsız Bakış",
  description: "Tarafsız politik analiz ve haber platformu",
};

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <nav className="bg-gray-800 p-4 flex gap-6">
          <Link href="/">Anasayfa</Link>
          <Link href="/bireysel-analiz">Bireysel Analiz</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
