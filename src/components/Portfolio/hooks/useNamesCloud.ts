import { useState } from 'react';

import { artists } from '../content/NamesCloudList';

export const useNamesCloud = () => {
  const itemsPerPage = 3;
  const transitionItems = itemsPerPage;

  const loopedArtists = [
    ...artists.slice(-transitionItems),
    ...artists,
    ...artists.slice(0, transitionItems),
  ];

  const [currentSlide, setCurrentSlide] = useState(transitionItems);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const newSlide = prevSlide - 1;
      if (newSlide < transitionItems) {
        setTimeout(() => setCurrentSlide(artists.length + transitionItems - 1), 0);
      }
      return newSlide;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const newSlide = prevSlide + 1;
      if (newSlide >= artists.length + transitionItems) {
        setTimeout(() => setCurrentSlide(transitionItems), 0);
      }
      return newSlide;
    });
  };

  return {
    currentSlide,
    loopedArtists,
    handlePrevSlide,
    handleNextSlide,
  };
};
