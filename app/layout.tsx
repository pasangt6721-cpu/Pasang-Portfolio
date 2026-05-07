import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pasang | Creative Developer",
  description: "Cinematic scrollytelling portfolio driven by Next.js and HTML5 Canvas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="min-h-full font-sans overflow-x-clip selection:bg-white/30 selection:text-white bg-[#0D0D0D]">
        {children}
      </body>
    </html>
  );
}
