import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogoIcon } from '../components/icons/LogoIcon';
import { GoogleIcon } from '../components/icons/GoogleIcon';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

const SignUp: React.FC = () => {
    const navigate = useNavigate();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate successful sign-up
        navigate('/upload-resume');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
            <div className="flex items-center mb-8">
                <LogoIcon className="h-10 w-10 text-primary-500" />
                <h1 className="text-4xl font-bold text-slate-800 ml-3">InterviewAI</h1>
            </div>
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 text-center mb-1">Create an Account</h2>
                <p className="text-slate-500 text-center mb-6">Start your AI-powered interview practice today.</p>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            placeholder="Jane Doe"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-slate-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                     <div>
                        <label htmlFor="confirm-password"className="block text-sm font-medium text-slate-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg !mt-6"
                    >
                        Create Account
                    </button>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-slate-500">Or sign up with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                     <button className="w-full flex items-center justify-center py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-lg transition-colors border border-slate-300">
                        <GoogleIcon className="w-5 h-5 mr-2" />
                        Google
                    </button>
                    <button className="w-full flex items-center justify-center py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-lg transition-colors border border-slate-300">
                        <LinkedInIcon className="w-5 h-5 mr-2" />
                        LinkedIn
                    </button>
                </div>

                <p className="text-sm text-slate-500 text-center mt-8">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;