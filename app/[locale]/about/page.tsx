"use client"
import Loader from '@/app/components/Loader';
import Content from '@/app/components/company/Content';
import Hero from '@/app/components/company/Hero';
import { useState, useEffect } from 'react'


export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoading(false);
        observer.disconnect();
      }
    }, {
      threshold: 0,
    });
    observer.observe(document.body);
  }, []);
  return (
   <>
   {
      isLoading ?  <Loader></Loader> : 
      <div>
        <Hero></Hero>
        <Content></Content>
      </div>
    }
   </>
  );
}
