import React, { useState } from 'react';

interface TabProps {
  title: string;
  route: string;
  content: React.ReactNode;
}

interface TabSelectorProps {
  tabs: TabProps[];
  initialRoute: string;
}

const TabSelector: React.FC<TabSelectorProps> = ({ tabs, initialRoute }) => {
  const [activeTab, setActiveTab] = useState<string>(initialRoute);

  const renderContent = () => {
    if (activeTab) {
      return tabs.find((tab: TabProps) => tab.route === activeTab)?.content;
    }
    return null;
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-[#F4F5F7] mb-6">
        {tabs.map((tab: TabProps) => (
          <button
            key={tab.route}
            className={`px-6 py-2 -mb-px mr-4 text-base font-inter font-medium ${
              activeTab === tab.route
                ? 'border-b-4 border-[#232323] text-[#232323] rounded-tl-[10px] rounded-tr-[10px]'
                : 'text-[#718EBF] hover:text-blue-600'
            } whitespace-nowrap flex-shrink-0`}
            onClick={() => setActiveTab(tab.route)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabSelector;
