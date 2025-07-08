import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Category, Genre, playlistData } from '@/components/Player/songList';

import { usePlayer } from './context/PlayerContext';
import { useTimeFormat } from './hooks/useTimeFormat';
import MiniPlayer from './MiniPlayer';
import MobilePlayerControls from './ui/MobilePlayerControls';
import PlayerControls from './ui/PlayerControls';
import PlayerTitle from './ui/PlayerTitle';
import Playlist from './ui/Playlist';
import ProgressBar from './ui/ProgressBar';
import VolumeControl from './ui/VolumeControl';

export const genreToImage: Record<Genre, string> = {
  POP: '/images/genres/pop.png',
  'HIP-HOP': '/images/genres/hip-hop.png',
  ROCK: '/images/genres/rock.png',
};

export const yandexLinks: Record<Category, Record<Genre, string>> = {
  'Сведение-мастеринг': {
    ROCK: 'https://music.yandex.ru/users/idgie.prod/playlists/1008',
    POP: 'https://music.yandex.ru/users/idgie.prod/playlists/1007',
    'HIP-HOP': 'https://music.yandex.ru/users/idgie.prod/playlists/1006',
  },
  'Песни под ключ': {
    'HIP-HOP': 'https://music.yandex.ru/users/idgie.prod/playlists/1005',
    POP: 'https://music.yandex.ru/users/idgie.prod/playlists/1004',
    ROCK: 'https://music.yandex.ru/users/idgie.prod/playlists/1003',
  },
  Аранжировка: {
    'HIP-HOP': 'https://music.yandex.ru/users/idgie.prod/playlists/1002',
    POP: 'https://music.yandex.ru/users/idgie.prod/playlists/1001',
    ROCK: 'https://music.yandex.ru/users/idgie.prod/playlists/1000',
  },
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

  const yandexLink = yandexLinks[selectedCategory][selectedGenre];

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
  } = usePlayer();

  const { formatTime } = useTimeFormat();

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (!isOpen && isPlaying) {
      setShowMiniPlayer(true);
    }
  }, [isOpen, isPlaying, setShowMiniPlayer]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const currentTracks = playlistData[selectedCategory][selectedGenre];

  return (
    <>
      <MiniPlayer isVisible={showMiniPlayer} onStop={handleStop} />
      <section
        className={`fixed inset-0 z-[999] grid h-screen w-screen items-start sm:place-items-center bg-[#06090bbf]/95 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none '
        }`}
        onClick={onClose}
      >
        <div
          className={`relative m-4 w-full h-[80%] md:max-w-[55%] sm:max-w-[90%] max-h-[70%] rounded-3xl mt-20 pt-0 pl-0 p-10 backdrop-blur-md backdrop-filter-none transition-all duration-300 ${
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
          <div className="flex flex-col gap-0 sm:gap-10">
            {/* Верхняя часть: название и обложка */}
            <div className="z-1 flex flex-col md:flex-row items-start min-[460px]:flex-row md:items-center gap-0">
              <div className="flex-1">
                <PlayerTitle
                  artist={currentTrack?.artist}
                  title={currentTrack?.title}
                  link={yandexLink}
                  imgSrc={genreToImage[selectedGenre]}
                />
                {currentTrack?.feat && (
                  <div className="text-gray-300 mb-6">ft. {currentTrack?.feat}</div>
                )}
                <ProgressBar
                  currentTime={formatTime(currentTime)}
                  totalTime={formatTime(duration)}
                  progress={(currentTime / duration) * 100 || 0}
                  onSeek={handleSeek}
                />
              </div>
              {/* Обложка альбома - видна от 460px */}
              <div className="hidden min-[460px]:block">
                <Image
                  src={genreToImage[selectedGenre]}
                  alt="Album Cover"
                  width={192}
                  height={192}
                  className="w-48 h-48 rounded-xl objec t-cover shadow-lg"
                />
              </div>
              {/* Мобильные контролы */}
              <MobilePlayerControls tracks={currentTracks} />
            </div>
            {/* Нижняя часть: плейлист и контролы */}
            <div className="flex flex-col md:flex-row gap-10 z-1">
              <div className="flex-1">
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
              {/* Контролы - видны только на десктопе */}
              <div className="hidden lg:flex flex-col items-center justify-center gap-8">
                <PlayerControls onPlay={handlePlay} isPlaying={isPlaying} />
                <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksModal;
