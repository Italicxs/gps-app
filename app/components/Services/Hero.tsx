import bgServices from '@/public/Services.webp';
import Image from 'next/image';
import { useTranslations } from 'next-intl';


export default function Hero() {
  const t = useTranslations('Hero Services');
    return (
        <div className="relative min-h-[300px]">
        <Image
          src={bgServices}
          alt="Descripción de la imagen"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-opacity-30 backdrop-blur-lg">
          <h2 className="text-4xl font-light mb-4 uppercase">{t('title')}</h2>
        </div>
      </div>
    );
  }