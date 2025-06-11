'use client';

import React, { useEffect, useState } from 'react';

import styles from './GlowEffect.module.css';

const GlowEffect: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

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
    transform: `translateY(${scrollY * 0.25}px) translateX(${Math.sin(scrollY * 0.006) * 60}px) scale(${1 + Math.sin(scrollY * 0.0025) * 0.15})`,
    borderRadius: `${40 + Math.sin(scrollY * 0.004) * 30}% ${60 + Math.cos(scrollY * 0.005) * 30}% ${40 + Math.sin(scrollY * 0.006) * 30}% ${60 + Math.cos(scrollY * 0.007) * 30}% / ${70 + Math.cos(scrollY * 0.0035) * 25}% ${30 + Math.sin(scrollY * 0.0045) * 25}% ${70 + Math.cos(scrollY * 0.0055) * 25}% ${30 + Math.sin(scrollY * 0.0065) * 25}%`,
  };

  const glowRightStyle = {
    transform: `translateY(${scrollY * 0.15}px) translateX(${Math.cos(scrollY * 0.008) * 50}px) scale(${1 + Math.cos(scrollY * 0.0035) * 0.1})`,
    borderRadius: `${60 + Math.cos(scrollY * 0.003) * 30}% ${40 + Math.sin(scrollY * 0.004) * 30}% ${60 + Math.cos(scrollY * 0.005) * 30}% ${40 + Math.sin(scrollY * 0.006) * 30}% / ${30 + Math.sin(scrollY * 0.0025) * 25}% ${70 + Math.cos(scrollY * 0.0035) * 25}% ${30 + Math.sin(scrollY * 0.0045) * 25}% ${70 + Math.cos(scrollY * 0.0055) * 25}%`,
  };

  return (
    <div className={styles.glowContainer}>
      <div className={`${styles.glow} ${styles.glowLeft}`} style={glowLeftStyle}></div>
      <div className={`${styles.glow} ${styles.glowRight}`} style={glowRightStyle}></div>
    </div>
  );
};

export default GlowEffect;
