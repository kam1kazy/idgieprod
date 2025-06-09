import './Carousel/style/embla.css';

import { EmblaOptionsType } from 'embla-carousel';

import Carousel from './Carousel';
import { artists } from './content/NamesList';

const Artists = () => {
  const OPTIONS: EmblaOptionsType = {
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
  };

  return (
    <section className="w-full mb-8 md:mb-[6rem] mt-8 md:mt-[8rem] px-4">
      <div className="w-full max-w-[81.25rem] mx-auto flex relative items-center justify-center">
        {/* Карусель артистов */}
        <h2 className="text-2xl md:text-4xl uppercase font-bold text-white text-center mb-8">
          С кем работал
        </h2>
      </div>

      <Carousel slides={artists} options={OPTIONS} />

      <div className="w-full max-w-[81.25rem] mx-auto flex-col flex relative justify-center">
        {/* Подпись под каруселью */}
        <p className="text-xl md:text-[2.8rem] mb-4 md:mb-[2rem]">
          Меня заказывают те, кто хочет результат — и те, кто уже знает, как он звучит.
        </p>
        <br />
        <p className="text-[0.8rem] w-full md:w-[48rem]">
          <i>
            Noize MC, Гречка, Рем Дигга, Юлианна Караулова, Джаро, RAM, Космонавтов нет, Саша
            Спилберг, Таня Терешина, Леницкий, Элона Миллер, Ксюша Хоффман, Карен Туз, и другие.
          </i>
        </p>
      </div>
    </section>
  );
};

export default Artists;
