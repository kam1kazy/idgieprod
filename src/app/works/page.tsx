import React from 'react';

const tracks = [
  { title: 'Beautiful Mistakes', duration: '2:34' },
  { title: 'Best My Heart', duration: '2:34' },
  { title: 'Cold (feat. Future)', duration: '2:34' },
  { title: 'Daylight', duration: '2:34' },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900/90 to-gray-800/80">
      <div className="w-full max-w-4xl bg-white/5 rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 backdrop-blur-md">
        {/* Левая часть: текст и треки */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-sm text-violet-400 mb-2">Our New Album</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Till The Wheels
              <br />
              Fall Off
            </h1>
            <div className="text-gray-300 mb-6">ft. Lil Durk, Capella Grey</div>
            {/* Прогресс-бар */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-white w-1/2" />
              </div>
              <div className="text-white text-sm font-semibold">1:15</div>
              <span className="text-gray-400 text-sm">/ 2:34</span>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">Twentyone Astronaut</div>
            <ul className="space-y-2">
              {tracks.map((track) => (
                <li
                  key={track.title}
                  className="flex items-center justify-between group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg transition"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-gray-400 group-hover:text-white">
                      play_arrow
                    </span>
                    <span className="text-white font-medium">{track.title}</span>
                  </div>
                  <span className="text-gray-300">{track.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Правая часть: обложка и контролы */}
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            src="ССЫЛКА_НА_ОБЛОЖКУ"
            alt="Album Cover"
            className="w-48 h-48 rounded-xl object-cover shadow-lg mb-4"
          />
          <div className="flex items-center gap-6">
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:scale-105 transition">
              <span className="material-icons text-3xl">play_arrow</span>
            </button>
          </div>
          {/* Контрол громкости */}
          <div className="flex items-center gap-2 w-32">
            <span className="material-icons text-white">volume_up</span>
            <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-white w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
