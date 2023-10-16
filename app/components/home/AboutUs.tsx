"use client"

import {useTranslations} from 'next-intl';

export default function AboutUs() {

  const t = useTranslations('AboutUs');

  return (
    <div className="bg-transparent py-10 p-3">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-light mb-4 text-black uppercase">{t('title')}</h1>
        <p className="text-lg text-black">
        {t('description')}
        </p>
  
      </div>
    </div>
  );
}
