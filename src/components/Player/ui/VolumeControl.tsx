import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';

import { useVolumeDrag } from '../hooks/useVolumeDrag';
import { useVolumeIcon } from '../hooks/useVolumeIcon';
import { useVolumeState } from '../hooks/useVolumeState';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  className?: string;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange, className }) => {
  const { getVolumeIcon } = useVolumeIcon(volume);
  const { handleVolumeIconClick } = useVolumeState(volume, onVolumeChange);
  const volumeSliderRef = useRef<HTMLDivElement>(null);
  const { handleMouseDown } = useVolumeDrag(onVolumeChange, volumeSliderRef);
  const volumeControlContainerRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const volumeStep = 5;
      let newVolume = volume;

      if (e.deltaY < 0) {
        newVolume = Math.min(100, volume + volumeStep);
      } else {
        newVolume = Math.max(0, volume - volumeStep);
      }
      onVolumeChange(newVolume);
    },
    [volume, onVolumeChange]
  );

  useEffect(() => {
    const containerElement = volumeControlContainerRef.current;
    if (containerElement) {
      containerElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  return (
    <div
      className={`flex items-center gap-3 w-32 h-[8.75rem] flex-col ${className}`}
      ref={volumeControlContainerRef}
    >
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
        ref={volumeSliderRef}
        style={{ touchAction: 'none' }}
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
