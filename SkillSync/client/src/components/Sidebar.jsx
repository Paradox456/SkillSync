import React, { useState } from 'react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const sidebarSections = [
    {
      title: 'Learning',
      items: [
        { name: 'Dashboard', icon: '📊' },
        { name: 'My Paths', icon: '🚀' },
        { name: 'Challenges', icon: '🎯' },
        { name: 'Achievements', icon: '🏆' }
      ]
    },
    {
      title: 'AI Tutor',
      items: [
        { name: 'AI Chat', icon: '🤖' },
        { name: 'Study Plans', icon: '📝' }
      ]
    },
    {
      title: 'Portfolio',
      items: [
        { name: 'Projects', icon: '📁' },
        { name: 'Certificates', icon: '📋' }
      ]
    }
  ];

  return (
    <aside className="w-70 bg-gray-900/60 backdrop-blur-3xl border-r border-purple-500/20 p-8">
      {sidebarSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
            {section.title}
          </div>
          {section.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center gap-3 px-3 py-3 my-1 rounded-xl cursor-pointer transition-all duration-300 ${
                activeItem === item.name
                  ? 'bg-purple-500/20 text-white translate-x-1'
                  : 'text-white/70 hover:bg-purple-500/20 hover:text-white hover:translate-x-1'
              }`}
            >
              <div className="w-5 h-5 bg-purple-500/30 rounded-md flex items-center justify-center text-xs">
                {item.icon}
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;