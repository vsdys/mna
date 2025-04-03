import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

// SEO metadata
export const metadata: Metadata = {
  title: "Tarafsız Bakış",
  description: "Tarafsız politik analiz ve haber platformu",
};

// Layout with Google Analytics
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4SVC7F8PM8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4SVC7F8PM8');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <nav className="bg-gray-800 p-4 flex gap-6">
          <Link href="/">Anasayfa</Link>
          <Link href="/bireysel-analiz">Bireysel Analiz</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}