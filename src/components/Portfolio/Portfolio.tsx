import Image from 'next/image';
import { useEffect, useState } from 'react';

import { usePlayer } from '../Player/context/PlayerContext';
import { useTimeFormat } from '../Player/hooks/useTimeFormat';
import { Category, Genre, playlistData } from '../Player/songList';
import PlayerControls from '../Player/ui/PlayerControls';
import PlayerTitle from '../Player/ui/PlayerTitle';
import Playlist from '../Player/ui/Playlist';
import ProgressBar from '../Player/ui/ProgressBar';
import VolumeControl from '../Player/ui/VolumeControl';
import { portfolioCards } from './content/PortfolioList';

const genreToImage: Record<Genre, string> = {
  POP: '/images/genres/pop.png',
  'HIP-HOP': '/images/genres/hip-hop.png',
  ROCK: '/images/genres/rock.png',
};

const Portfolio = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>('POP');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Песни под ключ');

  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    currentTrack,
    volume,
    setShowMiniPlayer,
    handlePlay,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleTrackSelect,
    handleSeek,
    handleVolumeChange,
  } = usePlayer();

  const { formatTime } = useTimeFormat();

  useEffect(() => {
    if (isPlaying) {
      setShowMiniPlayer(true);
    } else {
      setShowMiniPlayer(false);
    }
  }, [isPlaying]);

  const handleCardClick = (genre: Genre, category: Category) => {
    setSelectedGenre(genre);
    setSelectedCategory(category);
  };

  const currentTracks = playlistData[selectedCategory][selectedGenre];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-3 mt-12 uppercase">
          Мои работы
        </h1>

        {/* Карточки в виде веера */}
        <div className="relative h-[600px] flex items-center justify-between">
          {portfolioCards.map((card, index) => (
            <div
              key={card.genre}
              className={`w-85 transition-all duration-300 hover:scale-110 cursor-pointer`}
              style={{
                // left: `${25 + index * 25}%`,
                // top: '50%',
                // transform: `translate(-50%, -50%) rotate(${-15 + index * 15}deg)`,
                zIndex: index,
              }}
              onClick={() => handleCardClick(card.genre, card.category)}
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={900}
                  height={700}
                  className="w-full h-70 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-lg">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Встроенный плеер */}
        <div className="mt-20 rounded-3xl p-8">
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <div className="flex flex-col md:flex-row gap-10">
            {/* Левая часть: текст и треки */}
            <div className="flex-1 flex flex-col">
              <div>
                <PlayerTitle
                  artist={currentTrack?.artist}
                  title={currentTrack?.title}
                  album={currentTrack?.album}
                />
                <div className="text-gray-300 mb-6">{selectedGenre}</div>
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
              <Image
                src={genreToImage[selectedGenre]}
                alt="Album Cover"
                width={192}
                height={192}
                className="w-48 h-48 rounded-xl object-cover shadow-lg mb-4"
              />
              <PlayerControls onPlay={handlePlay} isPlaying={isPlaying} />
              <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
            </div>
          </div>
        </div>

        {/* Ссылка на Яндекс Диск */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Больше примеров работ можно послушать по ссылке:</p>
          <a
            href="https://disk.yandex.ru/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-xs px-2 py-1 rounded-full ml-2 px-6 py-3 cursor-pointer hover:text-blue-400"
          >
            Яндекс Диск
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
