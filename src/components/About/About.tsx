import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="relative text-white pt-8 md:pt-40 pb-4 md:pb-20 bg-gradient-to-b from-black to-gray-900 z-[-1]">
      {/* Gradient Overlay */}
      <div className="w-full flex-col max-w-[81.25rem] px-4 mx-auto flex justify-center relative z-20">
        <h2 className="text-white mb-[2.8rem] text-4xl sm:text-[4rem] md:text-[4.875rem] font-bold text-center lg:text-left">
          ABOUT
        </h2>
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-[4.375rem] w-full">
          {/* Image and Name/Quote */}
          <div className="flex-col items-center lg:items-start text-center lg:text-left max-w-[25rem] lg:max-w-[30rem] flex-shrink-0 ml-auto mr-auto lg:ml-0">
            <div className="relative w-full h-[16rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] max-w-[25rem] lg:max-w-[30rem]">
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
            <h3 className="text-white text-1xl lg:text-2xl font-bold mt-8">
              ДМИТРИЙ ЭБЕРГАРТ aka IDGIE
            </h3>
          </div>

          {/* Text Content */}
          <div className="w-full flex-1 gap-[1.5rem] flex flex-col relative mt-8 lg:mt-0 lg:ml-auto text-center lg:text-left">
            <p className="text-gray-300 text-base md:text-[1.4rem] leading-relaxed">
              30 лет. 14 лет в индустрии, 11 из них на проф. уровне
            </p>
            <p className="text-white text-xl md:text-1xl font-bold mb-6">
              Продюсер. Сонграйтер. Звукорежиссёр. Артист. Человек и пароход.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
              <div className="">
                <p className="text-orange-500 text-5xl font-bold">1000+</p>
                <p className="text-gray-500 text-[1.4rem] text-base">аранжировок</p>
              </div>
              <div className="">
                <p className="text-orange-500 text-5xl font-bold">1000+</p>
                <p className="text-gray-500 text-[1.4rem] text-base">сведенных треков</p>
              </div>
              <div className="">
                <p className="text-orange-500 text-5xl font-bold">300+</p>
                <p className="text-gray-500 text-[1.4rem] text-base">авторских песен</p>
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

        <p className="text-gray-300 text-center text-[1.4rem] lg:text-[2.1rem] mt-20 font-(family-name:--font-gunny-rewritten-variable)">
          Музыка - мой дом. Заходи, пожалуйста. Я точно знаю, как в нём строить хиты!
        </p>
      </div>
    </section>
  );
};

export default About;
