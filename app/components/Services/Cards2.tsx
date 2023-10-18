"use client"

import React, { useState } from "react";
import Link from "next/link";

import CardFour from '@/public/DetectionCard.webp'
import CardFive from '@/public/MainteinanceCard.webp'
import CardSix from '@/public/InstallationCard.webp'
import Image from "next/image";
import { useTranslations } from 'next-intl';


export default function Cards2() {

  const t = useTranslations('Cards 2');

  const [scrollTo, setScrollTo] = useState(null);

  const handleClick = (event: any, targetId: any) => {
    event.preventDefault();
    setScrollTo(targetId);

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const icon = (
    <svg fill="currentColor" viewBox="0 0 16 16" className="w-16 h-16 mx-auto mb-2">
      <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z" />
    </svg>
  );

  return (
    <div>
      <div className="bg-gray-100 pt-2">
        <div className="container mx-auto mt-8 flex flex-wrap justify-center">
          {/* Tarjeta 1 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white p-4 shadow-md h-full">
              <div className="text-center">
                  <Image
                  src={CardFour}
                  alt="Detection"
                  className="rounded-lg h-auto md:h-32 w-full object-cover mx-auto mb-4"
                  loading="lazy"
                ></Image>
                <h3 className="text-md text-blue-500 font-light mb-2 uppercase">{t('header 1')}</h3>
                <h2 className="text-xl font-semibold mb-2 capitalize">{t('title 1')}</h2>
                {/* Utiliza el valor del id de la sección como identificador en el href */}
                <Link href="#Detection" className="btn btn-primary" onClick={(event) => handleClick(event, "Detection")}>
                  {icon}
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white p-4 shadow-md h-full">
              <div className="text-center">
              <Image
                  src={CardFive}
                  alt="Mainteinance"
                  className="rounded-lg h-auto md:h-32 w-full object-cover mx-auto mb-4"
                  loading="lazy"
                ></Image>
                <h3 className="text-md text-blue-500 font-light mb-2 uppercase">{t('header 2')}</h3>
                <h2 className="text-xl font-semibold mb-2 capitalize">{t('title 2')}</h2>
                
                <Link href="#Mainteinance" className="btn btn-primary" onClick={(event) => handleClick(event, "Mainteinance")}>
                  {icon}
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white p-4 shadow-md h-full">
              <div className="text-center">
              <Image
                  src={CardSix}
                  alt="Install"
                  className="rounded-lg h-auto md:h-32 w-full object-cover mx-auto mb-4"
                  loading="lazy"
                ></Image>
                <h3 className="text-md text-blue-500 font-light mb-2 uppercase">{t('header 3')}</h3>
                <h2 className="text-xl font-semibold mb-2 capitalize">{t('title 3')}</h2>
                <Link href="#Install" className="btn btn-primary" onClick={(event) => handleClick(event, "Install")}>
                  {icon}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
