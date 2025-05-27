export type Genre = 'POP' | 'HIP-HOP' | 'ROCK';
export type Category = 'Песни под ключ' | 'Аранжировка' | 'Сведение-мастеринг';

export interface Track {
  title: string;
  duration: string;
  src: string;
}

export const playlistData: Record<Category, Record<Genre, Track[]>> = {
  'Песни под ключ': {
    POP: [
      {
        title: 'Summer Vibes',
        duration: '3:45',
        src: '/music/mix/pop/summer-vibes.mp3',
      },
    ],
    'HIP-HOP': [
      {
        title: 'Street Life',
        duration: '3:15',
        src: '/music/mix/hiphop/street-life.mp3',
      },
    ],
    ROCK: [
      {
        title: 'Electric Storm',
        duration: '5:10',
        src: '/music/mix/rock/electric-storm.mp3',
      },
    ],
  },
  Аранжировка: {
    POP: [
      {
        title: 'Pop Arrangement 1',
        duration: '3:30',
        src: '/music/mix/pop/arrangement-1.mp3',
      },
    ],
    'HIP-HOP': [
      {
        title: 'Hip-Hop Arrangement 1',
        duration: '3:45',
        src: '/music/mix/hiphop/arrangement-1.mp3',
      },
    ],
    ROCK: [
      {
        title: 'Rock Arrangement 1',
        duration: '4:15',
        src: '/music/mix/rock/arrangement-1.mp3',
      },
    ],
  },
  'Сведение-мастеринг': {
    POP: [
      {
        title: 'Pop Mix 1',
        duration: '3:55',
        src: '/music/mix/pop/mix-1.mp3',
      },
    ],
    'HIP-HOP': [
      {
        title: 'Hip-Hop Mix 1',
        duration: '4:10',
        src: '/music/mix/hiphop/mix-1.mp3',
      },
    ],
    ROCK: [
      {
        title: 'Rock Mix 1',
        duration: '4:30',
        src: '/music/mix/rock/mix-1.mp3',
      },
    ],
  },
};
