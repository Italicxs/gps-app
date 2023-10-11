import Link from "next/link";
import {useTranslations} from 'next-intl';


export default function Hero() {
    const t = useTranslations('Hero');
    return(
        <>
        <div className="relative min-h-[900px]">
        <video src="/hero-bg.webm" autoPlay loop className="absolute inset-0 object-cover w-full h-full"></video>
        <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-5 bg-transparent w-full p-4 text-center text-white">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold uppercase">
          {t('title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          {t('description')}
          </p>
          <Link href="#AboutUs" className="btn btn-primary">
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-sm text-sm sm:text-base md:text-lg lg:text-xl">
          {t('button')}
          </button>
          </Link>

        </div>
            </div>
        </div>
        </>
    )
}
