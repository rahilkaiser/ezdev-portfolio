import { useTranslations } from "next-intl";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-32 ">
        <h1 className="text-5xl font-bold mb-8 text-center text-accent">{t("title")}</h1>
        <p className="text-lg text-center mx-auto max-w-3xl text-muted-foreground">{t("subtitle")}</p>
        <ContactSection showTitle={false} />
      </div>
    </main>
  );
}
