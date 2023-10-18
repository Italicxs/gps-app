"use client"
import Loader from '@/app/components/Loader';
import Content from '@/app/components/designings/Content';
import Hero from '@/app/components/designings/Hero';
import { useState, useEffect } from 'react'


export default function Designings() {
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
      <main>
        <Hero></Hero>
        <Content></Content>
      </main>
    }
   </>
  );
}
