import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50 text-slate-800 p-4">
            <h1 className="text-6xl font-bold text-primary-500">404</h1>
            <h2 className="text-3xl font-semibold text-slate-800 mt-4">Page Not Found</h2>
            <p className="text-slate-500 mt-2">Sorry, the page you are looking for does not exist.</p>
            <Link 
                to="/dashboard" 
                className="mt-8 bg-primary-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
            >
                Go to Dashboard
            </Link>
        </div>
    );
};

export default NotFound;