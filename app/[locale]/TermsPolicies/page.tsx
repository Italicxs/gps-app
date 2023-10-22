import Content from "@/app/components/TermsPolicies/Content";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'TermsPolicies',
  alternates: {
    canonical: '/TermsPolicies',
  },
}
export default function TermsPolicies() {

    return (
      <>
      <Content></Content>
      </>
    );
  }
  