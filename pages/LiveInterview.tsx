import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { AIAvatarIcon } from '../components/icons/AIAvatarIcon';

const liveQuestions = [
    {
        question: "Can you walk me through a challenging project you've worked on and explain your role in it?"
    },
    {
        question: "How do you handle disagreements with a team member or a manager about a technical decision?"
    },
    {
        question: "Describe your process for debugging a complex issue in a large codebase."
    },
    {
        question: "What are your thoughts on the future of frontend development, and what technologies are you most excited about?"
    }
];

const LiveInterview: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!answer.trim()) return;

        setIsSubmitted(true);
        setAnswer('');

        setTimeout(() => {
            if (currentQuestionIndex < liveQuestions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setIsSubmitted(false);
            } else {
                navigate('/dashboard'); // Or a results page
            }
        }, 3000);
    };

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-slate-900">Live Technical Interview</h1>
                <div className="flex items-center space-x-2 text-lg font-semibold bg-white border border-slate-200 px-4 py-2 rounded-lg">
                     <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                     <span className="text-red-500">{formatTime(time)}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center text-center">
                <AIAvatarIcon className="w-24 h-24 text-primary-500 mb-6" />
                <Card className="w-full">
                    <p className="text-2xl font-semibold text-slate-800 leading-relaxed">
                        {liveQuestions[currentQuestionIndex].question}
                    </p>
                </Card>
            </div>
            
            {/* Footer / Input */}
            <div className="mt-8">
                {isSubmitted ? (
                    <div className="text-center p-4 bg-slate-100 rounded-lg">
                        <p className="text-slate-600 font-semibold">Answer recorded. Next question loading...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Type your answer here..."
                            rows={4}
                            className="w-full bg-white border-2 border-slate-300 rounded-lg p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!answer.trim()}
                            className="w-full mt-4 bg-primary-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg disabled:bg-slate-300 disabled:cursor-not-allowed"
                        >
                            Submit Answer
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LiveInterview;