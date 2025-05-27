import { useState, useEffect } from 'react';

export const useVolumeDrag = (onVolumeChange: (volume: number) => void) => {
  const [isDragging, setIsDragging] = useState(false);

  const calculateVolume = (clientY: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const height = rect.height;
    const clickY = clientY - rect.top;
    const newVolume = Math.max(0, Math.min(100, 100 - (clickY / height) * 100));
    return Math.round(newVolume);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const newVolume = calculateVolume(e.clientY, e.currentTarget);
    onVolumeChange(newVolume);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const volumeElement = document.querySelector('.volume-slider') as HTMLDivElement;
    if (volumeElement) {
      const newVolume = calculateVolume(e.clientY, volumeElement);
      onVolumeChange(newVolume);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return { handleMouseDown };
};
