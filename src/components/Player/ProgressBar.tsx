import React from 'react';

interface ProgressBarProps {
  currentTime: string;
  totalTime: string;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, totalTime, progress }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-white" style={{ width: `${progress}%` }} />
      </div>
      <div className="text-white text-sm font-semibold">{currentTime}</div>
      <span className="text-gray-400 text-sm">/ {totalTime}</span>
    </div>
  );
};

export default ProgressBar;
