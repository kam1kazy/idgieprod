interface PlayerTitleProps {
  artist?: string;
  title?: string;
  link: string;
}

const PlayerTitle: React.FC<PlayerTitleProps> = ({ artist, title, link }) => {
  return (
    <>
      {link && (
        <div className="text-sm text-[#047cb9] mb-2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Полный список в Яндекс.Музыки
          </a>
        </div>
      )}
      <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-white mb-2 leading-tight">
        {title ? `${artist} - ${title}` : 'Выберите трек'}
      </h1>
    </>
  );
};

export default PlayerTitle;
