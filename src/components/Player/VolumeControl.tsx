import Image from 'next/image';

import { useVolumeDrag } from './hooks/useVolumeDrag';
import { useVolumeIcon } from './hooks/useVolumeIcon';
import { useVolumeState } from './hooks/useVolumeState';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
  const { getVolumeIcon } = useVolumeIcon(volume);
  const { handleVolumeIconClick } = useVolumeState(volume, onVolumeChange);
  const { handleMouseDown } = useVolumeDrag(onVolumeChange);

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
