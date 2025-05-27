import { useEffect, useRef, useState } from 'react';

import { Track } from '@/components/Player/songlist';

export const useAudioPlayer = (initialVolume: number) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [volume, setVolume] = useState(initialVolume);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
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

  const handleTrackSelect = (track: Track) => {
    if (audioRef.current) {
      audioRef.current.src = track.src;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentTrack(track);
    }
  };

  const handleSeek = (progress: number) => {
    if (audioRef.current) {
      const newTime = (progress / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setShowMiniPlayer(false);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  return {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    currentTrack,
    volume,
    showMiniPlayer,
    setShowMiniPlayer,
    handlePlay,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleTrackSelect,
    handleSeek,
    handleStop,
    handleVolumeChange,
  };
};
