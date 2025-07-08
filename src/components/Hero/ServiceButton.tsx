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
      className={`w-full max-w-[340px] sm:w-auto px-4 py-3 md:px-6 md:py-4 group cursor-pointer transition-transform relative hover:scale-105 ${styles.textCenterAfter}`}
    >
      <div className="text-lg md:text-lg uppercase font-semibold mb-1 md:mb-2 group-hover:text-[#87745f] transition-colors">
        {title}
      </div>
      <div className="text-md md:text-sm text-gray-300 h-auto md:h-[2.5rem]">{description}</div>
    </button>
  );
};

export default ServiceButton;
