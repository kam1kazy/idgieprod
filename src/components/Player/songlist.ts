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
        src: '/music/turnkey/pop/1. Элона Миллер, OWNER - Внутривенно.mp3',
      },
      {
        artist: 'BITTUEV',
        title: 'Отвали',
        duration: '2:32',
        src: '/music/turnkey/pop/2. BITTUEV - Отвали.mp3',
      },
      {
        artist: 'Саша Думенко',
        title: 'My Soul',
        duration: '2:15',
        src: '/music/turnkey/pop/3. Саша Думенко - My Soul.mp3',
      },
      {
        artist: 'Kvintflak',
        title: 'IDOL',
        feat: 'IDGIE',
        duration: '2:25',
        src: '/music/turnkey/pop/4. Kvintflak feat. IDGIE - IDOL.mp3',
      },
    ],
    'HIP-HOP': [
      {
        artist: 'TERESHINA',
        title: 'OMG',
        duration: '2:32',
        src: '/music/turnkey/hiphop/1._TERESHINA_-_OMG.mp3',
      },
      {
        artist: 'IDGIE',
        title: 'ALQASHKA',
        feat: 'LUCKY LEGO',
        duration: '2:39',
        src: '/music/turnkey/hiphop/2. IDGIE feat. LUCKY LEGO - ALQASHKA.mp3',
      },
      {
        artist: 'Owner',
        title: 'ААААА',
        duration: '2:54',
        src: '/music/turnkey/hiphop/3. Owner - БУКВЫ.mp3',
      },
      {
        artist: 'Owner',
        title: 'Street Life',
        duration: '2:06',
        src: '/music/turnkey/hiphop/4. Owner - ААААА.mp3',
      },
    ],
    ROCK: [
      {
        artist: 'ALISATOKA',
        title: 'Лето',
        duration: '2:46',
        src: '/music/turnkey/rock/1. ALISATOKA - Лето.mp3',
      },
      {
        artist: 'ALISATOKA',
        title: 'Черно-белый',
        duration: '2:21',
        src: '/music/turnkey/rock/2. ALISATOKA - Черно-белый.mp3',
      },
      {
        artist: 'ALISATOKA',
        title: 'Последний звонок',
        duration: '3:03',
        src: '/music/turnkey/rock/3. ALISATOKA - Последний звонок.mp3',
      },
    ],
  },
  Аранжировка: {
    POP: [
      {
        artist: 'Юлианна Караулова',
        title: 'Лава-лавина',
        duration: '3:27',
        src: '/music/arrangement/pop/1. Юлианна Караулова - Лава-лавина.mp3',
      },
      {
        artist: 'Карен Туз',
        title: 'Бармен, налей',
        duration: '3:20',
        src: '/music/arrangement/pop/2. Карен Туз - Бармен, налей (REMIX).mp3',
      },
      {
        artist: 'Рем Дигга',
        title: 'Пять минут',
        feat: 'Katrin Mokko',
        duration: '4:30',
        src: '/music/arrangement/pop/3. Рем Дигга ft. Katrin Mokko - Пять минут.mp3',
      },
      {
        artist: 'Артур Саркисян',
        title: 'Чувства обидела',
        duration: '3:42',
        src: '/music/arrangement/pop/4. Артур Саркисян - Чувства обидела.mp3',
      },
    ],
    'HIP-HOP': [
      {
        artist: 'Скриптонит',
        title: 'Не расслабляйся (IDGIE Remix)',
        duration: '2:34',
        src: '/music/arrangement/hiphop/1._Скриптонит_-_Не_расслабляйся_(IDGIE Remix).mp3',
      },
      {
        artist: 'Owner',
        title: 'КЭШКИРЕ',
        duration: '2:17',
        src: '/music/arrangement/hiphop/2._Owner_-_КЭШКИРЕ.mp3',
      },
      {
        artist: 'Soulge, Onerah',
        title: 'Берегу',
        duration: '2:30',
        src: '/music/arrangement/hiphop/3._Soulge,_Onerah_-_Берегу.mp3',
      },
      {
        artist: 'Lika Kosta',
        title: 'Чистая Вера',
        duration: '3:12',
        src: '/music/arrangement/hiphop/4._Lika_Kosta_-_Чистая_Вера.mp3',
      },
    ],
    ROCK: [
      {
        artist: 'ALISATOKA',
        title: 'Лето',
        duration: '2:46',
        src: '/music/arrangement/rock/ALISATOKA - Лето.mp3',
      },
      {
        artist: 'ALISATOKA',
        title: 'Черно-белый',
        duration: '2:21',
        src: '/music/arrangement/rock/ALISATOKA - Черно-белый.mp3',
      },
      {
        artist: 'дипинс',
        title: 'НЕ баночка с окурками',
        duration: '2:28',
        src: '/music/arrangement/rock/дипинс - НЕ баночка с окурками.mp3',
      },
    ],
  },
  'Сведение-мастеринг': {
    POP: [
      {
        artist: 'КОСМОНАВТОВ НЕТ, дина мар',
        title: 'постучится',
        duration: '2:16',
        src: '/music/mix/pop/1. КОСМОНАВТОВ НЕТ, дина мар - постучится.mp3',
      },
      {
        artist: 'ЛС',
        title: 'Мне никто не нужен',
        duration: '2:11',
        src: '/music/mix/pop/2. ЛС - Мне никто не нужен.mp3',
      },
      {
        artist: 'Саша Думенко',
        title: 'My Soul',
        duration: '2:15',
        src: '/music/mix/pop/2. Саша Думенко - My Soul.mp3',
      },
      {
        artist: 'OMANY',
        title: 'Мы горим',
        duration: '1:47',
        src: '/music/mix/pop/3. OMANY - Мы горим.mp3',
      },
    ],
    'HIP-HOP': [
      {
        artist: 'TERESHINA',
        title: 'Чёрный Porsche',
        duration: '2:31',
        src: '/music/mix/hiphop/1. TERESHINA - Чёрный Porsche.mp3',
      },
      {
        artist: 'IDGIE',
        title: 'Отвал башки',
        feat: 'KVINTFLAK',
        duration: '2:16',
        src: '/music/mix/hiphop/2. IDGIE feat. KVINTFLAK - Отвал башки.mp3',
      },
      {
        artist: 'Soulge',
        title: 'Ой, мама',
        duration: '2:19',
        src: '/music/mix/hiphop/3. Soulge - Ой, мама.mp3',
      },
      {
        artist: 'Kijin',
        title: 'GO GO',
        duration: '1:37',
        src: '/music/mix/hiphop/4. Kijin - GO GO.mp3',
      },
    ],
    ROCK: [
      {
        artist: 'гречка',
        title: 'Не моё',
        duration: '2:19',
        src: '/music/mix/rock/1. гречка - Не моё.mp3',
      },
      {
        artist: 'КОСМОНАВТОВ НЕТ',
        title: 'Виноваты звёзды',
        duration: '2:29',
        src: '/music/mix/rock/2. КОСМОНАВТОВ НЕТ - Виноваты звёзды.mp3',
      },
      {
        artist: 'дипинс',
        title: 'Этажи',
        duration: '2:35',
        src: '/music/mix/rock/3. дипинс - Этажи.mp3',
      },
      {
        artist: 'RAM',
        title: 'Neverland',
        feat: 'Noize MC, KOMMO',
        duration: '5:00',
        src: '/music/mix/rock/4. RAM, Noize MC, KOMMO - Neverland.mp3',
      },
    ],
  },
};
