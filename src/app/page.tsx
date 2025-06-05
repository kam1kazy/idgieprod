'use client';

import { useState } from 'react';

// import About from '@/components/About/About';
// import AboutJournal from '@/components/About/AboutJournal';
import AboutJournalWithImage from '@/components/About/AboutJournalWithImage';
import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Gallery/Gallery';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import { Category } from '@/components/Player/songlist';
import WorksModal from '@/components/Player/WorksModal';
import NamesCloud from '@/components/Portfolio/NamesCloud';
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
      <AboutJournalWithImage />
      {/* <AboutJournal /> */}
      {/* <About /> */}
      <Portfolio />
      <NamesCloud />
      <Gallery />
      <Footer />
    </>
  );
}
