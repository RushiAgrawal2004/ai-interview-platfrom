import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Card from '../components/Card';
import { CheckIcon } from '../components/icons/CheckIcon';
import { WarningIcon } from '../components/icons/WarningIcon';
import { PracticeIcon } from '../components/icons/PracticeIcon';
import { ChartIcon } from '../components/icons/ChartIcon';

const radarData = [
    { subject: 'Problem Solving', score: 85, fullMark: 100 },
    { subject: 'Data Structures', score: 90, fullMark: 100 },
    { subject: 'Algorithms', score: 75, fullMark: 100 },
    { subject: 'System Design', score: 80, fullMark: 100 },
    { subject: 'Communication', score: 95, fullMark: 100 },
    { subject: 'Behavioral', score: 88, fullMark: 100 },
];

const strengths = [
    "Excellent communication and articulation of ideas.",
    "Strong grasp of fundamental data structures.",
    "Effectively explained trade-offs in system design choices."
];

const weaknesses = [
    "Could improve on algorithmic complexity analysis.",
    "Deeper knowledge of advanced testing methodologies needed.",
    "More practice on real-time collaborative coding."
];

const SkillReport: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Interview Report</h1>
                    <p className="text-slate-500 mt-1">Analysis for the <span className="font-semibold text-primary-600">Senior Frontend Developer</span> role.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">Overall Score</h3>
                        <p className="text-5xl font-bold text-primary-600">88<span className="text-2xl text-slate-400">/100</span></p>
                    </Card>
                    <Card>
                        <h3 className="text-lg font-semibold text-slate-800 mb-3">Role Readiness</h3>
                        <div className="flex items-center">
                            <div className="w-full bg-slate-200 rounded-full h-4">
                                <div className="bg-green-500 h-4 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                            <p className="text-lg font-bold text-green-600 ml-4">90%</p>
                        </div>
                        <p className="text-sm text-slate-500 mt-2 text-center">You are a strong candidate for this role.</p>
                    </Card>
                    <Card>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Strengths</h3>
                        <ul className="space-y-3">
                            {strengths.map((strength, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Areas for Improvement</h3>
                        <ul className="space-y-3">
                            {weaknesses.map((weakness, index) => (
                                <li key={index} className="flex items-start">
                                    <WarningIcon className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600">{weakness}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2">
                    <Card>
                         <div className="flex items-center mb-4">
                            <div className="p-2 bg-primary-500/10 text-primary-600 rounded-full mr-3">
                                <ChartIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800">Skill Breakdown</h3>
                        </div>
                        <div style={{ width: '100%', height: 400 }}>
                            <ResponsiveContainer>
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                    <Radar name="Your Score" dataKey="score" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.6} />
                                    <Legend />
                                    <Tooltip />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Improvement Plan CTA */}
            <div className="mt-8">
                <div className="rounded-xl bg-gradient-to-r from-primary-600 to-fuchsia-600 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between p-6">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold text-white">View Your Improvement Plan</h2>
                            <p className="text-primary-200">Get a personalized plan to turn weaknesses into strengths.</p>
                        </div>
                        <button
                            onClick={() => navigate('/practice-plan')}
                            className="flex items-center justify-center bg-white text-primary-600 font-bold py-3 px-6 rounded-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                        >
                            <PracticeIcon className="w-5 h-5 mr-2" />
                            Generate Improvement Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillReport;