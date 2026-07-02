import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ColorBends from "../components/ColorBends";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-full font-sans overflow-x-clip selection:bg-white/30 selection:text-white bg-[#050a10]">
        <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
          <ColorBends
            colors={["#2dd4bf", "#0f766e", "#050a10"]}
            rotation={90}
            speed={0.2}
            scale={1.2}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={2}
            intensity={1.5}
            bandWidth={6}
            transparent={true}
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
