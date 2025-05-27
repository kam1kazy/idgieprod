import Image from 'next/image';

interface Tool {
  label: string;
  icon: string;
}

interface ToolsPanelProps {
  tools: Tool[];
}

const ToolsPanel: React.FC<ToolsPanelProps> = ({ tools }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-24 z-1">
      {tools.map(({ label, icon }) => (
        <button
          key={label}
          className={`px-6 py-3 relative rounded-lg flex font-bold items-center w-60 h-12 gap-2 bg-[#171717]`}
        >
          <Image
            src={icon}
            alt={label}
            fill
            className={`w-10 object-cover opacity-1 relative`}
            priority
          />
          {label}
        </button>
      ))}
    </div>
  );
};

export default ToolsPanel;
