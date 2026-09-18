import type { Metadata, Viewport } from "next";
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
  title: "Bumie Ema | Penginapan Nyaman & Warung Mie Lezat di Indihiang Tasikmalaya",
  description:
    "Bumie Ema menghadirkan penginapan sewa kamar modern, bersih, ber-AC & strategis di Indihiang, Tasikmalaya, dilengkapi Warung Mie Bumie Ema dengan aneka topping melimpah (Paket Hemat 10k, Full Topping 17k).",
  keywords: [
    "Bumie Ema",
    "Penginapan Tasikmalaya",
    "Kost Indihiang",
    "Sewa Kamar Tasikmalaya",
    "Warung Mie Tasikmalaya",
    "Mie Nyemek Tasikmalaya",
    "Kuliner Indihiang",
    "Bumie Ema Indihiang",
  ],
  authors: [{ name: "Bumie Ema" }],
  openGraph: {
    title: "Bumie Ema | Penginapan Nyaman & Warung Mie Lezat",
    description: "Istirahat nyaman, kulineran nikmat di satu tempat. Berlokasi di Jln Cisembung, Indihiang, Tasikmalaya.",
    url: "https://bumie-ema.com",
    siteName: "Bumie Ema",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#E85D04",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
