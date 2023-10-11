import Link from "next/link";
import {useTranslations} from 'next-intl';


export default function Hero() {
    const t = useTranslations('Hero');
    return(
        <>
        <div className="relative overflow-hidden min-h-screen">
        <video src="/hero-bg.webm" autoPlay loop playsInline className="absolute inset-0 object-cover w-full h-full"></video>
        
        </div>
        </>
    )
}
