// components/CircularText.js
import React from 'react';
import styles from './CircularText.module.css';

const CircularText = ({ text }) => {
  const characters = text.split('');
  const radius = 100; // Радиус круга

  return (
    <div className={styles.circularTextContainer}>
      <svg height="200" width="200" className={styles.svgContainer}>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          {characters.map((char, index) => (
            <textPath key={index} xlinkHref={`#circle-path`} startOffset={(index / characters.length) * 100 + "%"}>{char}</textPath>
          ))}
        </text>
        <circle id="circle-path" cx="100" cy="100" r={radius} fill="transparent" stroke="transparent" />
      </svg>
    </div>
  );
};

export default CircularText;
