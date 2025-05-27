import { useEffect, useState } from 'react';

import { Category, Genre, playlistData } from '@/components/Player/songlist';

import { useAudioPlayer } from './hooks/useAudioPlayer';
import { useTimeFormat } from './hooks/useTimeFormat';
import MiniPlayer from './MiniPlayer';
import PlayerControls from './PlayerControls';
import Playlist from './Playlist';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';

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
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [selectedGenre, setSelectedGenre] = useState<Genre>('POP');

  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    currentTrack,
    volume,
    showMiniPlayer,
    setShowMiniPlayer,
    handlePlay,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleTrackSelect,
    handleSeek,
    handleStop,
    handleVolumeChange,
  } = useAudioPlayer(66);

  const { formatTime } = useTimeFormat();

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (!isOpen && isPlaying) {
      setShowMiniPlayer(true);
    }
  }, [isOpen, isPlaying, setShowMiniPlayer]);

  const currentTracks = playlistData[selectedCategory][selectedGenre];

  return (
    <>
      <MiniPlayer isVisible={showMiniPlayer} onStop={handleStop} />
      <div
        className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-[#06090bbf]/75 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none '
        }`}
        onClick={onClose}
      >
        <div
          className={`relative m-4 w-full h-[80%] md:max-w-[55%] sm:max-w-[90%]  max-h-[70%] rounded-3xl p-10 backdrop-blur-md backdrop-filter-none transition-all duration-300 ${
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
    </>
  );
};

export default WorksModal;
