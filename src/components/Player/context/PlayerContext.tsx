'use client';

import { createContext, ReactNode, useContext, useRef, useState } from 'react';

import { Track } from '../songList';

interface PlayerContextType {
  isPlaying: boolean;
  currentTrack: Track | null;
  volume: number;
  currentTime: number;
  duration: number;
  showMiniPlayer: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  handlePlay: () => void;
  handleTrackSelect: (track: Track) => void;
  handleTimeUpdate: () => void;
  handleLoadedMetadata: () => void;
  handleSeek: (time: number) => void;
  handleVolumeChange: (value: number) => void;
  handleStop: () => void;
  setShowMiniPlayer: (show: boolean) => void;
  handlePrevTrack: (tracks: Track[]) => void;
  handleNextTrack: (tracks: Track[]) => void;
  loadingTrack: Track | null;
  setLoadingTrack: (track: Track | null) => void;
  playingTrack: Track | null;
  setPlayingTrack: (track: Track | null) => void;
  handleCanPlay: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [loadingTrack, setLoadingTrack] = useState<Track | null>(null);
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setLoadingTrack(null); // Сбрасываем loadingTrack при успешном воспроизведении
            setPlayingTrack(currentTrack); // Устанавливаем playingTrack
          })
          .catch((error) => {
            console.error('Error playing track:', error);
          });
      }
    }
  };

  const handleTrackSelect = (track: Track) => {
    console.log('Selecting track:', track.title); // Для отладки
    setCurrentTrack(track); // Устанавливаем currentTrack
    setLoadingTrack(track); // Устанавливаем loadingTrack
    setPlayingTrack(null); // Сбрасываем playingTrack
    if (audioRef.current) {
      audioRef.current.src = track.src;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Error playing track:', error);
          setIsPlaying(false);
        });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
      setVolume(value);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handlePrevTrack = (tracks: Track[]) => {
    if (!currentTrack || tracks.length === 0) {
      return;
    }
    const idx = tracks.findIndex((t) => t.src === currentTrack.src);
    const prevIdx = idx > 0 ? idx - 1 : tracks.length - 1;
    handleTrackSelect(tracks[prevIdx]);
  };

  const handleNextTrack = (tracks: Track[]) => {
    if (!currentTrack || tracks.length === 0) {
      return;
    }
    const idx = tracks.findIndex((t) => t.src === currentTrack.src);
    const nextIdx = idx < tracks.length - 1 ? idx + 1 : 0;
    handleTrackSelect(tracks[nextIdx]);
  };

  const handleCanPlay = () => {
    console.log('handleCanPlay triggered', { currentTrack, audioRef: audioRef.current });
    if (audioRef.current && currentTrack) {
      setLoadingTrack(null);
      setPlayingTrack(currentTrack);
    }
  };

  const value = {
    isPlaying,
    currentTrack,
    volume,
    currentTime,
    duration,
    showMiniPlayer,
    audioRef,
    handlePlay,
    handleTrackSelect,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSeek,
    handleVolumeChange,
    handleStop,
    handleCanPlay,
    setShowMiniPlayer,
    handlePrevTrack,
    handleNextTrack,
    loadingTrack,
    setLoadingTrack,
    playingTrack,
    setPlayingTrack,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
