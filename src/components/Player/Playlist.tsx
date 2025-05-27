import PlaylistTabs from './PlaylistTabs';
import TrackList from './TrackList';
import { Category, Genre, Track } from '@/types/playlist';

interface PlaylistProps {
  selectedCategory: Category;
  selectedGenre: Genre;
  currentTrack?: Track;
  onCategoryChange: (category: Category) => void;
  onGenreChange: (genre: Genre) => void;
  onTrackSelect: (track: Track) => void;
  tracks: Track[];
}

const Playlist: React.FC<PlaylistProps> = ({
  selectedCategory,
  selectedGenre,
  currentTrack,
  onCategoryChange,
  onGenreChange,
  onTrackSelect,
  tracks,
}) => {
  return (
    <div className="space-y-6">
      <PlaylistTabs
        selectedCategory={selectedCategory}
        selectedGenre={selectedGenre}
        onCategoryChange={onCategoryChange}
        onGenreChange={onGenreChange}
      />
      <TrackList tracks={tracks} onTrackSelect={onTrackSelect} currentTrack={currentTrack} />
    </div>
  );
};

export default Playlist;
