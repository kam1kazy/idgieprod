import Image from 'next/image';

interface PlayerTitleProps {
  artist?: string;
  title?: string;
  link: string;
  imgSrc: string;
}

const PlayerTitle: React.FC<PlayerTitleProps> = ({ artist, title, link, imgSrc }) => {
  return (
    <>
      <div className="flex">
        <div className="w-[180px] mr-[10px] sm:w-[auto]">
          {link && (
            <div className="text-sm text-[#047cb9] mb-8">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Плейлист в Яндекс.Музыки
              </a>
            </div>
          )}
          <p className="text-xl sm:text-2xl md:text-5xl font-bold text-white mb-2 leading-tight">
            {title ? `${artist} - ${title}` : 'Выберите трек'}
          </p>
        </div>

        <div className="block min-[460px]:hidden">
          <Image
            src={imgSrc}
            alt="Album Cover"
            width={192}
            height={70}
            className="w-48 h-48 rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default PlayerTitle;
