import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { PracticeIcon } from '../components/icons/PracticeIcon';
import { WarningIcon } from '../components/icons/WarningIcon';
import { ClipboardListIcon } from '../components/icons/ClipboardListIcon';
import { SettingsIcon } from '../components/icons/SettingsIcon';
import { BackIcon } from '../components/icons/BackIcon';
import { MicIcon } from '../components/icons/MicIcon';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-center py-2 border-b border-slate-200/70">
        <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-3"></span>
        <span className="text-slate-600">{children}</span>
    </li>
);

const PracticePlan: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Your Personalized Practice Plan</h1>
                    <p className="text-slate-500 mt-1">Based on your skill report, here's the recommended focus for your next session.</p>
                </div>
                 <button 
                    onClick={() => navigate('/skill-report')}
                    className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-4 py-2 rounded-lg transition-colors"
                >
                    <BackIcon className="w-4 h-4 mr-2" />
                    Back to Report
                </button>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-yellow-500/10 text-yellow-500 rounded-full mr-3">
                            <WarningIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">Areas for Improvement</h3>
                    </div>
                    <ul className="space-y-1">
                        <ListItem>Web Performance Optimization</ListItem>
                        <ListItem>Testing (Jest/RTL)</ListItem>
                        <ListItem>System Design fundamentals</ListItem>
                    </ul>
                </Card>

                <Card>
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-green-500/10 text-green-500 rounded-full mr-3">
                            <ClipboardListIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">Recommended Topics</h3>
                    </div>
                    <ul className="space-y-1">
                        <ListItem>Behavioral questions about teamwork</ListItem>
                        <ListItem>Advanced React Hooks (useMemo, useCallback)</ListItem>
                        <ListItem>Code Challenge: Debounce function</ListItem>
                        <ListItem>System Design: Caching strategies</ListItem>
                    </ul>
                </Card>

                <div className="lg:col-span-2">
                     <Card>
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-slate-500/10 text-slate-500 rounded-full mr-3">
                                <SettingsIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800">Session Configuration</h3>
                        </div>
                        <div className="flex items-center space-x-8">
                            <div>
                                <p className="text-sm text-slate-500">Difficulty Level</p>
                                <p className="font-semibold text-slate-800 text-lg">Senior</p>
                            </div>
                             <div>
                                <p className="text-sm text-slate-500">Estimated Duration</p>
                                <p className="font-semibold text-slate-800 text-lg">~25-30 minutes</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

             <div className="mt-8">
                <Card>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold text-slate-900">You're All Set!</h2>
                            <p className="text-slate-500">Choose your practice mode to begin.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                             <button 
                                onClick={() => navigate('/practice')}
                                className="flex items-center justify-center bg-white text-slate-700 font-bold py-3 px-6 rounded-lg hover:bg-slate-100 border border-slate-300 transition-all duration-300"
                            >
                                <PracticeIcon className="w-5 h-5 mr-2" />
                                Start Quiz Session
                            </button>
                            <button 
                                onClick={() => navigate('/live-interview')}
                                className="flex items-center justify-center bg-primary-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/30"
                            >
                                <MicIcon className="w-5 h-5 mr-2" />
                                Start Live Interview
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PracticePlan;