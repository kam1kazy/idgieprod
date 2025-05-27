'use client';

import { useState } from 'react';
import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';
import { Category } from '@/types/playlist';
import WorksModal from '@/components/Hero/WorksModal';

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
      <WorksModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialCategory={selectedCategory}
      />
      <Hero handleOpenModal={handleOpenModal} isModalOpen={isModalOpen} />
      <About />
    </>
  );
}
