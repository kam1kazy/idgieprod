export interface ImageList {
  id: number;
  src: string;
  alt: string;
  description: string;
}

// Здесь вы можете добавить свои фотографии
export const imagesList: ImageList[] = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Работа в студии',
    description: 'Работа над новым треком',
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.jpg',
    alt: 'Концертное выступление',
    description: 'Живое выступление',
  },
];
