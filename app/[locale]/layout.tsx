import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import {JetBrains_Mono} from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: "EasyDEV",
  description: "Professionelle Webentwicklung: SEO-optimierte Websites, Shopify E-Commerce-Lösungen und maßgeschneiderte App-Entwicklung. Steigern Sie Ihre Online-Präsenz mit unserer Expertise.",
  // ... andere Metadaten
};

export default function RootLayout({
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
        {children}
        <FooterSection />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}