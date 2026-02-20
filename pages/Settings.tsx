import React, { useState } from 'react';
import Card from '../components/Card';

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="space-y-6">
                        <div className="flex items-center space-x-6">
                            <img src="https://picsum.photos/seed/user/80/80" alt="User" className="w-20 h-20 rounded-full"/>
                            <div>
                                <button className="bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-700 text-sm">Change Photo</button>
                                <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. 1MB max.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Full Name</label>
                                <input type="text" defaultValue="Jane Doe" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                           </div>
                           <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Email Address</label>
                                <input type="email" defaultValue="jane.doe@example.com" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                           </div>
                        </div>
                    </div>
                );
            case 'account':
                return <div className="text-slate-500">Account Settings Content</div>;
            case 'notifications':
                return <div className="text-slate-500">Notifications Settings Content</div>;
            default:
                return null;
        }
    }

    const tabClasses = (tabName: string) => 
        `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === tabName 
            ? 'bg-primary-600 text-white' 
            : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
        }`;

    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
            <p className="text-slate-500 mb-8">Manage your account settings and preferences.</p>

            <div className="flex space-x-2 border-b border-slate-200 mb-6">
                <button onClick={() => setActiveTab('profile')} className={tabClasses('profile')}>Profile</button>
                <button onClick={() => setActiveTab('account')} className={tabClasses('account')}>Account</button>
                <button onClick={() => setActiveTab('notifications')} className={tabClasses('notifications')}>Notifications</button>
            </div>
            
            <Card>
                {renderContent()}
                <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
                    <button className="bg-white text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-100 border border-slate-300 mr-3">Cancel</button>
                    <button className="bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-700">Save Changes</button>
                </div>
            </Card>
        </div>
    );
};

export default Settings;