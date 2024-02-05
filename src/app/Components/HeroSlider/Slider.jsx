'use client'

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from './HeroSlider.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider({ props, activeSlider, onSlideChange }) {

    const [currentSlider, setCurrentSlider] = useState()

    const swiperRef = useRef(null);

    const itemSlide = useSwiperSlide()

    useEffect(() => {
        console.log(activeSlider);
        if (swiperRef.current) {
            // Переход к активному слайду при изменении activeSlider
            swiperRef.current.swiper.slideTo(activeSlider);
        }
    }, [activeSlider])

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={style.swiper}
        onSlideChange={(e) => {
            onSlideChange(e.activeIndex);
          }}
        ref={swiperRef}
        initialSlide={activeSlider}  // Установка начального слайда
      >
        <SwiperSlide className={style.swiper_slide}>5% CBD OIL {props}</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>10% CBD OIL {props}</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>20% CBD OIL {props}</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>30% CBD OIL {props}</SwiperSlide>
      </Swiper>
    </>
  );
}
