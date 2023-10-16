import React from 'react';
import Image from 'next/image';

interface SlideProps {
  slide: {
    image: string;
    title: string;
    description: string;
  };
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="slide">
      <Image src={slide.image} alt={slide.title}></Image>
    </div>
  );
};

export default Slide;