import Content from "@/app/components/Securitys/Content";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Securitys',
  alternates: {
    canonical: '/Securitys',
  },
}
export default function Securitys() {

  return (
    <>
    <Content></Content>
    </>
  );
}
