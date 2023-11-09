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
    const emailText = 'gasplum.pa@gmail.com';
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
            {copied ? 'Email Copied' : 'Email: gasplum.pa@gmail.com'}
          </p>
          <div className="w-64 h-10 mt-8 justify-between items-center gap-4 flex">
          <Link href='https://www.instagram.com/gasplum/'>
          <div className="p-2.5 bg-gray-200 rounded-lg flex-col justify-center items-center inline-flex cursor-pointer">
            <div className="px-1 justify-center items-center inline-flex" />
            <svg
            viewBox="0 0 1024 1024"
            fill="#4A60A1"
            className="w-7 h-7"
          >
          <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
          </svg>
          </div>
          </Link>
          <Link href='/'>
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
          </Link>
          <Link href='/'>
          <div className="p-2.5 bg-gray-200 rounded-lg flex-col justify-center items-center inline-flex cursor-pointer">
            <div className="px-1 justify-center items-center inline-flex" />
            <svg
            viewBox="0 0 24 24"
            fill="#4A60A1"
            className="w-7 h-7"
          >
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
          </svg>
          </div>
          </Link>
          
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
    
