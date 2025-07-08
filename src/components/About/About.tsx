import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="relative text-white pt-8 md:pt-40 pb-4 md:pb-20 bg-gradient-to-b from-black to-gray-900">
      {/* Gradient Overlay */}
      <div className="w-full flex-col max-w-[81.25rem] px-4 mx-auto flex justify-center relative z-20">
        <h2 className="text-white mb-[2.8rem] text-4xl sm:text-[4rem] md:text-[4.875rem] font-bold ">
          ABOUT
        </h2>
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-2 md:gap-[4.375rem] w-full">
          {/* Image and Name/Quote */}
          <div className="flex-col items-center lg:items-start max-w-[25rem] lg:max-w-[30rem] flex-shrink-0 ml-auto mr-auto lg:ml-0">
            <div className="relative w-full h-[24rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] max-w-[25rem] lg:max-w-[30rem]">
              <Image
                src="/images/idgie/idgie-crop.jpg"
                alt="Дмитрий Эбергарт"
                fill
                className="object-cover rounded-lg shadow-md"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </div>
            <h3 className="text-white text-[23px] lg:text-2xl font-bold mt-8">
              ДМИТРИЙ ЭБЕРГАРТ aka IDGIE
            </h3>
          </div>

          {/* Text Content */}
          <div className="w-full flex-1 gap-[1.5rem] flex flex-col relative mt-0 sm:mt-8 lg:mt-0 lg:ml-auto">
            <p className="text-gray-300 text-[0.95rem] md:text-[1.4rem] mb-[20px] leading-relaxed">
              30 лет. 14 лет в индустрии, 11 из них на проф. уровне
            </p>
            <p className="text-white text-center text-[18px] m-[0 auto] text-sm md:text-1xl font-bold mb-6">
              Продюсер. Сонграйтер. Звукорежиссёр. Артист. Человек и пароход.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-orange-500 text-4xl sm:text-4xl md:text-5xl font-bold">1000+</p>
                <p className="text-gray-400 text-base sm:text-lg md:text-[1.4rem]">аранжировок</p>
              </div>
              <div>
                <p className="text-orange-500 text-4xl sm:text-4xl md:text-5xl font-bold">1000+</p>
                <p className="text-gray-400 text-base sm:text-lg md:text-[1.4rem]">
                  сведенных треков
                </p>
              </div>
              <div>
                <p className="text-orange-500 text-4xl sm:text-4xl md:text-5xl font-bold">300+</p>
                <p className="text-gray-400 text-base sm:text-lg md:text-[1.4rem]">
                  авторских песен
                </p>
              </div>
            </div>

            <p className="text-white text-lg md:text-xl font-semibold mb-1">Жанры:</p>
            <p className="text-gray-300 text-base md:text-[1.4rem] leading-relaxed mb-2">
              Поп, хип-хоп, рок, R&B, хаус, бэйс и многие другие <br />
              Мои треки попадали в топ-чарты <br />
              Некоторые — собирали 20+ млн на YouTube
            </p>

            <p className="text-gray-300 text-base md:text-[1.4rem] leading-relaxed">
              Также писал саундтреки для игр компании Wargaming <br />И работал над саунд-дизайном
              короткометражек
            </p>
          </div>
        </div>

        <div className="relative  mx-auto mt-20 mb-10 px-8 py-8 bg-white/10 rounded-xl border-l-4 border-[#fff] shadow-lg flex gap-4">
          <img src="/images/icons/quote.svg" alt="quote" className="w-10 h-10 opacity-80" />
          <p className="text-white text-[1.2rem] lg:text-[1.5rem] font-[var(--font-gunny-rewritten-variable)] italic">
            Музыка — мой дом. Заходи, пожалуйста. Я точно знаю, как в нём строить хиты!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
