import Image from 'next/image';

interface PlayerControlsProps {
  onPlay: () => void;
  isPlaying: boolean;
  className?: string;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ onPlay, isPlaying, className }) => {
  const plActive = !isPlaying ? 'pl-[0.188rem]' : 'pl-[0]';

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <button
        onClick={onPlay}
        className={`w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:scale-105 transition cursor-[pointer] ${plActive}`}
      >
        <span className="relative ml-[4px] w-6 h-6">
          <Image
            src={isPlaying ? '/images/icons/stop.svg' : '/images/icons/play.svg'}
            alt={isPlaying ? 'stop' : 'play'}
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
