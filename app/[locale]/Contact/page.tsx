"use client"
import { useState, useEffect } from 'react'
import Hero from '@/app/components/contact/Hero';
import Content from '@/app/components/contact/Content';
import Loader from '@/app/components/Loader';
import Contact from '@/app/components/contact/ContactForm';

export default function Company(){
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
        <Contact></Contact>
        </main>
      }
     </>
    );
}