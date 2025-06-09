import { Category, Genre } from '@/components/Player/songlist';

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

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-[pointer] ${
              selectedCategory === category
                ? 'bg-[#047cb9] text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {category}
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
