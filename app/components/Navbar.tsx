"use client"

import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from '@/public/gpslogo.webp'
import Image from "next/image";
import { useRouter } from 'next/router';


export default function Navbar() {
  let pathname = usePathname() || "/";
  
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);

  const router = useRouter();

  const toggleDropdown = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const DropdownLang = () => {
    setIsLanguagesOpen(!isLanguagesOpen);
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
                    <Image src={Logo} alt={""}>
                    </Image>
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link
                    href="/"
                    prefetch
                    className={`${pathname === "/"
                      ? "border-black h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      : "border-transparent text-black hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                  >HOME
                  </Link>
                  <Link
                    href="/Services"
                    prefetch
                    className={`${
                      pathname === "/Services"
                        ? "border-blue-500 text-blue-500 h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-blue-500 hover:text-blue-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                  >
                    SERVICES
                  </Link>
                  <div
                    className="relative group cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <span
                      className={`${
                        pathname === "/Solutions"
                          ? "border-black h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-black hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        }`}
                    >
                      SOLUTIONS
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor" 
                        className="w-3 h-3 ml-1">
                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                      </svg>
                    </span>
                    {/* Dropdown menu */}
                    {isSolutionsOpen && (
                      <div className="absolute left-0 mt-2 space-y-2 bg-white border border-gray-200 rounded-sm shadow-lg z-20"> {/* Ajustar z-index aquí */}
                        {/* Add your dropdown menu items here */}
                        <Link
                          href="/Designings"
                          prefetch
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                        3D WALKTHROUGHT  
                        </Link>
                        <Link
                          href="/Processes"
                          prefetch
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                         PROCESSES
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* SOLUTIONS link with dropdown */}
                  <Link
                    href="/Company"
                    prefetch
                    className={`${
                      pathname === "/Company"
                        ? "border-black h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-black hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                  > COMPANY
                  </Link>
                  <Link
                    href="/Contact"
                    prefetch
                    className={`${
                      pathname === "/Contact"
                        ? "border-black h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-black hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                  >
                    CONTACT US
                  </Link>
                  {/* LANGUAJE DROPDOWN MENU */}
                  <div
                    className="relative group cursor-pointer"
                    onClick={DropdownLang}
                  >
                    <span
                      className={`${
                        pathname === "/Solutions"
                          ? "border-black h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-black hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        }`}
                    >
                      ES
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor" 
                        className="w-3 h-3 ml-1">
                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                      </svg>
                    </span>
                    {/*Language Dropdown menu */}
                    {isLanguagesOpen && (
                      <div className="absolute left-0 mt-2 space-y-2 bg-white border border-gray-200 rounded-sm shadow-lg z-20"> 
                        <Link
                          href="/Designings"
                          prefetch
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                        EN 
                        </Link>
                      </div>
                    )}
                  </div>
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
              <Link
                href="/"
                prefetch
                className={`${
                  pathname === "/"
                    ? "bg-black-50 border-black text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    : "border-transparent text-black hover:border-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  }`}
              >
                HOME
              </Link>
              <Link
                href="/Services"
                prefetch
                className={`${
                  pathname === "/Services"
                    ? "bg-black-50 border-blue-500 text-blue-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    : "border-transparent text-blue-500 hover:border-blue-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  }`}
              >
                SERVICES
              </Link>
              <span
                className={`${
                  pathname === ""
                    ? "bg-black-50 border-black text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    : "border-transparent text-black hover:border-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  }`}
                onClick={toggleDropdown}
              >
                SOLUTIONS
              </span>
              {/* Languague Dropdown menu */}
              {isSolutionsOpen && (
                <div className="bg-white border border-gray-200 rounded-sm shadow-lg z-20">
                  
                  <Link
                    href="/Designings"
                    prefetch
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                  >
                    3D WALKTHROUGHT
                  </Link>
                  <Link
                    href="/Processes"
                    prefetch
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                  >
                    PROCESSES
                  </Link>
                </div>
              )}
              <Link
                href="/Company"
                prefetch
                className={`${
                  pathname === "/Company"
                    ? "bg-black-50 border-black text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    : "border-transparent text-black hover:border-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  }`}
              >
                COMPANY
              </Link>
              <Link
                href="/Contact"
                prefetch
                className={`${
                  pathname === "/Contact"
                    ? "bg-black-50 border-black text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    : "border-transparent text-black hover:border-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  }`}
              >
                CONTACT US
              </Link>
              <span
                className={`${
                  pathname === ""
                    ? "bg-black-50 border-black text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    : "border-transparent text-black hover:border-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  }`}
                onClick={DropdownLang}
              >
                EN
              </span>
              {/* Language Dropdown menu */}
              {isLanguagesOpen && (
                <div className="bg-white border border-gray-200 rounded-sm shadow-lg z-20">
                  
                  <Link
                    href="/Designings"
                    prefetch
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                  >
                    ES
                  </Link>
                  
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
  