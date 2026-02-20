import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from './icons/HomeIcon';
import { PracticeIcon } from './icons/PracticeIcon';
import { HistoryIcon } from './icons/HistoryIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { LogoIcon } from './icons/LogoIcon';
import { ChartIcon } from './icons/ChartIcon';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {

  const baseLinkClasses = "flex items-center p-3 my-1 rounded-lg transition-colors duration-200";
  const inactiveLinkClasses = "text-slate-500 hover:bg-slate-100 hover:text-slate-900";
  const activeLinkClasses = "bg-primary-600 text-white shadow-md";

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      ></div>

      <aside className={`fixed top-0 left-0 w-64 h-full bg-white border-r border-slate-200 flex-col z-40 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-center h-20 border-b border-slate-200">
          <LogoIcon className="h-8 w-8 text-primary-500" />
          <h1 className="text-2xl font-bold text-slate-800 ml-3">InterviewAI</h1>
        </div>
        <nav className="flex-1 px-4 py-4">
          <ul>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
                <HomeIcon className="w-6 h-6 mr-3" />
                <span className="font-medium">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skill-report" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
                <ChartIcon className="w-6 h-6 mr-3" />
                <span className="font-medium">Interview Report</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/practice" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
                <PracticeIcon className="w-6 h-6 mr-3" />
                <span className="font-medium">Practice</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/history" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
                <HistoryIcon className="w-6 h-6 mr-3" />
                <span className="font-medium">History</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
                <SettingsIcon className="w-6 h-6 mr-3" />
                <span className="font-medium">Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="bg-slate-100/70 p-4 rounded-lg text-center">
            <h4 className="font-semibold text-slate-800 mb-2">Upgrade to Pro</h4>
            <p className="text-sm text-slate-500 mb-4">Unlock premium features and unlimited interview practice.</p>
            <button className="w-full bg-primary-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;