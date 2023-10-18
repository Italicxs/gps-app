"use client"
import Loader from '@/app/components/Loader';
import Content from '@/app/components/processes/Content';
import Hero from '@/app/components/processes/Hero';
import { useState, useEffect } from 'react'

export default function Processes(){
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
    return(
      <>
      {
         isLoading ?  <Loader></Loader> : 
         <main>
           <Hero></Hero>
           <Content></Content>
         </main>
       }
      </>
        
    )
}