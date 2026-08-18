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
  title: "Axel Ello",
  description: "Career Portfolio Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="p-4 dark:bg-black">
          <h1 className="text-7xl text-center font-semibold tracking-widest">Axel Ello</h1>
        </header>
        <main className="flex-1 flex">{children}</main>
        <footer className="p-1">
          <p className="font-semibold ml-5">2026, Axel Ello</p>
        </footer>
      </body>
    </html>
  );
}
