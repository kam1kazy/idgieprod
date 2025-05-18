import React from 'react';
import Image from 'next/image';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
  return (
    <div className="flex items-center gap-3 w-32 h-[140px] flex-col">
      <span className="relative w-6 h-6 pl-[3px]">
        <Image
          src="/images/icons/volume-max.svg"
          alt="volume"
          fill
          priority
          className="[filter:brightness(0)_invert(1)]"
        />
      </span>
      <div className="flex-1 w-[5px] bg-gray-700 rounded-full overflow-hidden">
        <div className="w-full bg-white" style={{ height: `${volume}%` }} />
      </div>
    </div>
  );
};

export default VolumeControl;
