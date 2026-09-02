import type { Metadata } from "next";
import Link from "next/link";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth snap-both snap-mandatory scroll-pt-20`}
    >
      <body className="min-h-full flex flex-col">
        <header className="p-4 dark:bg-white sticky top-0">
          <h1 className="text-5xl text-center font-semibold tracking-widest p-2 dark:bg-black max-w-5xl mx-auto">Axel Ello</h1>
          <nav className="text-2xl text-center flex flex-auto justify-center gap-4 p-2 dark:bg-black max-w-5xl mx-auto ">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/education">Education</Link>
            <Link href="/work">Work Experience</Link>
          </nav>
        </header>
        <main className="flex-1 flex">{children}</main>
        <footer className="p-2">
          <p className="font-semibold ml-5 text-right">2026, Axel Ello</p>
        </footer>
      </body>
    </html>
  );
}
