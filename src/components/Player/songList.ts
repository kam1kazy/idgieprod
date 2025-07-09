export type Genre = 'POP' | 'HIP-HOP' | 'ROCK';
export type Category = 'Песни под ключ' | 'Аранжировка' | 'Сведение-мастеринг';

export interface Track {
  album?: string;
  artist?: string;
  title: string;
  feat?: string;
  duration: string;
  src: string;
}

export const playlistData: Record<Category, Record<Genre, Track[]>> = {
  'Песни под ключ': {
    POP: [
      {
        artist: 'Элона Миллер',
        title: 'Внутривенно',
        feat: 'OWNER',
        duration: '2:25',
        src: '/music/turnkey/pop/turnkey_pop_1.mp3',
      },
      {
        artist: 'BITTUEV',
        title: 'Отвали',
        duration: '2:32',
        src: '/music/turnkey/pop/turnkey_pop_2.mp3',
      },
      {
        artist: 'Саша Думенко',
        title: 'My Soul',
        duration: '2:15',
        src: '/music/turnkey/pop/turnkey_pop_3.mp3',
      },
      {
        artist: 'Kvintflak',
        title: 'IDOL',
        feat: 'IDGIE',
        duration: '2:25',
        src: '/music/turnkey/pop/turnkey_pop_4.mp3',
      },
    ],
    'HIP-HOP': [
      {
        artist: 'TERESHINA',
        title: 'OMG',
        duration: '2:32',
        src: '/music/turnkey/hiphop/turnkey_hip_hop_1.mp3',
      },
      {
        artist: 'IDGIE',
        title: 'ALQASHKA',
        feat: 'LUCKY LEGO',
        duration: '2:39',
        src: '/music/turnkey/hiphop/turnkey_hip_hop_2.mp3',
      },
      {
        artist: 'Owner',
        title: 'ААААА',
        duration: '2:54',
        src: '/music/turnkey/hiphop/turnkey_hip_hop_3.mp3',
      },
      {
        artist: 'Owner',
        title: 'Street Life',
        duration: '2:06',
        src: '/music/turnkey/hiphop/turnkey_hip_hop_4.mp3',
      },
    ],
    ROCK: [
      {
        artist: 'ALISATOKA',
        title: 'Лето',
        duration: '2:46',
        src: '/music/turnkey/rock/turnkey_rock_1.mp3',
      },
      {
        artist: 'ALISATOKA',
        title: 'Черно-белый',
        duration: '2:21',
        src: '/music/turnkey/rock/turnkey_rock_2.mp3',
      },
      {
        artist: 'ALISATOKA',
        title: 'Последний звонок',
        duration: '3:03',
        src: '/music/turnkey/rock/turnkey_rock_3.mp3',
      },
    ],
  },
  Аранжировка: {
    POP: [
      {
        artist: 'Юлианна Караулова',
        title: 'Лава-лавина',
        duration: '3:27',
        src: '/music/arrangement/pop/arrangement_pop_1.mp3',
      },
      {
        artist: 'Карен Туз',
        title: 'Бармен, налей',
        duration: '3:20',
        src: '/music/arrangement/pop/arrangement_pop_2.mp3',
      },
      {
        artist: 'Рем Дигга',
        title: 'Пять минут',
        feat: 'Katrin Mokko',
        duration: '4:30',
        src: '/music/arrangement/pop/arrangement_pop_3.mp3',
      },
      {
        artist: 'Артур Саркисян',
        title: 'Чувства обидела',
        duration: '3:42',
        src: '/music/arrangement/pop/arrangement_pop_4.mp3',
      },
    ],
    'HIP-HOP': [
      {
        artist: 'Скриптонит',
        title: 'Не расслабляйся (IDGIE Remix)',
        duration: '2:34',
        src: '/music/arrangement/hiphop/arrangement_hip_hop_1.mp3',
      },
      {
        artist: 'Owner',
        title: 'КЭШКИРЕ',
        duration: '2:17',
        src: '/music/arrangement/hiphop/arrangement_hip_hop_2.mp3',
      },
      {
        artist: 'Soulge, Onerah',
        title: 'Берегу',
        duration: '2:30',
        src: '/music/arrangement/hiphop/arrangement_hip_hop_3.mp3',
      },
      {
        artist: 'Lika Kosta',
        title: 'Чистая Вера',
        duration: '3:12',
        src: '/music/arrangement/hiphop/arrangement_hip_hop_4.mp3',
      },
    ],
    ROCK: [
      {
        artist: 'ALISATOKA',
        title: 'Лето',
        duration: '2:46',
        src: '/music/arrangement/rock/arrangement_rock_1.mp3',
      },
      {
        artist: 'ALISATOKA',
        title: 'Черно-белый',
        duration: '2:21',
        src: '/music/arrangement/rock/arrangement_rock_2.mp3',
      },
      {
        artist: 'дипинс',
        title: 'НЕ баночка с окурками',
        duration: '2:28',
        src: '/music/arrangement/rock/arrangement_rock_3.mp3',
      },
    ],
  },
  'Сведение-мастеринг': {
    POP: [
      {
        artist: 'КОСМОНАВТОВ НЕТ, дина мар',
        title: 'постучится',
        duration: '2:16',
        src: '/music/mix/pop/mix_pop_1.mp3',
      },
      {
        artist: 'ЛС',
        title: 'Мне никто не нужен',
        duration: '2:11',
        src: '/music/mix/pop/mix_pop_2.mp3',
      },
      {
        artist: 'Саша Думенко',
        title: 'My Soul',
        duration: '2:15',
        src: '/music/mix/pop/mix_pop_3.mp3',
      },
      {
        artist: 'OMANY',
        title: 'Мы горим',
        duration: '1:47',
        src: '/music/mix/pop/mix_pop_4.mp3',
      },
    ],
    'HIP-HOP': [
      {
        artist: 'TERESHINA',
        title: 'Чёрный Porsche',
        duration: '2:31',
        src: '/music/mix/hiphop/mix_hip_hop_1.mp3',
      },
      {
        artist: 'IDGIE',
        title: 'Отвал башки',
        feat: 'KVINTFLAK',
        duration: '2:16',
        src: '/music/mix/hiphop/mix_hip_hop_2.mp3',
      },
      {
        artist: 'Soulge',
        title: 'Ой, мама',
        duration: '2:19',
        src: '/music/mix/hiphop/mix_hip_hop_3.mp3',
      },
      {
        artist: 'Kijin',
        title: 'GO GO',
        duration: '1:37',
        src: '/music/mix/hiphop/mix_hip_hop_4.mp3',
      },
    ],
    ROCK: [
      {
        artist: 'гречка',
        title: 'Не моё',
        duration: '2:19',
        src: '/music/mix/rock/mix_rock_1.mp3',
      },
      {
        artist: 'КОСМОНАВТОВ НЕТ',
        title: 'Виноваты звёзды',
        duration: '2:29',
        src: '/music/mix/rock/mix_rock_2.mp3',
      },
      {
        artist: 'дипинс',
        title: 'Этажи',
        duration: '2:35',
        src: '/music/mix/rock/mix_rock_3.mp3',
      },
      {
        artist: 'RAM',
        title: 'Neverland',
        feat: 'Noize MC, KOMMO',
        duration: '5:00',
        src: '/music/mix/rock/mix_rock_4.mp3',
      },
    ],
  },
};
