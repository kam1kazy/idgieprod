import React, { useState, useEffect, useRef } from 'react';

interface ProgressBarProps {
  currentTime: string;
  totalTime: string;
  progress: number;
  onSeek: (time: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, totalTime, progress, onSeek }) => {
  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const calculateTime = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const clickX = clientX - rect.left;
    const percentage = (clickX / width) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const newProgress = calculateTime(e.clientX, e.currentTarget);
    onSeek(newProgress);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !progressRef.current) return;
    const newProgress = calculateTime(e.clientX, progressRef.current);
    onSeek(newProgress);
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
