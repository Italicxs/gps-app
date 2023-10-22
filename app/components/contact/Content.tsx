"use client"

import { useTranslations } from 'next-intl';

export default function Content() {
  const t = useTranslations('Contact');
    return (
      <div className="bg-white py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-light mb-6 text-[#4A60A1]">{t('header')}</h3>
          <h1 className="text-2xl font-semibold mb-6 text-[#4A60A1]">{t('title')}</h1>
          </div>
        </div>
    )
  }
  