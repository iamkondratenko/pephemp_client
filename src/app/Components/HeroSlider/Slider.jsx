'use client'

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import Image from 'next/image'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from './HeroSlider.module.css';

// import required modules
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
import CircularText from '../CircularText/CircularText';

// ... (ваш импорт и другие части компонента)

export default function Slider({ props, horizontalActiveSlider, onSlideChange, first }) {
  const [currentSlider, setCurrentSlider] = useState();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(horizontalActiveSlider);
    }
  }, [horizontalActiveSlider]);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        effect={'fade'}
        navigation={false}
        modules={[EffectFade, Navigation, Pagination]}
        className={style.swiper}
        onSlideChange={(e) => {
          onSlideChange(e.activeIndex);
        }}
        ref={swiperRef}
        initialSlide={horizontalActiveSlider}
      >
        {props.map((item, i) => (
          <SwiperSlide className={`${style.swiper_slide} ${style.jumpingImage}`} key={i} style={{ backgroundColor: item.bg }}>
            <div className={style.content}>
              <div className={style.imageContainer}>
                <Image src={item.img} width={138} height={429} alt="Picture of the author" />
                <div className={style.imageShadow}></div>
              </div>
              <div className={style.blurOverlay}></div>
            </div>
            <div className={style.content}>
              <h2 className={style.text_container}>{item.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
