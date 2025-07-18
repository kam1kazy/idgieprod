import React, { useEffect } from 'react';

interface YandexModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const playlists = [
  { label: 'Сведение-мастеринг рок', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1008' },
  { label: 'Сведение-мастеринг поп', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1007' },
  { label: 'Сведение-мастеринг хип-хоп', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1006' },
  { label: 'Песни под ключ хип-хоп', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1005' },
  { label: 'Песни под ключ поп', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1004' },
  { label: 'Песни под ключ рок', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1003' },
  { label: 'Аранжировки хип-хоп', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1002' },
  { label: 'Аранжировки поп', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1001' },
  { label: 'Аранжировки рок', url: 'https://music.yandex.ru/users/idgie.prod/playlists/1000' },
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
      className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-[#06090bbf]/95 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative m-4 w-full max-w-[600px] rounded-3xl mt-20 pt-0 p-10 backdrop-blur-md backdrop-filter-none transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-28 scale-90 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-white mb-6">Портфолио на Яндекс Музыке</h2>
        <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default YandexModal;
