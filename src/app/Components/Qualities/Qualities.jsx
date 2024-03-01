import React, { useEffect, useState } from 'react';
import style from './Qualities.module.css';
import Image from 'next/image';

const Qualities = ({ qualitiesArray }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const elements = document.querySelectorAll(`.${style.Headline}`);
    const viewportHeight = window.innerHeight;
    const center = viewportHeight / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - center);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='Container f_row'>

        <div className={'f_half'}>
            <div className={style.PictureWraper}>
                <Image src={qualitiesArray[activeIndex].pic} width={138} height={429} alt={qualitiesArray[activeIndex].label} />
            </div>
        </div>

        <div className={'f_half'}>
            {qualitiesArray.map((item, index) => (
                <h3
                key={index}
                className={`${style.Headline} ${index === activeIndex ? style.active : ''}`}
                >
                {item.label}
                </h3>
            ))}
        </div>

    </div>
  );
};

export default Qualities;
