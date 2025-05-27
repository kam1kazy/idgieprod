interface IProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
}

export const updatePosition = ({ sectionRef, titleRef }: IProps) => {
  if (!sectionRef.current || !titleRef.current) return;

  const section = sectionRef.current;
  const title = titleRef.current;
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Если секция видна в viewport
  if (rect.top < windowHeight && rect.bottom > 0) {
    // Вычисляем прогресс (от 0 до 1)
    const progress = Math.min(
      Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
      1
    );

    // Вычисляем максимальное смещение
    const maxOffset = rect.height - title.offsetHeight - 80;
    const newPosition = progress * maxOffset;

    // Применяем трансформацию
    title.style.transform = `translateY(${newPosition}px)`;
  }
};
