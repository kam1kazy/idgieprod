import React from 'react';
import { FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12  bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            your.email@example.com
          </a>

          {/* Social Links */}
          <div className="flex space-x-6">
            {/* Instagram */}
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="text-white text-2xl" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0088cc] p-3 rounded-full hover:opacity-80 transition-opacity"
            >
              <FaTelegram className="text-white text-2xl" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
