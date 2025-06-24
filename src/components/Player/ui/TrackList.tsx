import Image from 'next/image';

import { Track } from '../songList';

interface TrackListProps {
  tracks: Track[];
  onTrackSelect: (track: Track) => void;
  currentTrack?: Track;
  category: string;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, onTrackSelect, currentTrack, category }) => {
  return (
    <div>
      <div className="font-semibold text-white mb-2">{category}</div>
      <ul className="space-y-2">
        {tracks.map((track) => (
          <li
            key={track.title}
            className={`flex items-center justify-between group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg transition ${
              currentTrack?.title === track.title ? 'bg-white/10' : ''
            }`}
            onClick={() => onTrackSelect(track)}
          >
            <div className="flex items-center gap-2">
              <span className="relative w-2 h-2 mr-3 group-hover:[&>img]:brightness-0 group-hover:[&>img]:invert">
                <Image
                  src="/images/icons/play.svg"
                  alt="play"
                  fill
                  priority
                  className="transition-all"
                />
              </span>
              <span className="text-white font-medium">
                {track.artist} - {track.title}{' '}
                {track.feat && <span className="text-sm text-[#047cb9]"> ft. {track.feat}</span>}
              </span>
            </div>
            <span className="text-gray-300">{track.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
