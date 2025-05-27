'use client';

import { useState } from 'react';
import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';
import WorksModal from '@/components/Player/WorksModal';
import Header from '@/components/Header/Header';
import { Category } from '@/types/playlist';
import Portfolio from '@/components/Portfolio/Portfolio';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('Песни под ключ');

  const handleOpenModal = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <WorksModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialCategory={selectedCategory}
      />
      <Hero handleOpenModal={handleOpenModal} isModalOpen={isModalOpen} />
      <About />
      <Portfolio />
    </>
  );
}
