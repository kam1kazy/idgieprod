import Image from 'next/image';

import { useNamesCloud } from './hooks/useNamesCloud';

// import type { Artist } from './NamesCloudList';
// import { artists } from './NamesCloudList';

const NamesCloud = () => {
  const { currentSlide, loopedArtists, handlePrevSlide, handleNextSlide } = useNamesCloud();

  return (
    <section className="w-full mb-[6rem] mt-[8rem]">
      <div className="w-[81.25rem] mx-auto flex relative items-center justify-center">
        {/* Карусель артистов */}
        <h2 className="text-4xl uppercase font-bold text-white text-center mb-8">С кем работал</h2>

        {/* Навигационные стрелки */}
        <div className="absolute top-0 right-0 z-10 flex gap-4">
          {/* Левая стрелка */}
          <button
            className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-300"
            onClick={handlePrevSlide}
          >
            ←
          </button>
          {/* Правая стрелка */}
          <button
            className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-300"
            onClick={handleNextSlide}
          >
            →
          </button>
        </div>
      </div>
      <div className="relative w-full mt-[3rem] mb-[5rem] overflow-hidden">
        {/* Градиент слева */}
        <div className="absolute top-0 left-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        {/* Градиент справа */}
        <div className="absolute top-0 right-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        {/* Карусель изображений */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 436}px)` }} // Смещаем на ширину карточки + отступ, учитывая начальное смещение из-за дублированных элементов
        >
          {loopedArtists.map((artist, index) => (
            <div
              key={`${artist.name}-${index}`} // Используем имя артиста и индекс для уникального ключа, т.к. имена могут повторяться после дублирования
              className="flex-none relative group overflow-hidden mr-9"
              style={{ width: '350px', height: '450px' }}
            >
              <Image
                src={artist.avatar}
                alt={artist.name}
                fill={true}
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 z-0"
              />
              {/* Имя артиста при наведении */}
              <div className="absolute block w-full inset-x-0 bottom-0 text-white text-center p-2 pt-[8rem] opacity-0 h-[11rem] group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/[1] to-transparent">
                {artist.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[81.25rem] mx-auto flex-col flex relative  justify-center">
        {/* Карусель артистов */}
        <p className="text-[2.8rem] mb-[2rem]">
          Меня заказывают те, кто хочет результат — и те, кто уже знает, как он звучит.
        </p>
        <br />
        <p className="text-[0.8rem] w-[48rem]">
          <i>
            Noize MC, Гречка, Рем Дигга, Юлианна Караулова, Джаро, RAM, Космонавтов нет, Саша
            Спилберг, Таня Терешина, Леницкий, Элона Миллер, Ксюша Хоффман, Карен Туз, и другие.
          </i>
        </p>
      </div>

      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1f2937;
            border-radius: 3px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #4b5563;
            border-radius: 3px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
          }
        `}
      </style>
    </section>
  );
};

export default NamesCloud;
