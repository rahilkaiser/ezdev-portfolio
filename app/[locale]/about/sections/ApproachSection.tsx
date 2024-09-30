import { useTranslations } from "next-intl";


export default function ApproachSection() {

  const t = useTranslations("About");

  
  return (
    <section className="py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          {t("approach.title")}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6">{t("approach.passion")}</h3>
            <p className="text-lg text-gray-300 mb-8">{t("approach.passionDesc")}</p>
            <div className="h-1 w-24 bg-accent"></div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6">{t("approach.freshPerspective")}</h3>
            <p className="text-lg text-gray-300 mb-8">{t("approach.freshPerspectiveDesc")}</p>
            <div className="h-1 w-24 bg-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}