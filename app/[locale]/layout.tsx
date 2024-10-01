import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/shared/Navbar";
import SmoothScroll from "@/components/shared/SmoothScroll";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import {JetBrains_Mono} from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: {
    default: "EasyDEV | Website bauen, App entwickeln & KI-Lösungen",
    template: "%s | EasyDEV"
  },
  description: "EasyDEV hilft Ihnen beim Website bauen, App entwickeln und Online Shop erstellen. Wir bieten professionelle Webentwicklung, SEO-Optimierung und innovative KI-Lösungen für Ihren digitalen Erfolg.",
  keywords: [
    "Website bauen",
    "App entwickeln",
    "Künstliche Intelligenz",
    "Online Shop",
    // ... (rest of the keywords)
  ],
  authors: [{ name: "EasyDEV", url: "https://easydev.com" }],
  creator: "EasyDEV",
  publisher: "EasyDEV",
  openGraph: {
    // ... (OpenGraph metadata)
  },
  twitter: {
    // ... (Twitter metadata)
  },
  robots: {
    // ... (robots metadata)
  },
  alternates: {
    canonical: 'https://easydev.com',
    languages: {
      'de-DE': 'https://easydev.com/de',
      'en-US': 'https://easydev.com/en',
      'uk-UA': 'https://easydev.com/uk',
    },
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = useMessages();
  return (
    <html lang="de">
      <body className={jetBrainsMono.variable}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <SmoothScroll>

          {children}
          </SmoothScroll>
          <FooterSection />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}