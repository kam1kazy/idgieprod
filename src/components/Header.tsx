import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-6 z-1">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">
          IDGE.Prod<sup>®</sup>
        </span>
        <span className="bg-gray-800 text-xs px-2 py-1 rounded-full ml-2">Available</span>
      </div>
    </div>
  );
};

export default Header;
