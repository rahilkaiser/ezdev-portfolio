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
  title: "EasyDEV",
  description:
    "Professionelle Webentwicklung: SEO-optimierte Websites, Shopify E-Commerce-Lösungen und maßgeschneiderte App-Entwicklung. Steigern Sie Ihre Online-Präsenz mit unserer Expertise.",
  keywords: [
    "Webentwicklung",
    "SEO",
    "Shopify",
    "E-Commerce",
    "App-Entwicklung",
    "Professionelle Webentwicklung",
    "SEO-optimierte Websites",
    "Shopify E-Commerce-Lösungen",
    "maßgeschneiderte App-Entwicklung",
  ],
  authors: [{ name: "EasyDEV", url: "https://easydev.com" }],
  creator: "EasyDEV",
  publisher: "EasyDEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={jetBrainsMono.variable}>

        {children}

      </body>
    </html>
  );
}
