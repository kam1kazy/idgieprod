import React from 'react';

interface ServiceButtonProps {
  title: string;
  description: string;
  onClick: () => void;
}

const styles = {
  textCenterAfter: `after:content-[''] after:absolute after:-top-2 after:-left-3 after:w-3 after:h-3 after:border-t-[#87745f] after:border-l-[#87745f] after:border-l-2 after:border-t-2 after:border-solid`,
};

const ServiceButton: React.FC<ServiceButtonProps> = ({ title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`max-w-sm group cursor-pointer transition-transform relative hover:scale-105 ${styles.textCenterAfter}`}
    >
      <div className="text-lg font-semibold mb-2 group-hover:text-[#87745f] transition-colors">
        {title}
      </div>
      <div className="text-sm text-gray-300">{description}</div>
    </button>
  );
};

export default ServiceButton;
