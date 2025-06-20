import React, { useState } from 'react';

const Dashboard = () => {
  const [chatMessage, setChatMessage] = useState('');

  const dashboardCards = [
    {
      title: 'Current Path: Frontend Development',
      icon: '⚛️',
      progress: 68,
      description: '68% Complete • 12 lessons remaining',
      tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Weekly Challenge',
      icon: '🎯',
      progress: 45,
      description: '2 days remaining • 45% complete',
      subtitle: 'Build a React component with hooks',
      tags: ['React Hooks', 'State Management']
    },
    {
      title: 'Learning Streak',
      icon: '🔥',
      bigNumber: '14 Days',
      description: "Keep it up! You're on fire 🚀",
      tags: ['Consistency', 'Dedication']
    },
    {
      title: 'Skills Gained',
      icon: '⭐',
      bigNumber: '23',
      description: 'Skills mastered this month',
      tags: ['JavaScript', 'CSS', 'Git']
    }
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Handle AI chat message
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <main className="flex-1 p-8 bg-indigo-900/30">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Welcome back, John!
        </h1>
        <p className="text-white/60 text-lg">
          Continue your learning journey with AI-powered paths
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {dashboardCards.map((card, index) => (
          <div 
            key={index}
            className="bg-gray-900/80 backdrop-blur-3xl border border-purple-500/20 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden group"
          >
            {/* Hover effect line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-semibold text-white">
                {card.title}
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-lg">
                {card.icon}
              </div>
            </div>

            {card.subtitle && (
              <p className="text-white/80 mb-4">{card.subtitle}</p>
            )}

            {card.progress && (
              <div className="w-full h-2 bg-purple-500/20 rounded-full overflow-hidden my-4">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${card.progress}%` }}
                />
              </div>
            )}

            {card.bigNumber && (
              <p className="text-3xl font-bold text-amber-400 my-4">
                {card.bigNumber}
              </p>
            )}

            <p className="text-white/70 mb-4">{card.description}</p>

            <div className="flex flex-wrap gap-2">
              {card.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AI Chat Section */}
      <div className="bg-gray-900/90 backdrop-blur-3xl border border-cyan-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center font-semibold text-white">
            AI
          </div>
          <div>
            <h3 className="text-white font-semibold">AI Learning Assistant</h3>
            <p className="text-white/60 text-sm">Your personal coding mentor</p>
          </div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-4 text-white/90">
          Based on your current progress in React, I recommend focusing on state management next. 
          Would you like me to create a custom learning path for Redux or Context API?
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about your learning journey..."
            className="flex-1 bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-purple-500 transition-colors duration-300"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 border-none rounded-xl px-5 py-3 text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;