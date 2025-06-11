interface PlayerTitleProps {
  artist?: string;
  title?: string;
  album?: string;
}

const PlayerTitle: React.FC<PlayerTitleProps> = ({ artist, title, album }) => {
  return (
    <>
      {/* <div className="text-sm text-[#047cb9] mb-2">Послушать в Яндекс.Музыки</div> */}
      {album && <div className="text-sm text-[#047cb9] mb-2">{album}</div>}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
        {title ? `${artist} - ${title}` : 'Выберите трек'}
      </h1>
    </>
  );
};

export default PlayerTitle;
