import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {JetBrains_Mono} from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',

});

export const metadata: Metadata = {
  title: "EasyDEV",
  description: "Professionelle Webentwicklung: SEO-optimierte Websites, Shopify E-Commerce-Lösungen und maßgeschneiderte App-Entwicklung. Steigern Sie Ihre Online-Präsenz mit unserer Expertise.",
  keywords: ["Webentwicklung", "SEO", "Shopify", "E-Commerce", "App-Entwicklung", "Professionelle Webentwicklung", "SEO-optimierte Websites", "Shopify E-Commerce-Lösungen", "maßgeschneiderte App-Entwicklung"],
  authors: [{ name: "EasyDEV", url: "https://easydev.com" }],
  creator: "EasyDEV",
  publisher: "EasyDEV",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const messages = await getMessages();
  
  return (
    <html lang="de">
      <body className={jetBrainsMono.variable}>
      <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
