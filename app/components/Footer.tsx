"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from '@/public/gpslogo.webp'
import { useTranslations } from 'next-intl';

export default function Footer() {

  const t = useTranslations('Footer');

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const emailText = 'emilianomachado967@gmail.com';
    navigator.clipboard.writeText(emailText).then(function () {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto p-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/">
              <div className="w-32 h-16 flex-col justify-start items-start inline-flex mt-2">
                <Image src={logo} alt={""}></Image>
                </div>
              </Link>
            <h2 className="text-2xl font-semibold mb-4 capitalize">{t('title 1')}</h2>
            <h3>{t('call')}</h3>
            <p  className="mt-4">
            {t('description')}
            </p>
            <p className="mt-4" onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
            {copied ? 'Email Copied' : 'Email: contacto@gps.sol.pa'}
          </p>
          <div className="w-64 h-10 mt-8 justify-between items-center gap-4 flex">
          <div className="p-2.5 bg-gray-200 rounded-lg flex-col justify-center items-center inline-flex cursor-pointer">
            <div className="px-1 justify-center items-center inline-flex" />
            <svg
            viewBox="0 0 1024 1024"
            fill="#4A60A1"
            className="w-7 h-7"
          >
          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
          </svg>
          </div>
          <div className="p-2.5 bg-gray-200 rounded-lg flex-col justify-center items-center inline-flex cursor-pointer">
            <div className="px-1 justify-center items-center inline-flex" />
            <svg
            viewBox="0 0 512 512"
            fill="#4A60A1"
            className="w-7 h-7"
          >
            <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
          </svg>
          </div>
          <div className="p-2.5 bg-gray-200 rounded-lg flex-col justify-center items-center inline-flex cursor-pointer">
          <div className="px-1 justify-center items-center inline-flex" />
          <svg
            viewBox="0 0 512 512"
            fill="#4A60A1"
            className="w-7 h-7"
          >
            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
          </svg>
          </div>
        </div>

          </div>

          {/* Sección 2 */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4 capitalize">{t('title 2')}</h2>
            <ul>
              <li className="mb-4 capitalize"> 
                <Link href="/">{t('link 1')}</Link>
              </li>
              <li className="mb-4 capitalize"> 
                <Link href="/Services">{t('link 2')}</Link>
              </li>
              <li className="mb-4 capitalize"> 
                <Link href="/Designings">{t('link 3')}</Link>
              </li>
              <li className="mb-4 capitalize"> 
                <Link href="/Processes">{t('link 5')}</Link>
              </li>
            </ul>
          </div>

          {/* Sección 3 */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4 capitalize">{t('title 3')}</h2>
            <ul>
              <li className="mb-4 capitalize"> 
                <Link href="/about">{t('link 6')}</Link>
              </li>
              <li className="mb-4 capitalize"> 
                <Link href="/Contact">{t('link 7')}</Link>
              </li>
            </ul>
          </div>

          {/* Sección 4 */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4 capitalize">{t('title 4')}</h2>
            <ul>
              <li className="mb-4 capitalize"> 
                <Link href="/TermsPolicies">{t('link 8')}</Link>
              </li>
              <li className="mb-4 capitalize"> 
                <Link href="/Privacy">{t('link 9')}</Link>
              </li>
              <li className="mb-4 capitalize"> 
                <Link href="/Securitys">{t('link 10')}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center capitalize">
          <p>&copy; {new Date().getFullYear()} {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
    
