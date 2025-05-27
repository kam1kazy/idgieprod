import Image from 'next/image';

interface Tool {
  label: string;
  icon: string;
}

const TOOLS: Tool[] = [
  { label: 'Universal Audio', icon: 'images/tools/uad.svg' },
  { label: 'Cubase', icon: 'images/tools/cubase.svg' },
  { label: 'Ableton Link', icon: 'images/tools/abletonlink.svg' },
  { label: 'FL Studio', icon: 'images/tools/fl-studio.svg' },
  { label: 'Pro Tools', icon: 'images/tools/protools.svg' },
];

const ToolsPanel: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-24 z-1">
      {TOOLS.map(({ label, icon }) => (
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
