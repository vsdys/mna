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
        className={`
        ${geistSans.variable} ${geistMono.variable} antialiased 
        bg-gradient-to-bl from-[#0a0f1c] via-[#1c2f4a] to-black 
        text-white min-h-screen
      `}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a2539]/80 backdrop-blur-md shadow-md border-b border-[#2c3e50] px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider text-white">Objektif Türkiye</div>
          <ul className="flex flex-wrap gap-6 text-sm font-medium text-[#cbd5e1]">
            <li><Link href="/">Anasayfa</Link></li>
            <li><Link href="/guncel-haberler">Güncel Haberler</Link></li>
            <li><Link href="/halk-problemler">Halk Problemleri</Link></li>
            <li><Link href="/devlet-halka-borcludur">Devlet ve Halk</Link></li>
            <li><Link href="/boykot">Boykot</Link></li>
            <li><Link href="/para">Para Meselesi</Link></li>
            <li><Link href="/bireysel-analiz">Politik Analiz</Link></li>
          </ul>
        </nav>

        {/* Page content */}
        <main className="pt-28 px-6">{children}</main>

        {/* Footer */}
        <footer className="mt-16 bg-[#0f172a] text-[#cbd5e1] py-10 px-6 border-t border-[#2c3e50]">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 Objektif Türkiye. Tüm hakları saklıdır.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <Link href="/gizlilik">Gizlilik</Link>
              <Link href="/iletisim">İletişim</Link>
              <a
                href="https://www.instagram.com/seninhesabin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@seninhesabin"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}