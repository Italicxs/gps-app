import Loader from '@/app/components/Loader';
import Content from '@/app/components/company/Content';
import Hero from '@/app/components/company/Hero';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About',
  alternates: {
    canonical: '/About',
  },
}
export default function AboutPage() {
  
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
