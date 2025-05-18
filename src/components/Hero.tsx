import Link from 'next/link';
import React from 'react';

const ICONS = [
  { label: 'Frame Blox', icon: 'crop_square' },
  { label: 'Supa Blox', icon: 'bolt' },
  { label: 'Hype Blox', icon: 'whatshot' },
  { label: 'Ultra Blox', icon: 'star' },
  { label: 'Ship Blox', icon: 'send' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 -z-10">
        {/* Замените src на свою ссылку */}
        <img
          src="ВАША_ССЫЛКА_НА_ИЗОБРАЖЕНИЕ"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Верхняя панель */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">
            Jay Cole<sup>®</sup>
          </span>
          <span className="bg-gray-800 text-xs px-2 py-1 rounded-full ml-2">Available</span>
        </div>
        <button className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
          Menu
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Основной контент */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-7xl md:text-9xl font-bold mb-8 text-center">
          Jay Cole<sup className="text-4xl align-super">®</sup>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
          <Link
            href="/works"
            className="text-center group cursor-pointer transition-transform hover:scale-105"
          >
            <div className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
              Music Works
            </div>
            <div className="text-sm text-gray-300">
              Designing digital experiences that captivate, connect, and convert.
            </div>
          </Link>
          <div className="text-center">
            <div className="text-lg font-semibold mb-2">Brand</div>
            <div className="text-sm text-gray-300">
              We craft bold, memorable brand identities that tell your story and leave a lasting
              impression.
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold mb-2">UI/UX</div>
            <div className="text-sm text-gray-300">
              Intuitive, user-focused interfaces that elevate engagement and drive seamless
              interactions.
            </div>
          </div>
        </div>
      </div>

      {/* Кнопки/иконки */}
      <div className="flex flex-wrap justify-center gap-4 pb-10">
        {ICONS.map(({ label, icon }) => (
          <button key={label} className="bg-gray-800 px-6 py-3 rounded-lg flex items-center gap-2">
            <span className="material-icons">{icon}</span>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
