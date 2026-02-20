import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { BackIcon } from '../components/icons/BackIcon';
import { CheckIcon } from '../components/icons/CheckIcon';
import { XIcon } from '../components/icons/XIcon';

const practiceQuestions = [
    {
        question: "In React, what is the primary purpose of `useEffect`?",
        options: [
            "To perform side effects in function components",
            "To declare a state variable",
            "To create a context for state sharing",
            "To render a component conditionally"
        ],
        correctAnswer: "To perform side effects in function components",
        explanation: "The `useEffect` Hook lets you perform side effects in function components. This includes data fetching, setting up a subscription, and manually changing the DOM."
    },
    {
        question: "Which of the following is NOT a valid way to style a React component?",
        options: [
            "Using CSS Modules",
            "Using inline styles with a JavaScript object",
            "Using the `<style>` tag directly inside the component's JSX",
            "Using a CSS-in-JS library like Styled Components"
        ],
        correctAnswer: "Using the `<style>` tag directly inside the component's JSX",
        explanation: "While you can use inline styles, CSS Modules, and libraries, you cannot place a `<style>` tag directly in your JSX return statement as it's not a valid React element for component styling."
    },
    {
        question: "What does `React.memo()` do?",
        options: [
            "It memoizes the entire component tree",
            "It's a Hook for memoizing functions",
            "It's a higher-order component that prevents re-rendering if props haven't changed",
            "It stores component state in memory"
        ],
        correctAnswer: "It's a higher-order component that prevents re-rendering if props haven't changed",
        explanation: "`React.memo()` is a higher-order component that memoizes the rendered output of the wrapped component, preventing re-renders if the props are shallowly equal."
    },
    {
        question: "What is the correct way to pass a value from a parent to a child component?",
        options: [
            "Via state",
            "Via props",
            "Via context",
            "Via refs"
        ],
        correctAnswer: "Via props",
        explanation: "Props (short for properties) are the primary mechanism for passing read-only data from parent to child components in React."
    }
];


const Practice: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const currentQuestion = practiceQuestions[currentQuestionIndex];
    const totalQuestions = practiceQuestions.length;

    const handleOptionSelect = (option: string) => {
        if (!isSubmitted) {
            setSelectedOption(option);
        }
    };

    const handleSubmit = () => {
        if (selectedOption) {
            setIsSubmitted(true);
        }
    };

    const handleNextOrSkip = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsSubmitted(false);
        } else {
            // End of quiz, navigate to dashboard or a results page
            navigate('/dashboard');
        }
    };

    const getOptionClasses = (option: string) => {
        if (!isSubmitted) {
            return `border-slate-300 ${selectedOption === option ? 'bg-primary-600 border-primary-500 ring-2 ring-primary-500 text-white' : 'hover:bg-slate-100'}`;
        }

        const isCorrect = option === currentQuestion.correctAnswer;
        const isSelected = option === selectedOption;

        if (isCorrect) {
            return 'border-green-500 bg-green-500/10 text-green-800';
        }
        if (isSelected && !isCorrect) {
            return 'border-red-500 bg-red-500/10 text-red-800';
        }
        return 'border-slate-300 bg-white text-slate-500';
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                 <h1 className="text-3xl font-bold text-slate-900">Technical Interview</h1>
                 <button 
                    onClick={() => navigate('/practice-plan')}
                    className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-4 py-2 rounded-lg transition-colors"
                >
                    <BackIcon className="w-4 h-4 mr-2" />
                    Back to Plan
                </button>
            </div>
             {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-500 mb-1">
                    <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                    <span>Progress</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div 
                        className="bg-primary-600 h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}>
                    </div>
                </div>
            </div>

            <Card>
                <p className="text-xl font-semibold text-slate-800 mb-6">{currentQuestion.question}</p>
                <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${getOptionClasses(option)}`}
                        >
                            <span className={`w-5 h-5 flex-shrink-0 rounded-full border-2 mr-4 ${selectedOption === option ? 'border-primary-400' : 'border-slate-400'}`}></span>
                            <span className="flex-grow font-medium">{option}</span>
                             {isSubmitted && option === currentQuestion.correctAnswer && <CheckIcon className="w-6 h-6 text-green-500" />}
                             {isSubmitted && selectedOption === option && option !== currentQuestion.correctAnswer && <XIcon className="w-6 h-6 text-red-500" />}
                        </div>
                    ))}
                </div>
            </Card>

            {isSubmitted && (
                 <Card className="mt-6 bg-indigo-50 border-primary-500/20">
                    <h3 className="font-bold text-lg text-primary-700 mb-2">Explanation</h3>
                    <p className="text-slate-600">{currentQuestion.explanation}</p>
                 </Card>
            )}

            <div className="mt-8 flex items-center justify-end space-x-4">
                {!isSubmitted ? (
                    <>
                        <button 
                            onClick={handleNextOrSkip}
                            className="bg-white hover:bg-slate-100 text-slate-600 font-bold py-3 px-6 rounded-lg transition-colors border border-slate-300">
                            Skip
                        </button>
                        <button 
                            onClick={handleSubmit}
                            disabled={!selectedOption}
                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed">
                            Submit
                        </button>
                    </>
                ) : (
                    <button 
                        onClick={handleNextOrSkip}
                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Session'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Practice;