import Image from 'next/image';

import { Category } from '@/components/Player/songList';

import HeroContent from './HeroContent';

interface IProps {
  handleOpenModal: (category: Category) => void;
  isModalOpen: boolean;
}

const Hero: React.FC<IProps> = ({ handleOpenModal, isModalOpen }: IProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between text-white overflow-hidden">
      <div className="w-full mb-[30px] max-w-[81.25rem] mr-auto ml-auto mt-auto lg:mb-[3.75rem] z-[1] px-4 md:px-0">
        <HeroContent onOpenModal={handleOpenModal} isModalOpen={isModalOpen} />
      </div>

      {/* Фоновое изображение */}
      <div className="absolute inset-0 mt-[0] ml-[auto] mr-[auto]  mb-[-30px]  w-full">
        <Image
          src="/images/idgie/hero.png"
          alt="Background"
          fill
          className="object-cover lg:object-contain"
          priority
        />
      </div>
      <div className={`absolute inset-0 ${isModalOpen ? 'bg-black/80' : 'bg-black/20'}`} />
    </section>
  );
};

export default Hero;
