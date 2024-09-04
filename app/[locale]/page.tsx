import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {

  const trans = useTranslations('Hero');
  const locale = useLocale();

  
  return (
    <main>
      <h1>{trans("Title")}</h1>
    </main>
  );
}
