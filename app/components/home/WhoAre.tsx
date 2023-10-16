import Image from "next/image";
import mpContent from "@/public/mapacontent.png.webp";
import { useTranslations } from 'next-intl';

export default function WhoAre() {
  
  const t = useTranslations('WhoAre');
  
  return (
    <div className="bg-white py-10 p-3">
      <div className="container mx-auto text-center">
        <h1 className="font-light lg:text-2xl mb-4 text-black uppercase">{t('title')}</h1>
        <div className="flex flex-wrap items-center">

          <div className="w-full md:w-1/2 md:pr-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black/60 mb-4 uppercase">{t('subtitle')}</h2>
              <p className="text-lg text-black text-left p-3">
              {t('description')}
              </p>
            </div>
          </div>

          <div className="w-full lg:mx-24 md:w-1/2 mt-4 md:mt-0 md:max-w-md mx-auto sm:mx-0">
            <div className="bg-white p-4 rounded-sm shadow-md">
            <Image
                src={mpContent}
                alt="Map"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
