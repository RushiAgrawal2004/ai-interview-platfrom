import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnalyzingIcon } from '../components/icons/AnalyzingIcon';
import { LogoIcon } from '../components/icons/LogoIcon';

const Analyzing: React.FC = () => {
    const navigate = useNavigate();
    const [statusText, setStatusText] = useState('Parsing resume...');

    const analysisStatuses = [
        'Extracting experience...',
        'Identifying skills...',
        'Evaluating depth...',
        'Finalizing analysis...'
    ];

    useEffect(() => {
        let currentIndex = 0;
        const DURATION_PER_STATUS = 3500; // ~3.5 seconds per status for a total of ~18s
        const TOTAL_DURATION = DURATION_PER_STATUS * (analysisStatuses.length + 1);

        const statusInterval = setInterval(() => {
            if (currentIndex < analysisStatuses.length) {
                setStatusText(analysisStatuses[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(statusInterval);
            }
        }, DURATION_PER_STATUS);

        const navigationTimer = setTimeout(() => {
            navigate('/skill-report');
        }, TOTAL_DURATION);

        return () => {
            clearInterval(statusInterval);
            clearTimeout(navigationTimer);
        };
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
            <div className="w-full max-w-md">
                 <div className="flex items-center justify-center mb-8">
                    <LogoIcon className="h-10 w-10 text-primary-500" />
                    <h1 className="text-4xl font-bold text-slate-800 ml-3">InterviewAI</h1>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-10 flex flex-col items-center">
                    <AnalyzingIcon className="w-20 h-20 text-primary-500 animate-spin-ease" />
                    <h2 className="text-2xl font-bold text-slate-900 mt-6">Processing Your Resume</h2>
                    <p className="text-slate-500 mt-2 transition-opacity duration-500 min-h-[1.25rem]">{statusText}</p>
                    <p className="text-sm text-slate-400 mt-8">This may take ~20 seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Analyzing;