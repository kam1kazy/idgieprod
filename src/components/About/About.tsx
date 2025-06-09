import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { updatePosition } from './hooks/updatePosition';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      updatePosition({ sectionRef, titleRef });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white pt-8 md:pt-40 pb-4 md:pb-20 bg-gradient-to-b from-black to-gray-900"
    >
      {/* Gradient Overlay */}
      <div className="w-full flex-col max-w-[81.25rem] px-4 mx-auto flex justify-center relative z-20">
        <h2 className="text-white mb-[2.8rem] text-[3rem] sm:text-[4rem] md:text-[4.875rem] font-bold">
          ABOUT
        </h2>
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-[4.375rem] w-full">
          {/* Image and Name/Quote */}
          <div className="flex-1   flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-full h-[20rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] max-w-[25rem] lg:max-w-none">
              <Image
                src="/images/idgie-crop.jpg"
                alt="Дмитрий Эбергарт"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-white text-4xl font-bold mt-8">ДМИТРИЙ ЭБЕРГАРТ aka IDGIE</h3>
            <p className="text-gray-300 text-3xl italic mt-4">
              Музыка - мой дом. Заходи, пожалуйста. <br /> Я точно знаю, как в нём строить хиты!
            </p>
          </div>

          {/* Text Content */}
          <div className="flex-1 gap-[1.5rem] flex flex-col max-w-prose relative mt-8 lg:mt-0 lg:ml-auto">
            <p className="text-gray-300 text-base md:text-[1.4rem] leading-relaxed mb-4">
              30 лет. 14 лет в индустрии, 11 из них на проф. уровне
            </p>
            <p className="text-white text-xl md:text-2xl font-bold mb-8">
              Продюсер. Сонграйтер. Звукорежиссёр. Артист. Человек и пароход.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <p className="text-orange-500 text-[3.6rem] font-bold">1000+</p>
                <p className="text-gray-500 text-base">аранжировок</p>
              </div>
              <div className="text-center">
                <p className="text-orange-500 text-[3.6rem] font-bold">1000+</p>
                <p className="text-gray-500 text-base">сведенных треков</p>
              </div>
              <div className="text-center">
                <p className="text-orange-500 text-[3.6rem] font-bold">300+</p>
                <p className="text-gray-500 text-base">авторских песен</p>
              </div>
            </div>

            <p className="text-white text-lg md:text-xl font-semibold mb-2">Жанры:</p>
            <p className="text-gray-300 text-base md:text-[1.4rem] leading-relaxed mb-4">
              Поп, хип-хоп, рок, R&B, хаус, бэйс и многие другие <br />
              Мои треки попадали в топ-чарты <br />
              Некоторые — собирали 20+ млн на YouTube
            </p>

            <p className="text-gray-300 text-base md:text-[1.4rem] leading-relaxed mb-2">
              Также писал саундтреки для игр компании Wargaming <br />И работал над саунд-дизайном
              короткометражек
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
