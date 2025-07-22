import Image from 'next/image';
import { useEffect, useState } from 'react';

import { usePlayer } from '../Player/context/PlayerContext';
import { useTimeFormat } from '../Player/hooks/useTimeFormat';
import { Category, Genre, playlistData } from '../Player/songList';
import MobilePlayerControls from '../Player/ui/MobilePlayerControls';
import PlayerControls from '../Player/ui/PlayerControls';
import PlayerTitle from '../Player/ui/PlayerTitle';
import Playlist from '../Player/ui/Playlist';
import ProgressBar from '../Player/ui/ProgressBar';
import VolumeControl from '../Player/ui/VolumeControl';
import { genreToImage, yandexLinks } from '../Player/WorksModal';
import { portfolioCards } from './content/PortfolioList';
import YandexModal from './YandexModal';
import { YandexButton } from './YandexButton';

const Portfolio = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>('POP');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Песни под ключ');
  const [isYandexModalOpen, setYandexModalOpen] = useState(false);

  const yandexLink = yandexLinks[selectedCategory][selectedGenre];

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
    handleCanPlay,
    loadingTrack,
    playingTrack,
  } = usePlayer();

  const { formatTime } = useTimeFormat();

  useEffect(() => {
    if (isPlaying) {
      setShowMiniPlayer(true);
    } else {
      setShowMiniPlayer(false);
    }
  }, [isPlaying, setShowMiniPlayer]);

  const handleCardClick = (genre: Genre, category: Category) => {
    setSelectedGenre(genre);
    setSelectedCategory(category);
  };

  const currentTracks = playlistData[selectedCategory][selectedGenre];

  const handlerOpenModal = () => {
    setYandexModalOpen(true);
  };

  return (
    <section className="xl:min-h-screen bg-gradient-to-b from-gray-900 to-black py-0.5 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-5 mt-0 md:mb-15 md:mt-12 uppercase">
          Мои работы
        </h1>

        {/* Карточки в виде веера */}
        <div className="relative hidden sm: h-auto sm:flex flex-wrap justify-center gap-4 md:gap-8">
          {portfolioCards.map((card, index) => (
            <div
              key={card.genre}
              className={`w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-300 hover:scale-105 cursor-pointer`}
              style={{
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
                  <p className="text-gray-400 text-lg h-[55px]">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Встроенный плеер */}
        <div className="mt-20 rounded-3xl p-8 overflow-hidden">
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <div className="flex flex-col gap-0 md:gap-10 ">
            {/* Верхняя часть: название и обложка */}
            <div className="z-1 flex flex-col md:flex-row min-[460px]:flex-row items-center gap-6">
              <div className="flex-1 w-full">
                <PlayerTitle
                  artist={currentTrack?.artist}
                  title={currentTrack?.title}
                  link={yandexLink}
                  imgSrc={genreToImage[selectedGenre]}
                />
                <div className="text-gray-300 mb-6">{selectedGenre}</div>
                <ProgressBar
                  currentTime={formatTime(currentTime)}
                  totalTime={formatTime(duration)}
                  progress={(currentTime / duration) * 100 || 0}
                  onSeek={handleSeek}
                />
              </div>
              {/* Обложка альбома - видна от 460px */}
              <div className="hidden min-[460px]:block">
                <div className="gramaphone-record-general">
                  <Image
                    id="cover"
                    src={genreToImage[selectedGenre]}
                    alt="Album Cover"
                    width={192}
                    height={192}
                    className={
                      isPlaying
                        ? 'playing cover w-48 h-48 rounded-xl object-cover shadow-lg'
                        : 'cover w-48 h-48 rounded-xl object-cover shadow-lg'
                    }
                  />
                  <div className={'disc'} id="disc">
                    {' '}
                    <Image src={'/images/vinyl.png'} alt="vinyl" width={245} height={245} />
                  </div>
                </div>
              </div>
            </div>
            {/* Мобильные контролы */}
            <MobilePlayerControls tracks={currentTracks} />
            {/* Нижняя часть: плейлист и контролы */}
            <div className="flex flex-col md:flex-row gap-1 z-1">
              <div className="flex-1">
                <Playlist
                  selectedCategory={selectedCategory}
                  selectedGenre={selectedGenre}
                  currentTrack={currentTrack || undefined}
                  onCategoryChange={setSelectedCategory}
                  onGenreChange={setSelectedGenre}
                  onTrackSelect={handleTrackSelect}
                  tracks={currentTracks}
                  loadingTrack={loadingTrack}
                  playingTrack={playingTrack}
                  isPlaying={isPlaying}
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

        {/* Ссылка на Яндекс Диск */}
        <div
          onClick={handlerOpenModal}
          className="text-center mt-1 md:mt-12 flex justify-center overflow-hidden md:overflow-visible items-center min-h-[14.125rem] md:min-h-[auto]"
        >
          <YandexButton openModal={handlerOpenModal} />
        </div>
        <YandexModal isOpen={isYandexModalOpen} onClose={() => setYandexModalOpen(false)} />
      </div>
    </section>
  );
};

export default Portfolio;
