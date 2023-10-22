"use client"
import Image from "next/image";
import mpContent from "@/public/card-2.webp";
import { useTranslations } from 'next-intl';

export default function Detection() {
  const t = useTranslations('Detection');

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-xl lg:text-2xl font-light mb-4 text-black uppercase">{t('header')}</h1>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black/60 mb-4 uppercase">{t('title')}</h2>
              <p className="text-lg text-black text-left p-3">
              {t('description')}
               </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:pr-8 md:mt-0 md:max-w-md mx-auto sm:mx-0">
            <div className="bg-white p-4 rounded-sm shadow-md">
            <div className="relative h-60">
                <Image
                  src={mpContent}
                  alt="Map"
                  fill
                  objectFit="cover"
                  className="rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
