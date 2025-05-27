import { useState } from 'react';
import { Artist, artists } from './NamesCloudList';

const NamesCloud = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(artists[0]);
  const [hoveredArtist, setHoveredArtist] = useState<Artist | null>(null);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const handleMouseEnter = (artist: Artist) => {
    setHoveredArtist(artist);
    if (!selectedArtist) {
      setSelectedArtist(artist);
    }
  };

  const handleMouseLeave = () => {
    setHoveredArtist(null);
  };

  const displayArtist = selectedArtist || hoveredArtist;

  return (
    <div className="w-full min-h-[700px] relative">
      <div className="flex gap-8">
        {/* Список артистов слева */}
        <div className="w-1/3 max-h-[500px] overflow-y-auto custom-scrollbar">
          <div className="space-y-2 pr-4">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedArtist?.name === artist.name
                    ? 'bg-blue-600 text-white'
                    : hoveredArtist?.name === artist.name
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onMouseEnter={() => handleMouseEnter(artist)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleArtistClick(artist)}
              >
                {artist.name}
              </div>
            ))}
          </div>
        </div>

        {/* Карточка артиста справа */}
        <div className="w-2/3 h-[500px]">
          {displayArtist ? (
            <div className="bg-gray-800 rounded-xl p-6 transition-all duration-300 h-full">
              <div className="flex gap-6">
                <img
                  src={displayArtist.avatar}
                  alt={displayArtist.name}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{displayArtist.name}</h3>
                  <p className="text-gray-300 mb-4">{displayArtist.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Работы:</h4>
                    <ul className="space-y-2">
                      {displayArtist.works.map((work, index) => (
                        <li key={index} className="text-gray-300">
                          {work}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-6 flex items-center justify-center h-full">
              <p className="text-gray-400">
                Наведите на имя артиста, чтобы увидеть подробную информацию
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default NamesCloud;
