"use client"

  import { useState, useEffect, useCallback, useRef, useMemo  } from 'react'
  import slide1 from '@/public/IMPLEMENT.webp';
  import slide2 from '@/public/ANALYZE.webp';
  import slide3 from '@/public/DESIGNING.webp';
  import slide4 from '@/public/VALIDATE.webp';
  import slide5 from '@/public/IDENTIFY.webp';
  import slide6 from '@/public/EXECUTE.webp';
  import { useTranslations } from 'next-intl';


  export default function HowWeWork(){
    const t = useTranslations('HowWeWork');
    const slides = [
      
      {
        image: slide1,
        title: <> {t('slider 1')} </> ,
        description: <> {t('description 1')}  </> ,
      },
      {
        image: slide2,
        title: <> {t('slider 2')} </> ,
        description: <> {t('description 2')}  </> ,
      },
      {
        image: slide3,
        title: <> {t('slider 3')} </> ,
        description: <> {t('description 3')}  </> ,
      },
      {
        image: slide4,
        title: <> {t('slider 4')} </> ,
        description: <> {t('description 4')}  </> ,
      },
      {
        image: slide5,
        title: <> {t('slider 5')} </> ,
        description: <> {t('description 5')}  </> ,
      },
      {
        image: slide6,
        title: <> {t('slider 6')} </> ,
        description: <> {t('description 6')}  </> ,
      },
    ];
    
    const touchStartXRef = useRef(null);
    const touchEndXRef = useRef(null);
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = useMemo(() => {
      return () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    }, [currentIndex, slides.length]);
  
    const nextSlide = useMemo(() => {
      return () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    }, [currentIndex, slides.length]);
  
    useEffect(() => {
      const handleTouchStart = (e: any) => {
        touchStartXRef.current = e.touches[0].clientX;
      };
  
      const handleTouchMove = (e: any ) => {
        touchEndXRef.current = e.touches[0].clientX;
      };
  
      const handleTouchEnd = () => {
        if (touchStartXRef.current && touchEndXRef.current) {
          const touchDiff = touchStartXRef.current - touchEndXRef.current;
          if (touchDiff > 50) {
            nextSlide();
          } else if (touchDiff < -50) {
            prevSlide();
          }
        }
  
        touchStartXRef.current = null;
        touchEndXRef.current = null;
      };
  
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
  
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }, [touchStartXRef, touchEndXRef, prevSlide, nextSlide]);
  
      const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
      };
        return (
          
          <div>
            <div className="bg-white py-10">
              <div className="container mx-auto text-center">
                <h1 className="text-lg text-black lg:text-2xl font-light mb-4 uppercase">{t('title')}</h1>
              </div>
            </div>
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:space-x-20 p-3">
              <div className="lg:w-1/2 relative">
              <div
                style={{
                  backgroundImage: `url(${JSON.stringify(slides[currentIndex].image.src)})`,
                  transition: 'background-image 1.0s ease-in-out',
                }}
                className="w-full h-80 lg:h-[300px] rounded-xl bg-center bg-cover"
              ></div>
              <div
                className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"  
                onClick={prevSlide}
              >
                <svg
                fill="currentColor"
                viewBox="0 0 16 16" height="30px" width="30px">
                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z"/></svg>
              </div> 
              <div
                className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                onClick={nextSlide}
              >
                <svg
                fill="currentColor"
                viewBox="0 0 16 16" height="30px" width="30px">
                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z"/>
                  </svg>
              </div>
              <div className="flex justify-center space-x-2 mt-4">  
              {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`h-2 w-2 rounded-full cursor-pointer ${
                      currentIndex === slideIndex
                        ? 'bg-black/80'
                        : 'bg-black/40'
                    }`}
                  ></div> 
                ))}
              </div>
              </div>
      
              <div className="lg:w-1/3 mt-4 lg:mt-16">
                <h1 className="text-2xl lg:text-3xl font-semibold text-center text-black/60 uppercase">
                  {slides[currentIndex].title}
                </h1>
                <p className="text-lg lg:text-base mt-2">
                  {slides[currentIndex].description}  
                </p>
              </div>
            </div>
          </div>
        );
      }
      
