import { useState } from 'react';

import ContactsModal from './ContactsModal';

const Header: React.FC = () => {
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-6 z-1 absolute w-[100%]">
        <div className="flex items-center gap-2 w-full justify-between">
          <span className="font-bold text-lg">
            IDGIE.Prod<sup>®</sup>
          </span>

          <button onClick={() => setIsContactsOpen(true)}>
            <span className="bg-gray-800 text-xs px-2 py-1 rounded-full ml-2 px-6 py-3 cursor-pointer">
              Контакты
            </span>
          </button>
        </div>
      </div>
      <ContactsModal isOpen={isContactsOpen} onClose={() => setIsContactsOpen(false)} />
    </>
  );
};

export default Header;
