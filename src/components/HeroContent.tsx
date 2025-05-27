import React from 'react';
import ServiceButton from './ServiceButton';
import { Category } from '@/types/playlist';

interface HeroContentProps {
  onOpenModal: (category: Category) => void;
  isModalOpen: boolean;
}

const services = [
  {
    title: 'ПЕСНИ ПОД КЛЮЧ' as Category,
    description:
      'Создаем уникальные треки в любом жанре — от текста до готового звучания, точно под ваш вкус.',
  },
  {
    title: 'Аранжировка' as Category,
    description:
      'Профессиональная обработка звука для чистоты, глубины и мощного звучания на любой технике.',
  },
  {
    title: 'Сведение-мастеринг' as Category,
    description:
      'Продуманная музыкальная база, которая сделает вашу песню живой, яркой и запоминающейся.',
  },
];

const HeroContent: React.FC<HeroContentProps> = ({ onOpenModal, isModalOpen }) => {
  const handleServiceClick = (category: Category) => {
    console.log('HeroContent: Выбрана категория:', category);
    onOpenModal(category);
  };

  return (
    <div
      className={`flex-1 flex flex-col justify-end mb-[5rem] items-center z-1 ${
        isModalOpen ? 'opacity-10' : 'opacity-100'
      }`}
    >
      <h1 className="text-[14.4rem] md:text-[14.4rem] font-bold mb-8 text-center">
        IDGIE.Prod<sup className="text-[8rem] font-normal align-super">®</sup>
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
        {services.map((service) => (
          <ServiceButton
            key={service.title}
            title={service.title}
            description={service.description}
            onClick={() => handleServiceClick(service.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
