export const useVolumeIcon = (volume: number) => {
  const getVolumeIcon = () => {
    if (volume === 0) return '/images/icons/volume-off.svg';
    if (volume <= 50) return '/images/icons/volume-min.svg';
    return '/images/icons/volume-max.svg';
  };

  return { getVolumeIcon };
};
