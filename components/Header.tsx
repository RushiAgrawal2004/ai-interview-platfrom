import React from 'react';
import { BellIcon } from './icons/BellIcon';
import { SearchIcon } from './icons/SearchIcon';
import { MenuIcon } from './icons/MenuIcon';

interface HeaderProps {
    setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-10">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-500 hover:text-slate-900"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="hidden md:block relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search interviews..."
            className="bg-slate-100 w-64 lg:w-96 text-slate-800 placeholder-slate-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Right side icons and profile */}
        <div className="flex items-center space-x-4">
          <button className="relative text-slate-500 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          
          <div className="flex items-center space-x-3">
            <img 
              src="https://picsum.photos/seed/user/40/40" 
              alt="User" 
              className="w-10 h-10 rounded-full"
            />
            <div className="hidden md:block">
              <div className="text-sm font-medium text-slate-800">Jane Doe</div>
              <div className="text-xs text-slate-500">Pro Member</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;