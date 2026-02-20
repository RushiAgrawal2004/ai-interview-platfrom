import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { PracticeIcon } from '../components/icons/PracticeIcon';
import { TargetIcon } from '../components/icons/TargetIcon';
import { BriefcaseIcon } from '../components/icons/BriefcaseIcon';
import { BackIcon } from '../components/icons/BackIcon';
import CircularProgress from '../components/CircularProgress';

const skillsData = [
    { name: 'React', level: 95 },
    { name: 'JavaScript (ES6+)', level: 92 },
    { name: 'TypeScript', level: 88 },
    { name: 'State Management (Redux/Zustand)', level: 85 },
    { name: 'Testing (Jest/RTL)', level: 78 },
    { name: 'CSS-in-JS & TailwindCSS', level: 94 },
    { name: 'Web Performance Optimization', level: 75 },
];

const Skill: React.FC<{ name: string; level: number }> = ({ name, level }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <p className="font-medium text-slate-700">{name}</p>
            <p className="text-sm font-semibold text-primary-600">{level}%</p>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
        </div>
    </div>
);

const SkillReport: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Your Skill Report</h1>
                    <p className="text-slate-500 mt-1">Analysis based on your resume for the <span className="font-semibold text-primary-600">Senior Frontend Developer</span> role.</p>
                </div>
                <button 
                    onClick={() => navigate('/upload-resume')}
                    className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-4 py-2 rounded-lg transition-colors"
                >
                    <BackIcon className="w-4 h-4 mr-2" />
                    Back
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="flex flex-col items-center text-center">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Role Fit Score</h3>
                        <CircularProgress percentage={88} />
                        <p className="text-xl font-bold text-green-500 mt-4">Strong Match</p>
                        <p className="text-sm text-slate-500 mt-1">Your skills and experience are a strong fit for this role.</p>
                    </Card>
                    <Card>
                        <div className="flex items-center">
                             <div className="p-3 rounded-full bg-primary-500/10 text-primary-600 mr-4">
                                <BriefcaseIcon className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">Detected Experience</h3>
                                <p className="text-slate-700 text-xl font-medium">5-8 Years <span className="text-base text-slate-500 font-normal">(Senior)</span></p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2">
                    <Card>
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-primary-500/10 text-primary-600 rounded-full mr-3">
                                <TargetIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800">Key Skills Analysis</h3>
                        </div>
                        <div className="space-y-5">
                            {skillsData.map(skill => <Skill key={skill.name} name={skill.name} level={skill.level} />)}
                        </div>
                    </Card>
                </div>
            </div>

            <div className="mt-8">
                <div className="rounded-xl bg-gradient-to-r from-primary-600 to-fuchsia-600 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between p-6">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold text-white">Ready to Practice?</h2>
                            <p className="text-primary-200">Continue to your personalized practice plan.</p>
                        </div>
                        <button 
                            onClick={() => navigate('/practice-plan')}
                            className="flex items-center justify-center bg-white text-primary-600 font-bold py-3 px-6 rounded-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                        >
                            <PracticeIcon className="w-5 h-5 mr-2" />
                            Continue to Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillReport;