import Image from 'next/image'
import { useTranslations } from 'next-intl';
import bg from '@/public/bg.webp'
import bgMobile from '@/public/bg-mobile.jpg'

import React, { useState } from "react";
import dynamic from "next/dynamic";

const Link = dynamic(() => import("next/link"));

export default function Hero() {

  const [scrollTo, setScrollTo] = useState(null);

  const handleClick = (event: any, targetId: any) => {
    event.preventDefault();
    setScrollTo(targetId);

    const getTargetElement = () => {
      return document.getElementById(targetId);
    };

    const targetElement = getTargetElement();

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  const t = useTranslations('Hero');

  return (
    <>
     <div className="relative overflow-hidden min-h-screen sm:min-h-[900px]">
      <div className="hidden md:block">
        <Image
          src={bg}
          alt=""
          layout="fixed"
          priority
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="md:hidden">
        <Image
          src={bgMobile}
          alt=""
          layout="fixed"
          priority
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center py-4 sm:py-8">
        <div className="w-full max-w-screen-lg mx-4 sm:mx-auto text-center text-white p-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-6xl font-bold uppercase">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            {t('description')}
          </p>
          <Link href="#AboutUs" className="btn btn-primary" onClick={(event) => handleClick(event, "AboutUs")}>
            <button className="bg-blue-500 text-white px-2 sm:px-4 py-2 mt-2 sm:mt-4 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
              {t('button')}
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
