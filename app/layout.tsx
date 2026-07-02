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
  metadataBase: new URL("https://pasanggole.com.np"),
  title: {
    default: "Pasang Gole | Creative Developer",
    template: "%s | Pasang Gole",
  },
  description: "Cinematic scrollytelling portfolio of Pasang Gole,Cinematic scrollytelling portfolio of Pasang Tamang,a creative developer from Nepal driven by Python, Django, and WebGL.",
  keywords: ["Developer", "Nepal", "django", "Pasang Gole", "Pasang Tamang", "UI/UX Designer", "Frontend Developer", "Next.js", "React"],
  authors: [{ name: "Pasang Gole" }],
  creator: "Pasang Gole",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pasanggole.com.np",
    title: "Pasang Gole | Creative Developer",
    description: "Portfolio of Pasang Gole, a creative developer from Nepal specializing in React, Next.js, and Django.",
    siteName: "Pasang Gole Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasang Gole | Creative Developer",
    description: "Portfolio of Pasang Gole, a creative developer from Nepal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
