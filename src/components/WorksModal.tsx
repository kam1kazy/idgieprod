import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './Player/ProgressBar';
import PlayerControls from './Player/PlayerControls';
import VolumeControl from './Player/VolumeControl';
import Playlist from './Player/Playlist';
import { Category, Genre, playlistData, Track } from '@/types/playlist';

const genreToImage: Record<Genre, string> = {
  POP: '/images/genres/pop.png',
  'HIP-HOP': '/images/genres/hip-hop.png',
  ROCK: '/images/genres/rock.png',
};

interface WorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: Category;
}

const WorksModal: React.FC<WorksModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'Песни под ключ',
}) => {
  const [volume, setVolume] = useState(66);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [selectedGenre, setSelectedGenre] = useState<Genre>('POP');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    console.log('WorksModal: Получена новая категория:', initialCategory);
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleTrackSelect = (track: Track) => {
    if (audioRef.current) {
      audioRef.current.src = track.src;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentTrack(track);
    }
  };

  const handleSeek = (progress: number) => {
    if (audioRef.current) {
      const newTime = (progress / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const currentTracks = playlistData[selectedCategory][selectedGenre];

  return (
    <div
      className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-[#06090bbf]/75 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none '
      }`}
      onClick={onClose}
    >
      <div
        className={`relative m-4 w-full h-[80%] max-w-[70%] max-h-[70%] rounded-3xl p-10 backdrop-blur-md backdrop-filter-none transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-28 scale-90 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
        <div className="flex flex-col md:flex-row gap-10">
          {/* Левая часть: текст и треки */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="text-sm text-[#047cb9] mb-2">Our New Album</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                {currentTrack?.title || 'Till The Wheels'}
                <br />
                Fall Off
              </h1>
              <div className="text-gray-300 mb-6">ft. Lil Durk, Capella Grey</div>
              <ProgressBar
                currentTime={formatTime(currentTime)}
                totalTime={formatTime(duration)}
                progress={(currentTime / duration) * 100 || 0}
                onSeek={handleSeek}
              />
            </div>
            <Playlist
              selectedCategory={selectedCategory}
              selectedGenre={selectedGenre}
              currentTrack={currentTrack || undefined}
              onCategoryChange={setSelectedCategory}
              onGenreChange={setSelectedGenre}
              onTrackSelect={handleTrackSelect}
              tracks={currentTracks}
            />
          </div>
          {/* Правая часть: обложка и контролы */}
          <div className="flex flex-col items-center justify-center gap-8">
            <img
              src={genreToImage[selectedGenre]}
              alt="Album Cover"
              className="w-48 h-48 rounded-xl object-cover shadow-lg mb-4"
            />
            <PlayerControls onPlay={handlePlay} isPlaying={isPlaying} />
            <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksModal;
