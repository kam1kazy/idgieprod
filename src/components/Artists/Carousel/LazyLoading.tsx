import Image from 'next/image';
import { useCallback, useState } from 'react';

import type { Artist } from '../content/NamesList';

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

type PropType = {
  slide: Artist;
  inView: boolean;
  index: number;
};

export const LazyLoadImage: React.FC<PropType> = (props) => {
  const { slide, inView } = props;
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) {
      setHasLoaded(true);
    }
  }, [inView, setHasLoaded]);

  return (
    <div className="embla__slide">
      <div className={'embla__lazy-load'.concat(hasLoaded ? ' embla__lazy-load--has-loaded' : '')}>
        {!hasLoaded && <span className="embla__lazy-load__spinner" />}
        <div className="embla__slide__wrapper">
          <Image
            className="embla__slide__img embla__lazy-load__img"
            onLoad={setLoaded}
            src={inView ? slide.avatar : PLACEHOLDER_SRC}
            alt={slide.name}
            data-src={slide.avatar}
            width={450}
            height={400}
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
              // maxHeight: '360px',
            }}
          />
          <div className="embla__slide__overlay text-center">
            <span className="embla__slide__name">{slide.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
