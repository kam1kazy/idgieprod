import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);

  const getVolumeIcon = () => {
    if (volume === 0) return '/images/icons/volume-off.svg';
    if (volume <= 50) return '/images/icons/volume-min.svg';
    return '/images/icons/volume-max.svg';
  };

  const handleVolumeIconClick = () => {
    if (volume === 0) {
      onVolumeChange(previousVolume);
    } else {
      setPreviousVolume(volume);
      onVolumeChange(0);
    }
  };

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

  return (
    <div className="flex items-center gap-3 w-32 h-[8.75rem] flex-col">
      <span
        className="relative w-6 h-6 pl-[0.188rem] cursor-[pointer] hover:opacity-80 transition-opacity"
        onClick={handleVolumeIconClick}
      >
        <Image
          src={getVolumeIcon()}
          alt="volume"
          fill
          priority
          className="[filter:brightness(0)_invert(1)]"
        />
      </span>
      <div
        className="volume-slider flex-1 w-[0.313rem] bg-gray-700 rounded-full overflow-hidden flex items-end cursor-[pointer] hover:bg-gray-600 transition-colors"
        onMouseDown={handleMouseDown}
      >
        <div
          className="w-full bg-white hover:bg-blue-400 transition-colors"
          style={{ height: `${volume}%` }}
        />
      </div>
    </div>
  );
};

export default VolumeControl;
