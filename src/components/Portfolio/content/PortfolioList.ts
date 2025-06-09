import { Category, Genre } from '@/components/Player/songList';

export interface PortfolioCard {
  genre: Genre;
  category: Category;
  title: string;
  description: string;
  image: string;
}

export const portfolioCards: PortfolioCard[] = [
  {
    genre: 'HIP-HOP',
    category: 'Песни под ключ',
    title: 'Хип-Хоп',
    description: 'Современные биты и продакшн',
    image: '/images/genres/hip-hop.png',
  },
  {
    genre: 'POP',
    category: 'Песни под ключ',
    title: 'Поп',
    description: 'Поп-музыка и аранжировки',
    image: '/images/genres/pop.png',
  },
  {
    genre: 'ROCK',
    category: 'Песни под ключ',
    title: 'Рок',
    description: 'Рок-музыка и гитарные партии',
    image: '/images/genres/rock.png',
  },
];
