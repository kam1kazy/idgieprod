import React from 'react';
import Image from 'next/image';

interface PlayerControlsProps {
  onPlay: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ onPlay }) => {
  return (
    <div className="flex items-center gap-6">
      <button
        onClick={onPlay}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:scale-105 pl-[0.188rem] transition cursor-[pointer]"
      >
        <span className="relative w-6 h-6 \">
          <Image
            src="/images/icons/play.svg"
            alt="play"
            fill
            priority
            className="[filter:brightness(0)]"
          />
        </span>
      </button>
    </div>
  );
};

export default PlayerControls;
