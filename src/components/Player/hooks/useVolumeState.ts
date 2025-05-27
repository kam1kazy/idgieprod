import { useState } from 'react';

export const useVolumeState = (initialVolume: number, onVolumeChange: (volume: number) => void) => {
  const [previousVolume, setPreviousVolume] = useState(initialVolume);

  const handleVolumeIconClick = () => {
    if (initialVolume === 0) {
      onVolumeChange(previousVolume);
    } else {
      setPreviousVolume(initialVolume);
      onVolumeChange(0);
    }
  };

  return { handleVolumeIconClick };
};
