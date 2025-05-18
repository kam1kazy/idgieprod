import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ICONS = [
  { label: 'Ableton Link', icon: 'images/tools/abletonlink.svg' },
  { label: 'Cubase', icon: 'images/tools/cubase.svg' },
  { label: 'FL Studio', icon: 'images/tools/fl-studio.svg' },
  { label: 'Pro Tools', icon: 'images/tools/protools.svg' },
];

const colorBrand = '#87745f';
const colorTools = '#171717';

const styles = {
  textCenterAfter: `after:content-[''] after:absolute after:-top-2 after:-left-3 after:w-3 after:h-3 after:border-t-[${colorBrand}] after:border-l-[${colorBrand}] after:border-l-2 after:border-t-2 after:border-solid`,
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 mt-[0] ml-[auto] mr-[auto]">
        {/* Замените src на свою ссылку */}
        <Image src="/images/bg.jpg" alt="Background" fill className="object-contain" priority />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Верхняя панель */}
      <div className="flex justify-between items-center p-6 z-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">
            IDGE.Prod<sup>®</sup>
          </span>
          <span className="bg-gray-800 text-xs px-2 py-1 rounded-full ml-2">Available</span>
        </div>
      </div>

      {/* Основной контент */}
      <div className="flex-1 flex flex-col justify-end mb-[5rem] items-center z-1">
        <h1 className="text-[14.4rem] md:text-[14.4rem] font-bold mb-8 text-center">
          IDGE.Prod<sup className="text-[8rem] font-normal align-super">®</sup>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
          <Link
            href="/works"
            className={`max-w-sm group cursor-pointer transition-transform relative hover:scale-105 ${styles.textCenterAfter}`}
          >
            <div className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
              Песни под ключ
            </div>
            <div className="text-sm text-gray-300">
              Создаем уникальные треки в любом жанре — от текста до готового звучания, точно под ваш
              вкус.
            </div>
          </Link>
          <Link
            href="/works"
            className={`max-w-sm group cursor-pointer transition-transform relative hover:scale-105 ${styles.textCenterAfter}`}
          >
            <div className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
              Аранжировка
            </div>
            <div className="text-sm text-gray-300">
              Профессиональная обработка звука для чистоты, глубины и мощного звучания на любой
              технике.
            </div>
          </Link>
          <Link
            href="/works"
            className={`max-w-sm group cursor-pointer transition-transform relative hover:scale-105 ${styles.textCenterAfter}`}
          >
            <div className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
              Сведение-мастеринг
            </div>
            <div className="text-sm text-gray-300">
              Продуманная музыкальная база, которая сделает вашу песню живой, яркой и
              запоминающейся.
            </div>
          </Link>
        </div>
      </div>

      {/* Кнопки/иконки */}
      <div className="flex flex-wrap justify-center gap-4 pb-10 z-1">
        {ICONS.map(({ label, icon }) => (
          <button
            key={label}
            className={`px-6 py-3 relative rounded-lg flex font-bold items-center w-60 h-12 gap-2 bg-[${colorTools}]`}
          >
            <Image
              src={icon}
              alt={label}
              fill
              className={`w-10 object-cover opacity-1 relative`}
              priority
            />
            {label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
