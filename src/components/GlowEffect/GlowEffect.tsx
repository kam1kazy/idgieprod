'use client';

import { useEffect, useState } from 'react';

import styles from './GlowEffect.module.css';

const GlowEffect: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  {
    /*
      baseRadius: базовый радиус свечения
      radiusVariation: вариация радиуса
      baseScale: базовый масштаб
      scaleVariation: вариация масштаба
      translateVariation: вариация перемещения
  */
  }

  // Константы для настройки размеров свечения
  const GLOW_SIZE = {
    baseRadius: 60,
    radiusVariation: 30,
    baseScale: 1,
    scaleVariation: 0.15,
    translateVariation: 60,
  };

  const offsetX = 120; // Базовое смещение влево/вправо

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const glowLeftStyle = {
    transform: `
      translateY(${scrollY / 50 * 0.25}px)
      translateX(${
        -offsetX + // базовое смещение влево
        Math.sin(scrollY * 0.006) * GLOW_SIZE.translateVariation + // "змейка"
        Math.sin(scrollY * 0.002) * offsetX * 0.7 // сближение/расхождение к центру
      }px)
      scale(${GLOW_SIZE.baseScale + Math.sin(scrollY * 0.0025) * GLOW_SIZE.scaleVariation})
    `,
    borderRadius: `${GLOW_SIZE.baseRadius + Math.sin(scrollY * 0.004) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.cos(scrollY * 0.005) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.sin(scrollY * 0.006) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.cos(scrollY * 0.007) * GLOW_SIZE.radiusVariation}% / ${GLOW_SIZE.baseRadius + Math.cos(scrollY * 0.0035) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.sin(scrollY * 0.0045) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.cos(scrollY * 0.0055) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.sin(scrollY * 0.0065) * GLOW_SIZE.radiusVariation}%`,
  };

  const glowRightStyle = {
    transform: `
      translateY(${scrollY / 50 * 0.15}px)
      translateX(${
        offsetX + // базовое смещение вправо
        Math.cos(scrollY * 0.008) * GLOW_SIZE.translateVariation + // "змейка"
        -Math.sin(scrollY * 0.002) * offsetX * 0.7 // сближение/расхождение к центру
      }px)
      scale(${GLOW_SIZE.baseScale + Math.cos(scrollY * 0.0035) * GLOW_SIZE.scaleVariation})
    `,
    borderRadius: `${GLOW_SIZE.baseRadius + Math.cos(scrollY * 0.003) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.sin(scrollY * 0.004) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.cos(scrollY * 0.005) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.sin(scrollY * 0.006) * GLOW_SIZE.radiusVariation}% / ${GLOW_SIZE.baseRadius + Math.sin(scrollY * 0.0025) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.cos(scrollY * 0.0035) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.sin(scrollY * 0.0045) * GLOW_SIZE.radiusVariation}% ${GLOW_SIZE.baseRadius + Math.cos(scrollY * 0.0055) * GLOW_SIZE.radiusVariation}%`,
  };

  return (
    <div className={styles.glowContainer}>
      <div className={`${styles.glow} ${styles.glowLeft}`} style={glowLeftStyle}></div>
      <div className={`${styles.glow} ${styles.glowRight}`} style={glowRightStyle}></div>
    </div>
  );
};

export default GlowEffect;
