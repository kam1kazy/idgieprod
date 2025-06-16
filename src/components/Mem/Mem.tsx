import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="relative text-white pt-8 md:pt-40 pb-4 md:pb-20 z-[-1]">
      {/* Gradient Overlay */}
      <div className="w-full flex-col max-w-[81.25rem] px-4 mx-auto flex justify-center relative z-20">
        <div className="relative flex flex-col lg:flex-row items-start justify-center gap-8 md:gap-[4.375rem] w-full">
          {/* Image and Name/Quote */}
          <div className="flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0">
            <div className="relative w-full h-[16rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] max-w-[25rem] lg:max-w-[35rem] mx-auto">
              <Image
                src="/images/idgie/meme.jpg"
                alt="Дмитрий Эбергарт"
                fill
                className="object-cover rounded-lg shadow-md"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 gap-[1.5rem] flex flex-col relative mt-8 lg:mt-0 justify-center max-w-max">
            <p className="text-orange-500 text-[3.6rem] font-bold">
              Лучший <br /> работник месяца
            </p>
            <p className="text-gray-300 text-base md:text-[1.8rem] leading-relaxed mb-2">
              Музыка — не фастфуд. <br /> Это высокая кухня. <br /> И я — тот, кто готовит под тебя.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
