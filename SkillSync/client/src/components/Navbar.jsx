import React from 'react';

const Navbar = () => {
  return (
    <header className="relative z-10 flex justify-between items-center px-8 py-4 bg-gray-900/80 backdrop-blur-3xl border-b border-purple-500/20">
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        SkillSync
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-8 list-none">
          <li>
            <a 
              href="#dashboard" 
              className="text-white/80 no-underline transition-colors duration-300 hover:text-purple-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a 
              href="#explore" 
              className="text-white/80 no-underline transition-colors duration-300 hover:text-purple-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Explore
            </a>
          </li>
          <li>
            <a 
              href="#challenges" 
              className="text-white/80 no-underline transition-colors duration-300 hover:text-purple-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Challenges
            </a>
          </li>
          <li>
            <a 
              href="#leaderboard" 
              className="text-white/80 no-underline transition-colors duration-300 hover:text-purple-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Leaderboard
            </a>
          </li>
        </ul>
      </nav>
      
      {/* User Menu */}
      <div className="flex items-center gap-4">
        <a 
          href="#upgrade" 
          className="bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-full text-white font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/40"
        >
          Upgrade to Pro
        </a>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center font-semibold cursor-pointer transition-transform duration-300 hover:scale-110">
          JS
        </div>
      </div>
    </header>
  );
};

export default Navbar;