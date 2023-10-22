import Hero from '@/app/components/contact/Hero';
import Content from '@/app/components/contact/Content';
import Loader from '@/app/components/Loader';
import Contact from '@/app/components/contact/ContactForm';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact',
  alternates: {
    canonical: '/Contact',
  },
}
export default function Company(){
    
    return (
     <>
      <Loader></Loader> 
        <main>
        <Hero></Hero>
        <Content></Content>
        <Contact></Contact>
        </main>
     </>
    );
}