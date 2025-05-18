export type Genre = 'POP' | 'HIP-HOP' | 'ROCK';
export type Category = 'Песни под ключ' | 'Аранжировка' | 'Сведение-мастеринг';

export interface Track {
  title: string;
  duration: string;
}

export interface PlaylistData {
  [key: string]: {
    [key: string]: Track[];
  };
}

export const playlistData: PlaylistData = {
  'Песни под ключ': {
    POP: [
      { title: 'Beautiful Mistakes', duration: '2:34' },
      { title: 'Best My Heart', duration: '2:34' },
    ],
    'HIP-HOP': [
      { title: 'Cold (feat. Future)', duration: '2:34' },
      { title: 'Daylight', duration: '2:34' },
    ],
    ROCK: [
      { title: 'Rock Anthem', duration: '3:15' },
      { title: 'Guitar Solo', duration: '2:45' },
    ],
  },
  Аранжировка: {
    POP: [
      { title: 'Pop Arrangement 1', duration: '2:50' },
      { title: 'Pop Arrangement 2', duration: '3:10' },
    ],
    'HIP-HOP': [
      { title: 'Hip-Hop Beat 1', duration: '2:30' },
      { title: 'Hip-Hop Beat 2', duration: '2:45' },
    ],
    ROCK: [
      { title: 'Rock Arrangement 1', duration: '3:20' },
      { title: 'Rock Arrangement 2', duration: '3:00' },
    ],
  },
  'Сведение-мастеринг': {
    POP: [
      { title: 'Pop Mix 1', duration: '3:00' },
      { title: 'Pop Mix 2', duration: '2:55' },
    ],
    'HIP-HOP': [
      { title: 'Hip-Hop Mix 1', duration: '2:40' },
      { title: 'Hip-Hop Mix 2', duration: '2:50' },
    ],
    ROCK: [
      { title: 'Rock Mix 1', duration: '3:15' },
      { title: 'Rock Mix 2', duration: '3:05' },
    ],
  },
};
