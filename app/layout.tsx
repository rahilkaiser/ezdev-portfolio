import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Navbar from "@/components/shared/Navbar";
import FooterSection from "@/components/sections/FooterSection";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://easydev.de'),
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', url: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
  ],
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>

      </head>
      <body className={jetBrainsMono.variable}>
        {children}
      </body>
    </html>
  );
}
