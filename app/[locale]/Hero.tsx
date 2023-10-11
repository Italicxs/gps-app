import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <>
       <video
        src="/bg.webm"
        autoPlay
        loop
        muted
        playsInline
        width="100%" 
        height="auto" 
        className="absolute inset-0 object-cover w-full h-auto" 
                    />

        </>
  );
}       
