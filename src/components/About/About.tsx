'use client';

import Image from 'next/image';
import { useState } from 'react';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-[800px] flex flex-col justify-between bg-black text-white overflow-hidden">
      <div className="w-[81.25rem] mr-auto ml-auto flex-1 flex flex-col mb-[5rem] z-1">
        <h2 className="text-[5.875rem] font-bold mb-8 w-[300] leading-[6.4625rem] mt-[100px]">
          Дмитрий Эбергарт
        </h2>
      </div>

      {/* Фоновое изображение */}
      <div className="absolute inset-0 mt-[0] ml-[auto] mr-[auto]">
        <Image
          src="/images/person.png"
          alt="Background"
          fill
          className="object-contain max-h-[100%]"
          priority
        />
        <div className="absolute inset-0 bg-black/18" />
      </div>
    </section>
  );
};

export default Hero;
