import React from 'react';
import Image from 'next/image';
import Sketched from '@/public/plumbing.webp'
import Implemented from '@/public/Plumbing-.webp'
import { useTranslations } from 'next-intl';

export default function Content(){
  const t = useTranslations('Designings');
    return(
        <div className="bg-white py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-light mb-6 text-[#4A60A1] text-center uppercase">
          {t('title')}
          </h1>
  
          <div className="text-lg text-black p-4 text-left">
          {t('description')}
            <br />
            <br />
  
            <strong className='capitalize'>{t('subtitle')}</strong>
            <ul className="list-disc pl-5">
              <li>                        
              {t('li 1')}
              </li>
              <li>
              {t('li 2')}
              </li>
              <li>
              {t('li 3')}
              </li>
              <li>
              {t('li 4')}
              </li>
            </ul>
            <br />
  
            {t('conclusion')}
            <br />
            </div>
  
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md w-880 h-740">
                <Image
                  src={Sketched} 
                  alt="Sketched"
                  width={880}
                  height={740}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center uppercase">{t('sketched')}</h2>
                </div>
              </div>
            </div>
  
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <div className="bg-white rounded-lg overflow-hidden shadow-md w-880 h-740">
                <Image
                  src={Implemented} 
                  alt="Implemented"
                  width={880}
                  height={740}
                />
                <div className="p-4">
                <h2 className="text-xl font-semibold text-center uppercase">{t('implemented')}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}