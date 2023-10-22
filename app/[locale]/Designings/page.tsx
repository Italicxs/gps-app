import Loader from '@/app/components/Loader';
import Content from '@/app/components/designings/Content';
import Hero from '@/app/components/designings/Hero';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Designings',
  alternates: {
    canonical: '/Designings',
  },
}
export default function Designings() {
 
  return (
   <>
    <Loader></Loader> 
      <main>
        <Hero></Hero>
        <Content></Content>
      </main>
   </>
  );
}
