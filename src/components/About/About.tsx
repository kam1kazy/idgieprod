import Image from 'next/image';
import { useEffect, useRef } from 'react';

import AboutContent from './AboutTabs';
import { updatePosition } from './hooks/updatePosition';

const styles = {
  textCenterAfter: `text-[4.875rem] w-auto relative font-bold leading-[6.4625rem] after:content-[''] after:absolute after:top-auto after:bottom-[-1.875rem] after:-left-0 after:w-[4.063rem] after:h-[0.313rem] after:bg-[#87745f]`,
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      updatePosition({ sectionRef, titleRef });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Запускаем анимацию
    animationFrameId = requestAnimationFrame(animate);

    // Очистка
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[55.5rem] flex flex-col justify-between bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="w-[81.25rem] mr-auto ml-auto flex-row items-start justify-between flex-1 flex flex-col mb-[5rem] z-[1] mt-[4.375rem]">
        <h2
          ref={titleRef}
          className={`${styles.textCenterAfter} will-change-transform`}
          style={{ transform: 'translateY(0)' }}
        >
          Дмитрий <br /> Эбергарт
        </h2>
        <div className="max-w-[38.4rem]">
          <AboutContent />
        </div>
      </div>

      {/* Фоновое изображение */}
      <div className="absolute inset-0 mt-[0] ml-[auto] mr-[20.875rem]">
        <Image src="/images/idgie.png" alt="Background" fill className="object-contain" priority />
      </div>
    </section>
  );
};

export default About;
