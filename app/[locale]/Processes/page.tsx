import Loader from '@/app/components/Loader';
import Content from '@/app/components/processes/Content';
import Hero from '@/app/components/processes/Hero';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Processes',
  alternates: {
    canonical: '/Processes',
  },
}
export default function Processes(){
    return(
      <>
      <Loader></Loader> 
         <main>
           <Hero></Hero>
           <Content></Content>
         </main>
      </>
        
    )
}