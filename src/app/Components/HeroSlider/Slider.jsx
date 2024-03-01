'use client'

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Button from '@/app/Components/Button/Button'
import { useCart } from '@/app/contexts/CartContext'; // Путь к вашему CartContext



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


  const { state, dispatch } = useCart();

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    dispatch({ type: 'TOGGLE_CART' });
    console.log(item);
  };


  

  

  const handleUpdateQuantity = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

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
            <div className={`${style.SliderContainer}`}>
              <div className={`${style.content} ${style.bg_logo}`}>
                <div className={style.imageContainer}>
                  <Image src={item.img} width={138} height={429} alt="Picture of the author" />
                  <div className={style.imageShadow}></div>
                </div>
                <div className={style.blurOverlay}></div>
              </div>
              <div className={`${style.content} ${style.text_section}`}>
                <div className={style.text_section_wraper}>
                  <h2 className={style.text_container}>{item.title}</h2>
                  <p className={style.p_container}>{item.description}</p>
                  <div className={style.ButtonsWrap}>
                    <div onClick={() => handleAddToCart(item)}>
                    <Button text={'Додати у кошик'} type={'primary'}  />
                    </div>
                    <div onClick={() => handleAddToCart(item)}>
                    <Button text={'Детальніше'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
