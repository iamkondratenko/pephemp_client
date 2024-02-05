'use client'

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from './Slider';
import { Controller } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from './HeroSlider.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function HeroSlider() {

    const [activeSlider, setActiveSlider] = useState(0);
  
    const handleSlideChange = (activeIndex) => {
      setActiveSlider(activeIndex);
    };

    // useEffect(()=>{
    //     console.log(activeSlider);
    // }, [activeSlider])
  
    return (
      <>
        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.swiper}
        >
          <SwiperSlide className={style.swiper_slide}>
            <Slider props={'1'} activeSlider={activeSlider} onSlideChange={handleSlideChange} />
          </SwiperSlide>
  
          <SwiperSlide className={style.swiper_slide}>
            <Slider props={'2'} activeSlider={activeSlider} onSlideChange={handleSlideChange} />
          </SwiperSlide>
  
          <SwiperSlide className={style.swiper_slide}>
            <Slider props={'3'} activeSlider={activeSlider} onSlideChange={handleSlideChange} />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }