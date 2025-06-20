import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [user] = useState({
    name: 'John',
    initials: 'JS',
    email: 'john@example.com'
  });

  // Background particles animation
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 4
  }));

  const handleSidebarItemClick = (itemId) => {
    setActiveView(itemId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '6s'
            }}
          />
        ))}
      </div>

      {/* Main App Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar user={user} />

        {/* Main Layout */}
        <div className="flex">
          <Sidebar 
            activeItem={activeView} 
            onItemClick={handleSidebarItemClick} 
          />
          
          {/* Main Content Area */}
          <div className="flex-1">
            {activeView === 'dashboard' && <Dashboard user={user} />}
            {activeView === 'paths' && (
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">My Learning Paths</h1>
                <p className="text-white/60">Your personalized learning paths will appear here.</p>
              </div>
            )}
            {activeView === 'challenges' && (
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Challenges</h1>
                <p className="text-white/60">Weekly and daily challenges to boost your skills.</p>
              </div>
            )}
            {activeView === 'achievements' && (
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Achievements</h1>
                <p className="text-white/60">Your learning milestones and badges.</p>
              </div>
            )}
            {activeView === 'ai-chat' && (
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">AI Chat</h1>
                <p className="text-white/60">Chat with your AI learning assistant.</p>
              </div>
            )}
            {activeView === 'study-plans' && (
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Study Plans</h1>
                <p className="text-white/60">AI-generated personalized study plans.</p>
              </div>
            )}
            {activeView === 'projects' && (
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Projects</h1>
                <p className="text-white/60">Your completed projects and portfolio.</p>
              </div>
            )}
            {activeView === 'certificates' && (
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Certificates</h1>
                <p className="text-white/60">Your earned certificates and credentials.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 15, 35, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }

        /* Animation for particles */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 1; 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;