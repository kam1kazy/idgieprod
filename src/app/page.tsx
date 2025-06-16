'use client';

import { useState } from 'react';

import About from '@/components/About/About';
import Artists from '@/components/Artists/Artists';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Mem from '@/components/Mem/Mem';
import { Category } from '@/components/Player/songList';
import WorksModal from '@/components/Player/WorksModal';
import Portfolio from '@/components/Portfolio/Portfolio';
import Quote from '@/components/Quote/Quote';

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
      <Quote />
      <Portfolio />
      <Artists />
      <Mem />
      <Footer />
    </>
  );
}
