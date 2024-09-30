import { useTranslations } from "next-intl";

export default function ApproachSection() {
  const t = useTranslations("About");

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
          {t("approach.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">{t("approach.passion")}</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">{t("approach.passionDesc")}</p>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-accent mt-auto"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">{t("approach.freshPerspective")}</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">{t("approach.freshPerspectiveDesc")}</p>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-accent mt-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}