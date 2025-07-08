import Image from 'next/image';

const Mem: React.FC = () => {
  return (
    <section className="relative text-white pt-8 md:pt-40 pb-4 md:pb-20">
      {/* Gradient Overlay */}
      <div className="w-full flex-col max-w-[81.25rem] px-4 mx-auto flex justify-center relative z-20">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 w-full md:gap-[4.375rem] md:text-center">
          {/* Text Content */}
          <div className="flex-1 gap-[1.5rem] flex flex-col relative mt-8 lg:mt-0 justify-center text-center w-full lg:w-[50%]">
            <p className="text-orange-500 text-4xl sm:text-5xl md:text-[3.6rem] font-bold">
              Лучший <br /> работник месяца
            </p>
            <p className="text-gray-300 text-[1.8rem] md:text-[1.8rem] font-(family-name:--font-gunny-rewritten-variable) leading-relaxed mb-2">
              Музыка — не фастфуд. <br /> Это высокая кухня. <br /> И я — тот, кто готовит под тебя.
            </p>
          </div>
          {/* Image and Name/Quote */}
          <div className="flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0 w-full lg:w-[50%]">
            <div className="relative w-full h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] max-w-[25rem] lg:max-w-[35rem] mx-auto">
              <Image
                src="/images/idgie/meme.png"
                alt="Дмитрий Эбергарт"
                fill
                className="object-contain rounded-lg shadow-md"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mem;
