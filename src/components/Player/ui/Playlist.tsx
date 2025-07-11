import { Category, Genre, Track } from '@/components/Player/songList';

import PlaylistTabs from './PlaylistTabs';
import TrackList from './TrackList';

interface PlaylistProps {
  selectedCategory: Category;
  selectedGenre: Genre;
  currentTrack?: Track;
  onCategoryChange: (category: Category) => void;
  onGenreChange: (genre: Genre) => void;
  onTrackSelect: (track: Track) => void;
  tracks: Track[];
  loadingTrack: Track | null;
  playingTrack: Track | null;
  isPlaying?: boolean; // добавил проп isPlaying
}

const Playlist: React.FC<PlaylistProps> = ({
  selectedCategory,
  selectedGenre,
  currentTrack,
  onCategoryChange,
  onGenreChange,
  onTrackSelect,
  tracks,
  loadingTrack,
  playingTrack,
  isPlaying, // добавил проп isPlaying
}) => {
  return (
    <div className="space-y-6">
      <PlaylistTabs
        selectedCategory={selectedCategory}
        selectedGenre={selectedGenre}
        onCategoryChange={onCategoryChange}
        onGenreChange={onGenreChange}
      />
      <TrackList
        tracks={tracks}
        onTrackSelect={onTrackSelect}
        currentTrack={currentTrack}
        category={selectedCategory}
        loadingTrack={loadingTrack}
        playingTrack={playingTrack}
        isPlaying={isPlaying} // прокинул проп
      />
    </div>
  );
};

export default Playlist;
