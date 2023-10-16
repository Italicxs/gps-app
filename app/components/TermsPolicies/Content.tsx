"use client"

import { useTranslations } from 'next-intl';

export default function Content() {
  const t = useTranslations('Terms');

    return (
      <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-light mb-6 text-[#4A60A1]">{t('title')}</h3>
        <div className="text-lg text-black p-4 text-left px-4">
        {t('description')}        </div>

        <h4 className="text-lg font-semibold mt-4 text-left px-4">{t('title 1')}</h4>
        <p className="text-lg text-black p-4 text-left">
        {t('desc 1')}
        </p>

        <h4 className="text-lg font-semibold mt-4 text-left px-4">{t('title 2')}</h4>
        <p className="text-lg text-black p-4 text-left">
        {t('desc 2')}
        </p>

        <h4 className="text-lg font-semibold mt-4 text-left px-4">{t('title 3')}</h4>
        <p className="text-lg text-black p-4 text-left">
        {t('desc 3')}
        </p>

        <h4 className="text-lg font-semibold mt-4 text-left px-4">{t('title 4')}</h4>
        <p className="text-lg text-black p-4 text-left"> 
        {t('desc 4')}
        </p>

        <h4 className="text-lg font-semibold mt-4 text-left px-4">{t('title 5')}</h4>
        <p className="text-lg text-black p-4 text-left">
        {t('desc 5')}
        </p>

        <h4 className="text-lg font-semibold mt-4 text-left px-4">{t('title 6')}</h4>
        <p className="text-lg text-black p-4 text-left">
        {t('desc 6')}
        </p>
        
        <p className="text-lg text-black p-4 mt-4 text-left">
        {t('conclusion')}
        </p>
      </div>
    </div>
    );
  }
  