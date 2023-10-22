"use client"
import bgCompany from '@/public/hero-company.webp';

import Image from 'next/image';
import { useTranslations } from 'next-intl';


export default function Hero() {
  const t = useTranslations('Hero Contact');
    return (
        <div className="relative min-h-[300px]">
        <Image
          src={bgCompany}
          alt="Descripción de la imagen"
          fill
          className="object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center text-white bg-opacity-30 backdrop-blur-lg pl-4">
        <h2 className="text-4xl font-light mb-4">{t('title')}
        <br></br>
        {t('title 2')}</h2>
        </div>
      </div>
    );
  }