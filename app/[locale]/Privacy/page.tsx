import Content from "@/app/components/Privacy/Content";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Privacy',
  alternates: {
    canonical: '/Privacy',
  },
}
export default function Privacy() {

  return (
    <>
    <Content></Content>
    </>
  );
}
