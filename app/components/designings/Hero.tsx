import bgDesign from '@/public/Hero3D.webp';
import Image from 'next/image';


export default function Hero(){

    return(
        <div className="relative min-h-[300px]">
        <Image
          src={bgDesign}
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-opacity-80 backdrop-blur-lg">
        </div>
      </div>
    )
}