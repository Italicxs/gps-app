"use client"

import { useTranslations } from 'next-intl';
import Link from "next/link";

export default function Content(){

  const t = useTranslations('Processes');

    return(
        <div className="relative min-h-[300px]">
      <div className="bg-transparent py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-light mb-6 text-[#4A60A1] text-center uppercase">
        {t('title')}
      
        </h1>

        <div className="text-lg text-black p-4 text-left">
        {t('description 1')}
          <br />
          <br />
          {t('description 2')}
          <br />
          <br />
          {t('description 3')}
          <br/>
          <br/>
          {t('description 4')}
          {t('conclusion')}
          </div>
          <Link href="/Contact" className='flex items-center justify-center'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl">
          {t('contact')}
          </button>
          </Link>
            </div>
          </div>
          </div>
    )
    }