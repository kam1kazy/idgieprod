import { Category } from '@/components/Player/songlist';

import { services } from './content/ContentList';
import ServiceButton from './ServiceButton';

interface HeroContentProps {
  onOpenModal: (category: Category) => void;
  isModalOpen: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ onOpenModal, isModalOpen }) => {
  const handleServiceClick = (category: Category) => {
    onOpenModal(category);
  };

  return (
    <div
      className={`flex-1 flex flex-col justify-end items-center z-1 px-4 md:px-0 ${
        isModalOpen ? 'opacity-10' : 'opacity-100'
      }`}
    >
      <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[14.4rem] font-bold mb-4 md:mb-8 text-center">
        IDGIE.Prod
        <sup className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-normal align-super">
          ®
        </sup>
      </h1>
      <div className="flex md:flex-wrap lg:flex-nowrap  gap-4 md:gap-8 justify-center items-center mb-8 md:mb-12 w-full max-w-[1200px]">
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
