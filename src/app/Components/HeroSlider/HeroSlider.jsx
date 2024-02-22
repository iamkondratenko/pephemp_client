'use client'

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from './Slider';
import { Controller, EffectFade, Navigation, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import style from './HeroSlider.module.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

export default function HeroSlider({products}) {

    const sliderData = products


    const [verticalActiveSlider, setVerticalActiveSlider] = useState(0);
    const [horizontalActiveSlider, setHorizontalActiveSlider] = useState(0);
    const verticalSliderRef = useRef(null)
    
    
  
    const handleSlideChange = (activeIndex) => {
      setHorizontalActiveSlider(activeIndex);
    };


    const horizontalHandleNextClick = () => {
      if (sliderData[0].length > horizontalActiveSlider + 1) {
        setHorizontalActiveSlider(horizontalActiveSlider + 1)
      } else {
        setHorizontalActiveSlider(0)
      }
        
    }

    const horizontalHandlePrevClick = () => {
      if (0 < horizontalActiveSlider) {
        setHorizontalActiveSlider(horizontalActiveSlider - 1)
      } 
      else {
        setHorizontalActiveSlider(sliderData[0].length - 1) 
      }
    }


    const verticalHandleNextClick = () => {
      if (sliderData.length > verticalActiveSlider + 1) {
        setVerticalActiveSlider(verticalActiveSlider + 1)
      } else {
        setVerticalActiveSlider(0)
      }
        
    }

    const verticalHandlePrevClick = () => {
      if (0 < verticalActiveSlider) {
        setVerticalActiveSlider(verticalActiveSlider - 1)
      } 
      else {
        setVerticalActiveSlider(sliderData.length - 1) 
      }
    }
    
    // console.log(verticalSliderRef);

    function setBodyBackgroundColor(color) {
      document.body.style.backgroundColor = color;
    }

    useEffect(() => {
      // console.log(horizontalActiveSlider);
      if (verticalSliderRef.current) {
          verticalSliderRef.current.swiper.slideTo(verticalActiveSlider);
          setBodyBackgroundColor(sliderData[verticalActiveSlider][0].bg)
      }
  }, [verticalActiveSlider])

  
    return (
      <>
        <Swiper
          direction={'vertical'}
          effect={'fade'}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className={style.swiper}
          ref={verticalSliderRef}
        >
          
          {sliderData.map((item, i)=>{
            return(
              <SwiperSlide className={style.swiper_slide} key={i} >
                <Slider props={item} horizontalActiveSlider={horizontalActiveSlider} onSlideChange={handleSlideChange} first={true} />
              </SwiperSlide>
            )
          })}
          


        </Swiper>


        <div className={style.arrows}>
          <div className={style.vertical_arrow}>
            <div className={style.swiper_button_next + ' ' + "swiper-button-next" + ' ' + "swiper-up"} onClick={verticalHandleNextClick}/>
            <div className={style.swiper_button_prev + ' ' + "swiper-button-prev" + ' ' + "swiper-down"} onClick={verticalHandlePrevClick}/>        
          </div>
          
          <div className={style.horizontal_arrow}>
            <div className={style.swiper_button_next + ' ' + "swiper-button-next" + ' ' + "swiper-left"} onClick={horizontalHandleNextClick}/>
            <div className={style.swiper_button_prev + ' ' + "swiper-button-prev" + ' ' + "swiper-right"} onClick={horizontalHandlePrevClick}/>        
          </div>
        </div>


        
        

      </>
    );
  }