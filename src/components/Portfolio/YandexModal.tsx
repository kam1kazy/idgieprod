import React, { useEffect } from 'react';
import Image from 'next/image';

interface YandexModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const playlistsHipHop = [
  {
    label: 'Сведение-мастеринг',
    url: 'https://music.yandex.ru/users/idgie.prod/playlists/1006',
  },
  {
    label: 'Песни под ключ',
    url: 'https://music.yandex.ru/users/idgie.prod/playlists/1005',
  },
  { label: 'Аранжировки', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1002' },
];

const playlistsPop = [
  {
    label: 'Сведение-мастеринг',
    url: 'https://music.yandex.ru/users/idgie.prod/playlists/1007',
  },
  { label: 'Песни под ключ', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1004' },
  { label: 'Аранжировки', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1001' },
];

const playlistsRock = [
  {
    label: 'Сведение-мастеринг',
    url: 'https://music.yandex.ru/users/idgie.prod/playlists/1008',
  },
  { label: 'Песни под ключ', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1003' },
  { label: 'Аранжировки', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1000' },
];

const YandexModal: React.FC<YandexModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <section
      className={`fixed inset-0 z-[999] grid place-items-center bg-[#06090bbf]/95 backdrop-blur-md transition-opacity duration-300 w-full h-full ${
        isOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative m-4 w-full max-w-[600px] rounded-3xl mt-0 md:mt-20 pt-0 p-0 md:p-10 backdrop-blur-md backdrop-filter-none transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-28 scale-90 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <h2 className="text-3xl font-bold text-white mb-[50px] relative text-center">
          Портфолио на Яндекс Музыке<div className="scan-line"></div>
        </h2> */}

        <section className="header_pink">
          <div className="title-wrapper">
            <h1 className="sweet-title">
              <span data-text="Мои">Мои</span>
              <span data-text="Работы">Работы</span>
            </h1>
            <span className="top-title">Слушай и кайфуй</span>
            <span className="bottom-title">в Яндекс Музыке</span>
          </div>
        </section>

        <div className="flex items-center justify-center gap-4 mb-1 md:mb-9">
          <div>
            <div className="gold_wrapper mb-[0] md:mb-[20px]">
              <div className="bg"> POP </div>
              <div className="fg"> POP </div>
            </div>
            <div className="flex flex-row gap-4">
              {playlistsPop.map((pl, idx) => (
                <span key={idx} data-text={pl.label}>
                  <a
                    key={pl.url}
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn hologram"
                  >
                    <span data-text={pl.label}>{pl.label}</span>
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-1 md:mb-9">
          <div>
            {/* <div className="text-white font-medium">HipHop</div> */}

            <div className="gold_wrapper mb-[0] md:mb-[20px]">
              <div className="bg"> HIP - HOP </div>
              <div className="fg"> HIP - HOP </div>
            </div>

            <div className="flex flex-row gap-4">
              {playlistsHipHop.map((pl, idx) => (
                <span key={idx} data-text={pl.label}>
                  <a
                    key={pl.url}
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn hologram"
                  >
                    <span data-text={pl.label}>{pl.label}</span>
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div>
            <div className="gold_wrapper mb-[0] md:mb-[20px]">
              <div className="bg"> ROCK </div>
              <div className="fg"> ROCK </div>
            </div>

            <div className="flex flex-row gap-4">
              {playlistsRock.map((pl, idx) => (
                <span key={idx} data-text={pl.label}>
                  <a
                    key={pl.url}
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn hologram"
                  >
                    <span data-text={pl.label}>{pl.label}</span>
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-4">
          {playlists.map((pl) => (
            <a
              key={pl.url}
              href={pl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#047cb9] hover:bg-[#ffe680] text-white not-first:hover:text-black font-semibold py-3 px-6 rounded-lg shadow transition-colors text-center"
            >
              {pl.label}
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default YandexModal;
