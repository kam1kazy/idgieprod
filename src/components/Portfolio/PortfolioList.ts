import { Genre } from '@/components/Player/songlist';

export interface PortfolioCard {
  genre: Genre;
  title: string;
  description: string;
  image: string;
}

export const portfolioCards: PortfolioCard[] = [
  {
    genre: 'HIP-HOP',
    title: 'Хип-Хоп',
    description: 'Современные биты и продакшн',
    image: '/images/genres/hip-hop.png',
  },
  {
    genre: 'POP',
    title: 'Поп',
    description: 'Поп-музыка и аранжировки',
    image: '/images/genres/pop.png',
  },
  {
    genre: 'ROCK',
    title: 'Рок',
    description: 'Рок-музыка и гитарные партии',
    image: '/images/genres/rock.png',
  },
];
