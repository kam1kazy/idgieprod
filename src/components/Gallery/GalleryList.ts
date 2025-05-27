export interface Image {
  id: number;
  src: string;
  alt: string;
  description: string;
}

// Здесь вы можете добавить свои фотографии
export const images: Image[] = [
  {
    id: 1,
    src: '/path-to-your-image1.jpg',
    alt: 'Работа в студии',
    description: 'Работа над новым треком',
  },
  {
    id: 2,
    src: '/path-to-your-image2.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
  {
    id: 3,
    src: '/path-to-your-image2.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
  {
    id: 4,
    src: '/path-to-your-image2.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
  {
    id: 5,
    src: '/path-to-your-image2.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
  {
    id: 6,
    src: '/path-to-your-image2.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
];
