import { useState } from 'react';

import { tabContent, tabs } from './AboutContent';

const styles = {
  tab: `px-6 py-3 text-lg font-medium cursor-pointer transition-all duration-300 uppercase last:pr-0 relative`,
  activeTab: `text-[#87745f] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#87745f] after:transition-all after:duration-300`,
  inactiveTab: `text-gray-400 hover:text-white`,
};

const AboutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('регалии');

  return (
    <>
      <div className="flex space-x-4 mb-6 justify-end">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="text-right space-y-6">
        {(
          tabContent[activeTab as keyof typeof tabContent] as Array<{
            title: string;
            description: string;
          }>
        ).map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-[1.363rem] leading-[2.813rem] font-medium">{item.title}</h3>
            <p className="text-[1.09rem] leading-[2rem] text-gray-400 max-w-[32.125rem] ml-[auto]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutTabs;
