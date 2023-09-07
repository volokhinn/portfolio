import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '../public/styles/CodeSlider.css';

const CodeSlider = () => {
  const swiperParams = {
    direction: 'vertical', // Установите направление на вертикальное
    slidesPerView: 5,
    initialSlide: 3,
    activeIndex: 3,
    centeredSlides: true,
    spaceBetween: 180,
    loop: false,
    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        display: 'flex',
        height: '800px',
        marginTop: '-50px',
      }}>
      <Swiper {...swiperParams}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((slideNumber) => (
          <SwiperSlide key={slideNumber} className={`w-full h-100`}>
            <img
              src={`/codeslides/code${slideNumber}.png`}
              alt={`Slide ${slideNumber}`}
              style={{ userSelect: 'none' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CodeSlider;
