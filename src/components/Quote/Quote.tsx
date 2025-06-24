const Quote: React.FC = () => {
  return (
    <section className="-z-1 relative pb-30 pt-0 sm:pt-20 bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-[81.25rem] px-4 mx-auto">
        <div className="flex justify-center">
          <p className="text-xl sm:text-2xl md:text-[2.1rem] font-(family-name:--font-gunny-rewritten-variable) leading-relaxed">
            <br />
            Плагинов сейчас полно.
            <br />
            А вот звука со вкусом — дефицит.
            <br />
            Я не делаю шаблон.
            <br />
            Я делаю трек, который хочется слушать.
            <br />
            <br />
            Не на 15 секунд в TikTok — а на долгое залипание в наушниках.
          </p>
        </div>
      </div>
      <div className="-z-1 absolute left-[0] bottom-0 w-full h-[350px] bg-gradient-to-b from-black to-gray-900"></div>
    </section>
  );
};

export default Quote;
