import { useProgressDrag } from './hooks/useProgressDrag';

interface ProgressBarProps {
  currentTime: string;
  totalTime: string;
  progress: number;
  onSeek: (time: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, totalTime, progress, onSeek }) => {
  const { progressRef, handleMouseDown } = useProgressDrag(onSeek);

  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        ref={progressRef}
        className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer hover:bg-gray-600 transition-colors"
        onMouseDown={handleMouseDown}
      >
        <div
          className="h-full bg-white hover:bg-blue-400 transition-colors"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-white text-sm font-semibold">{currentTime}</div>
      <span className="text-gray-400 text-sm">/ {totalTime}</span>
    </div>
  );
};

export default ProgressBar;
