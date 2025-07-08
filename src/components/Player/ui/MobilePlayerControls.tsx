import Image from 'next/image';

import { usePlayer } from '../context/PlayerContext';
import { useVolumeState } from '../hooks/useVolumeState';
import { Track } from '../songList';

interface MobilePlayerControlsProps {
  tracks: Track[];
}

const MobilePlayerControls: React.FC<MobilePlayerControlsProps> = ({ tracks }) => {
  const { isPlaying, handlePlay, handlePrevTrack, handleNextTrack, volume, handleVolumeChange } =
    usePlayer();
  const { handleVolumeIconClick } = useVolumeState(volume, handleVolumeChange);

  return (
    <div className="flex items-center justify-center gap-6 w-full py-4 rounded-xl lg:hidden">
      {/* Prev */}
      <button
        onClick={() => handlePrevTrack(tracks)}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition"
      >
        <span className="relative w-6 h-6">
          <Image
            src="/images/icons/skip.svg"
            alt="prev"
            fill
            priority
            className="[filter:brightness(0)_invert(1)]"
          />
        </span>
      </button>
      {/* Play/Pause */}
      <button
        onClick={handlePlay}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:scale-105 transition"
      >
        <span className="relative w-6 h-6">
          <Image
            src={isPlaying ? '/images/icons/stop.svg' : '/images/icons/play.svg'}
            alt={isPlaying ? 'stop' : 'play'}
            fill
            priority
            className="[filter:brightness(0)]"
          />
        </span>
      </button>
      {/* Next */}
      <button
        onClick={() => handleNextTrack(tracks)}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition"
      >
        <span className="relative w-6 h-6 rotate-180">
          <Image
            src="/images/icons/skip.svg"
            alt="next"
            fill
            priority
            className="[filter:brightness(0)_invert(1)]"
          />
        </span>
      </button>
      {/* Volume */}
      <button
        onClick={handleVolumeIconClick}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <span className="relative w-6 h-6">
          <Image
            src={volume === 0 ? '/images/icons/volume-off.svg' : '/images/icons/volume-max.svg'}
            alt="volume"
            fill
            priority
            className="[filter:brightness(0)_invert(1)]"
          />
        </span>
      </button>
    </div>
  );
};

export default MobilePlayerControls;
