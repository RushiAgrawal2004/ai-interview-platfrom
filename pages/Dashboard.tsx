import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PracticeIcon } from '../components/icons/PracticeIcon';
import { HistoryIcon } from '../components/icons/HistoryIcon';
import { ChartIcon } from '../components/icons/ChartIcon';
import Card from '../components/Card';

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; change: string; changeType: 'increase' | 'decrease' }> = ({ icon, title, value, change, changeType }) => {
    const isIncrease = changeType === 'increase';
    return (
        <Card>
            <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary-500/10 text-primary-600">
                    {icon}
                </div>
                <div className="ml-4">
                    <p className="text-sm text-slate-500">{title}</p>
                    <p className="text-2xl font-semibold text-slate-800">{value}</p>
                </div>
            </div>
            <p className={`text-sm mt-2 flex items-center ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                {isIncrease ? '▲' : '▼'} {change} vs last month
            </p>
        </Card>
    );
};

const interviewPositions = [
    {
        title: 'Java Backend Developer',
        description: 'Design and implement scalable, high-performance backend services and APIs using the Java ecosystem.',
        experience: '3-5 years',
        difficulty: 'Hard',
        difficultyColor: 'bg-red-500/10 text-red-500',
    },
    {
        title: 'Frontend Developer',
        description: 'Build responsive, modern, and accessible user interfaces with React, TypeScript, and Tailwind CSS.',
        experience: '2-4 years',
        difficulty: 'Medium',
        difficultyColor: 'bg-yellow-500/10 text-yellow-500',
    },
    {
        title: 'DevOps Engineer',
        description: 'Automate and streamline our operations and processes. Build and maintain tools for deployment and monitoring.',
        experience: '5+ years',
        difficulty: 'Hard',
        difficultyColor: 'bg-red-500/10 text-red-500',
    },
    {
        title: 'Data Analyst',
        description: 'Interpret data, analyze results using statistical techniques, and provide ongoing reports to the business.',
        experience: '1-3 years',
        difficulty: 'Medium',
        difficultyColor: 'bg-yellow-500/10 text-yellow-500',
    },
     {
        title: 'System Design Engineer',
        description: 'Architect and design large-scale, distributed software systems that are reliable, and scalable.',
        experience: '5+ years',
        difficulty: 'Expert',
        difficultyColor: 'bg-purple-500/10 text-purple-500',
    }
];


const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Welcome back, Jane!</h1>
                <p className="text-slate-500 mt-1">Here's your interview practice summary.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard 
                    icon={<PracticeIcon className="w-6 h-6" />}
                    title="Interviews Taken"
                    value="24"
                    change="+12%"
                    changeType="increase"
                />
                <StatCard 
                    icon={<ChartIcon className="w-6 h-6" />}
                    title="Average Score"
                    value="8.2/10"
                    change="-0.5"
                    changeType="decrease"
                />
                <StatCard 
                    icon={<HistoryIcon className="w-6 h-6" />}
                    title="Hours Practiced"
                    value="16.5"
                    change="+2.1h"
                    changeType="increase"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                <div className="lg:col-span-3">
                    <Card>
                       <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
                        <ul>
                            <li className="flex items-center justify-between py-3 border-b border-slate-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-slate-100 rounded-full mr-4"><PracticeIcon className="w-5 h-5 text-primary-500"/></div>
                                    <div>
                                        <p className="font-medium text-slate-800">Senior Frontend Engineer</p>
                                        <p className="text-sm text-slate-500">Completed 2 hours ago</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-slate-800">9.1/10</p>
                                    <p className="text-sm text-green-500">Excellent</p>
                                </div>
                            </li>
                             <li className="flex items-center justify-between py-3 border-b border-slate-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-slate-100 rounded-full mr-4"><PracticeIcon className="w-5 h-5 text-primary-500"/></div>
                                    <div>
                                        <p className="font-medium text-slate-800">Product Manager</p>
                                        <p className="text-sm text-slate-500">Completed yesterday</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-slate-800">7.5/10</p>
                                    <p className="text-sm text-yellow-500">Good</p>
                                </div>
                            </li>
                            <li className="flex items-center justify-between pt-3">
                                <div className="flex items-center">
                                    <div className="p-2 bg-slate-100 rounded-full mr-4"><PracticeIcon className="w-5 h-5 text-primary-500"/></div>
                                    <div>
                                        <p className="font-medium text-slate-800">UX/UI Designer</p>
                                        <p className="text-sm text-slate-500">Completed on Monday</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-slate-800">8.8/10</p>
                                    <p className="text-sm text-green-500">Excellent</p>
                                </div>
                            </li>
                        </ul>
                    </Card>
                </div>
                <div className="lg:col-span-2">
                    <Card>
                       <h3 className="text-lg font-semibold text-slate-800 mb-4">Focus Areas</h3>
                       <p className="text-slate-500 text-sm mb-4">Based on your recent interviews, here are some areas to focus on:</p>
                       <div className="space-y-3">
                           <span className="inline-block bg-primary-500/10 text-primary-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">STAR Method</span>
                           <span className="inline-block bg-yellow-500/10 text-yellow-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">System Design</span>
                           <span className="inline-block bg-green-500/10 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Behavioral Questions</span>
                           <span className="inline-block bg-red-500/10 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Salary Negotiation</span>
                       </div>
                    </Card>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Open Interview Positions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interviewPositions.map((position, index) => (
                        <Card key={index} className="flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">{position.title}</h3>
                                <p className="text-sm text-slate-500 mt-2 flex-grow min-h-[4.5rem]">{position.description}</p>
                                <div className="flex items-center space-x-2 mt-4 text-xs font-medium">
                                    <span className="inline-block bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{position.experience}</span>
                                    <span className={`inline-block px-2.5 py-1 rounded-full ${position.difficultyColor}`}>{position.difficulty}</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => navigate('/live-interview')}
                                className="w-full flex items-center justify-center mt-6 bg-primary-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300"
                            >
                                <PracticeIcon className="w-4 h-4 mr-2" />
                                Start Interview
                            </button>
                        </Card>
                    ))}
                     <Card className="flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-300 hover:border-primary-400 hover:bg-slate-50 transition-colors duration-300 cursor-pointer">
                        <h3 className="text-lg font-bold text-slate-700">More Roles Coming Soon</h3>
                        <p className="text-sm text-slate-500 mt-1">We are constantly adding new interview tracks.</p>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;