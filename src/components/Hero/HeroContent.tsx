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
      className={`flex-1 flex flex-col justify-end items-center z-1 ${
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
