import Image from 'next/image';

import { Category, Genre } from '@/components/Player/songList';

interface PlaylistTabsProps {
  selectedCategory: Category;
  selectedGenre: Genre;
  onCategoryChange: (category: Category) => void;
  onGenreChange: (genre: Genre) => void;
}

const PlaylistTabs: React.FC<PlaylistTabsProps> = ({
  selectedCategory,
  selectedGenre,
  onCategoryChange,
  onGenreChange,
}) => {
  const categories: Category[] = ['Песни под ключ', 'Аранжировка', 'Сведение-мастеринг'];
  const genres: Genre[] = ['POP', 'HIP-HOP', 'ROCK'];

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case 'Песни под ключ':
        return '/images/icons/category_key_song.svg';
      case 'Аранжировка':
        return '/images/icons/category_arange.svg';
      case 'Сведение-мастеринг':
        return '/images/icons/category_mix.svg';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-[pointer] flex items-center gap-2 ${
              selectedCategory === category
                ? 'bg-[#047cb9] text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <span className="relative w-5 h-5 md:hidden">
              <Image
                src={getCategoryIcon(category)}
                alt={category}
                fill
                priority
                className="[filter:brightness(0)_invert(1)]"
              />
            </span>
            <span className="hidden md:inline">{category}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-[pointer] ${
              selectedGenre === genre
                ? 'bg-orange-500 text-white'
                : 'bg-orange-800 text-gray-400 hover:bg-orange-700'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlaylistTabs;
