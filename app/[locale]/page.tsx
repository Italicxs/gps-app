"use client"
import { useState, useEffect } from 'react'
import Hero from '../components/Hero';
import AboutUs from '../components/home/AboutUs';
import Services from '../components/home/Services';
import HowWeWork from '../components/home/HowWeWork';
import WhoAre from '../components/home/WhoAre';
import HowWeHelp from '../components/home/HowWeHelp';
import WhyUs from '../components/home/WhyUs';
import Loader from '../components/Loader';

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : (
        <div>
          <Hero />
          <div id='AboutUs'><AboutUs /></div>
          <Services />
          <HowWeWork />
          <WhoAre />
          <HowWeHelp />
          <WhyUs />
        </div>
      )}
    </>
  );
}


    