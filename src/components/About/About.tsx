import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { updatePosition } from './hooks/updatePosition';

const styles = {
  textCenterAfter: `z-2 text-[4.875rem] w-auto absolute font-bold leading-[6.4625rem] after:content-[''] after:absolute after:top-auto after:bottom-[-1.875rem] after:-left-0 after:w-[4.063rem] after:h-[0.313rem] after:bg-[#87745f]`,
};

const AboutJournalWithImage: React.FC = () => {
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

  const textBlocks = [
    {
      title: 'Профессия',
      content: 'Продюсер. Сонграйтер. Звукорежиссёр. Артист. Человек и пароход',
    },
    {
      title: 'Опыт',
      content: 'За спиной: 1000 аранжировок, 1000 сведённых треков, 300 авторских песен',
    },
    {
      title: 'Жанры',
      content: 'Поп, хип-хоп, R&B, поп-рок, хаус, бэйс',
    },
    {
      title: 'Достижения',
      content:
        'Мои треки попадают в музыкальные чарты. На YouTube — отдельные релизы преодолели отметку в 20 миллионов. Помимо собственных проектов, я создавал саундтреки в сотрудничество с Wargaming.',
    },
    {
      title: 'Философия',
      content:
        'Сегодня плагинов — море, но настоящий звук со вкусом — дефицит. Я не работаю по шаблону. Я создаю треки, которые хочется слушать снова и снова. Не ради 15 секунд в TikTok, а ради глубокого погружения — когда включаешь в наушниках и залипаешь надолго',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-16 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="w-[81.25rem] h-[60rem] mx-auto flex items-center justify-center">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-[4.375rem] w-full">
          <h2
            ref={titleRef}
            className={`${styles.textCenterAfter} will-change-transform text-shadow-md`}
            style={{ transform: 'translateY(0)' }}
          >
            Дмитрий <br /> Эбергарт
          </h2>
          {/* Image */}
          <div className="flex-1 relative h-[50rem]">
            <Image
              src="/images/idgie.png"
              alt="Дмитрий Эбергарт"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 max-w-prose relative">
            <h2 className="text-5xl font-bold mb-12 after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-16 after:h-1 after:bg-[#87745f]">
              About
            </h2>
            {textBlocks.map((block, index) => (
              <div key={index} className="mb-6 pb-4 border-b border-gray-700 last:border-b-0">
                <h3 className="text-xl font-semibold mb-2 text-[#87745f]">{block.title}</h3>
                <p className="text-gray-300 text-[1.2rem] leading-relaxed">{block.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJournalWithImage;
