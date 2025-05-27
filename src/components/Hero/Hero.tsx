import Image from 'next/image';
import HeroContent from './HeroContent';
import ToolsPanel from './ToolsPanel';
import { Category } from '@/types/playlist';

interface IProps {
  handleOpenModal: (category: Category) => void;
  isModalOpen: boolean;
}

const Hero: React.FC<IProps> = ({ handleOpenModal, isModalOpen }: IProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between text-white overflow-hidden">
      <div className="w-[81.25rem] mr-auto ml-auto mt-auto mb-[3.75rem] z-[1]">
        <HeroContent onOpenModal={handleOpenModal} isModalOpen={isModalOpen} />
        <ToolsPanel />
      </div>

      {/* Фоновое изображение */}
      <div className="absolute inset-0 mt-[0] ml-[auto] mr-[auto]">
        <Image src="/images/bg.jpg" alt="Background" fill className="object-contain" priority />
      </div>
      <div className={`absolute inset-0 ${isModalOpen ? 'bg-black/80' : 'bg-black/38'}`} />
    </section>
  );
};

export default Hero;
