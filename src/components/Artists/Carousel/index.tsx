import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

import type { Artist } from '../content/NamesList';
import { NextButton, PrevButton, usePrevNextButtons } from './Arrow';
import { LazyLoadImage } from './LazyLoading';

type PropType = {
  slides: Artist[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRed, emblaApi] = useEmblaCarousel(options);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off('slidesInView', updateSlidesInView);
      }
      const inView = emblaApi.slidesInView().filter((index) => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    updateSlidesInView(emblaApi);
    emblaApi.on('slidesInView', updateSlidesInView);
    emblaApi.on('reInit', updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <div className="relative w-[80%] sm:w-full mt-8 md:mt-[3rem] mb-8 md:mb-[5rem] overflow-hidden m-auto">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRed}>
          <div className={'embla__container flex gap-4'}>
            {slides.map((slide, index) => (
              <LazyLoadImage
                key={index}
                index={index}
                slide={slide}
                inView={slidesInView.indexOf(index) > -1}
              />
            ))}
          </div>
        </div>
        <div className="embla__controls justify-center sm:justify-start">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
