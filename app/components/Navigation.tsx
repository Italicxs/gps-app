'use client';

import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from '@/public/gpslogo.webp'
import Image from "next/image";
import NavigationResponsiveLink from './NavigationResponsiveLink';



export default function Navigation() {
  const t = useTranslations('Navigation');
  let pathname = usePathname() || "/";
  
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          {/* Navbar */}
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> 
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <div className="w-32 h-16 flex-col justify-start items-start inline-flex mt-6">
                    <Image src={Logo} alt={"GPS Logo"}>
                    </Image>
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <NavigationLink href="/" prefetch>{t('home')}</NavigationLink>
                  <NavigationLink href="/Services" prefetch>{t('services')}</NavigationLink>
                  <div className="relative group cursor-pointer" onClick={toggleDropdown}>
                    <span
                      className={`${
                        pathname === "/Solutions"
                          ? "border-black h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase"
                          : "border-transparent text-black hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase"
                        }`}>
                      {t('solutions')}
                      <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-3 h-3 ml-1">
                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                      </svg>
                    </span>
                    {/* Dropdown menu */}
                    {isSolutionsOpen && (
                      <div className="absolute left-0 mt-2 space-y-2 bg-white border border-gray-200 rounded-sm shadow-lg z-20"> 
                        <NavigationLink href="/Designings" prefetch className="block px-4 py-2 text-black hover:bg-gray-100 uppercase">{t('walk')}</NavigationLink>
                        <NavigationLink href="/Processes" prefetch className="block px-4 py-2 text-black hover:bg-gray-100 uppercase">{t('processes')}</NavigationLink>
                      </div>
                    )}
                  </div>
                  {/* SOLUTIONS link with dropdown */}

                  <NavigationLink href="/about" prefetch>{t('about')}</NavigationLink>
                  <NavigationLink href="/Contact" prefetch>{t('contact')}</NavigationLink>

                  <LocaleSwitcher />
               
                </div>
              </div>

              {/* Hamburger */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-m text-black-400 hover:text-black-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              {/* Hamburger */}
            </div>
          </div>
          {/* Navbar */}

          {/* RESPONSIVE */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">

            <NavigationResponsiveLink href="/" prefetch>{t('home')}</NavigationResponsiveLink>
            <NavigationResponsiveLink href="/services" prefetch>{t('services')}</NavigationResponsiveLink>
              <span
                className={`${
                  pathname === ""
                    ? "bg-black-50 border-black text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase"
                    : "border-transparent text-black hover:border-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase"
                  }`}
                onClick={toggleDropdown}
              >
                {t('solutions')}
              </span>
              {isSolutionsOpen && (
                <div className="bg-white border border-gray-200 rounded-sm shadow-lg z-20">
                  <NavigationResponsiveLink href="/Designings" prefetch className="block px-4 py-2 text-black hover:bg-gray-100 uppercase ">{t('walk')}</NavigationResponsiveLink>
                  <NavigationResponsiveLink href="/Processes" prefetch className="block px-4 py-2 text-black hover:bg-gray-100 uppercase  ">{t('processes')}</NavigationResponsiveLink>
                  
                </div>
              )}
            <NavigationResponsiveLink href="/about" prefetch>{t('about')}</NavigationResponsiveLink>
            <NavigationResponsiveLink href="/Contact" prefetch>{t('contact')}</NavigationResponsiveLink>
            <div className="border-transparent text-black hover:border-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <LocaleSwitcher></LocaleSwitcher>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}








