import Image from 'next/image';
import { useEffect } from 'react';
import { Track } from '../songList';

interface TrackListProps {
  tracks: Track[];
  onTrackSelect: (track: Track) => void;
  currentTrack?: Track;
  category: string;
  loadingTrack?: Track | null;
  playingTrack?: Track | null;
  isPlaying?: boolean;
}

const TrackList: React.FC<TrackListProps> = ({
  tracks,
  onTrackSelect,
  currentTrack,
  category,
  loadingTrack,
  playingTrack,
  isPlaying,
}) => {
  return (
    <div>
      <div className="font-semibold text-white mb-2">{category}</div>
      <ul className="space-y-2 mt-[25] md:mt-[auto]">
        {tracks.map((track) => (
          <li
            key={track.title}
            className={`flex pl-0 items-center justify-between group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg transition ${
              currentTrack?.title === track.title ? 'bg-white/10' : ''
            }`}
            onClick={() => onTrackSelect(track)}
          >
            <div className="flex pr-[20px] items-center gap-2">
              {/* <span className="relative ml-[10px] w-3 h-3 mr-3 flex items-center">
                <Image
                  src="/images/icons/play.svg"
                  alt="play"
                  fill
                  priority
                  className="transition-all"
                />
              </span> */}
              {loadingTrack?.title === track.title ? (
                <span className="relative ml-[10px] w-5 h-5 mr-1 flex items-center">
                  <Image
                    src="/images/icons/spinner.svg"
                    alt="spinner"
                    fill
                    priority
                    className="spinning-icon text-white w-[15px] h-[15px]"
                  />
                </span>
              ) : playingTrack?.title === track.title && isPlaying ? (
                <div className="relative w-5 h-5 mr-3">
                  <div className="playing_icon">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                  </div>
                </div>
              ) : (
                <span className="relative ml-[10px] w-3 h-3 mr-3 flex items-center">
                  <Image
                    src="/images/icons/play.svg"
                    alt="play"
                    fill
                    priority
                    className="transition-all"
                  />
                </span>
              )}
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
