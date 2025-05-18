import React, { useState } from 'react';
import TrackList from './Player/TrackList';
import ProgressBar from './Player/ProgressBar';
import PlayerControls from './Player/PlayerControls';
import VolumeControl from './Player/VolumeControl';

const tracks = [
  { title: 'Beautiful Mistakes', duration: '2:34' },
  { title: 'Best My Heart', duration: '2:34' },
  { title: 'Cold (feat. Future)', duration: '2:34' },
  { title: 'Daylight', duration: '2:34' },
];

interface WorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorksModal: React.FC<WorksModalProps> = ({ isOpen, onClose }) => {
  const [volume, setVolume] = useState(66);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <div
      className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-[#06090bbf]/75 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none '
      }`}
      onClick={onClose}
    >
      <div
        className={`relative m-4 w-full max-w-[70%] rounded-3xl p-10 backdrop-blur-md backdrop-filter-none transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-28 scale-90 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row gap-10">
          {/* Левая часть: текст и треки */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="text-sm text-[#047cb9] mb-2">Our New Album</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Till The Wheels
                <br />
                Fall Off
              </h1>
              <div className="text-gray-300 mb-6">ft. Lil Durk, Capella Grey</div>
              <ProgressBar currentTime="1:15" totalTime="2:34" progress={50} />
            </div>
            <TrackList tracks={tracks} />
          </div>
          {/* Правая часть: обложка и контролы */}
          <div className="flex flex-col items-center justify-center gap-8">
            <img
              src="/images/genres/pop.png"
              alt="Album Cover"
              className="w-48 h-48 rounded-xl object-cover shadow-lg mb-4"
            />
            <PlayerControls onPlay={handlePlay} />
            <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksModal;
