import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogoIcon } from '../components/icons/LogoIcon';
import { GoogleIcon } from '../components/icons/GoogleIcon';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate successful login
        navigate('/upload-resume');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
            <div className="flex items-center mb-8">
                <LogoIcon className="h-10 w-10 text-primary-500" />
                <h1 className="text-4xl font-bold text-slate-800 ml-3">InterviewAI</h1>
            </div>
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 text-center mb-1">Welcome Back</h2>
                <p className="text-slate-500 text-center mb-6">Log in to continue your practice.</p>
                <form onSubmit={handleLogin} className="space-y-6">
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
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="password"className="block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg"
                    >
                        Log In
                    </button>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-slate-500">Or continue with</span>
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
                    New to InterviewAI?{' '}
                    <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;