import { useCallback, useEffect, useRef, useState } from 'react';

export const useProgressDrag = (onSeek: (progress: number) => void) => {
  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const calculateTime = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const width = rect.width;
    const percentage = (clickX / width) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const newProgress = calculateTime(e.clientX, e.currentTarget);
    onSeek(newProgress);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !progressRef.current) {
        return;
      }
      const newProgress = calculateTime(e.clientX, progressRef.current);
      onSeek(newProgress);
    },
    [isDragging, onSeek]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  return { progressRef, handleMouseDown };
};
