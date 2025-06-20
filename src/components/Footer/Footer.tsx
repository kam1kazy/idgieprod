import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12  bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Email */}
          <a
            href="mailto:idgie.prod@yandex.ru"
            className="text-base sm:text-lg text-white hover:text-gray-300 transition-colors"
          >
            idgie.prod@yandex.ru
          </a>

          {/* Social Links */}
          <div className="flex space-x-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/the_idgie/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="text-white text-2xl" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/idgieprod"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0088cc] p-3 rounded-full hover:opacity-80 transition-opacity"
            >
              <FaTelegram className="text-white text-2xl" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@the_idgie"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] p-3 rounded-full hover:opacity-80 transition-opacity"
            >
              <FaYoutube className="text-white text-2xl" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
