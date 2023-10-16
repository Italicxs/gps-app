"use client"
import Loader from '@/app/components/Loader';
import Analysis from '@/app/components/Services/Analysis';
import Cards from '@/app/components/Services/Cards';
import Cards2 from '@/app/components/Services/Cards2';
import Detection from '@/app/components/Services/Detection';
import GasInstallation from '@/app/components/Services/GasInstallation';
import Hero from '@/app/components/Services/Hero';
import Installation from '@/app/components/Services/Installation';
import Mainteinance from '@/app/components/Services/Mainteinance';
import Plans from '@/app/components/Services/Plans';
import { useState, useEffect } from 'react'



export default function Services(){

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
         <div>
           <Hero></Hero>
           <Cards></Cards>
           <Cards2></Cards2>
           <div id="Gas-Installation">
           <GasInstallation />
         </div>
           <div id="Analysis">
           <Analysis />
         </div>
         <div id="Design">
           <Plans />
         </div> 
         <div id="Detection">
         <Detection></Detection>
           </div>   
           <div id="Mainteinance">
           <Mainteinance></Mainteinance>
           </div>
           <div id="Install">
           <Installation></Installation>
           </div>
         </div>
       }
      </>
    )
}



