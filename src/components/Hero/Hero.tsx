'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from './Header';
import HeroContent from './HeroContent';
import ToolsPanel from './ToolsPanel';
import WorksModal from './WorksModal';
import { Category } from '@/types/playlist';

const TOOLS = [
  { label: 'Universal Audio', icon: 'images/tools/uad.svg' },
  { label: 'Cubase', icon: 'images/tools/cubase.svg' },
  { label: 'Ableton Link', icon: 'images/tools/abletonlink.svg' },
  { label: 'FL Studio', icon: 'images/tools/fl-studio.svg' },
  { label: 'Pro Tools', icon: 'images/tools/protools.svg' },
];

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('Песни под ключ');

  const handleOpenModal = (category: Category) => {
    console.log('Hero: Получена категория:', category);
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 mt-[0] ml-[auto] mr-[auto]">
        <Image src="/images/bg.jpg" alt="Background" fill className="object-contain" priority />
        <div className={`absolute inset-0 ${isModalOpen ? 'bg-black/80' : 'bg-black/38'}`} />
      </div>

      <Header />
      <HeroContent onOpenModal={handleOpenModal} isModalOpen={isModalOpen} />
      <ToolsPanel tools={TOOLS} />

      <WorksModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialCategory={selectedCategory}
      />
    </section>
  );
};

export default Hero;
