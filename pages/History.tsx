import React from 'react';
import Card from '../components/Card';

const interviewHistory = [
  { id: 1, role: 'Senior Frontend Engineer', date: '2024-07-20', score: 9.1, status: 'Excellent', feedback: 'View' },
  { id: 2, role: 'Product Manager', date: '2024-07-19', score: 7.5, status: 'Good', feedback: 'View' },
  { id: 3, role: 'UX/UI Designer', date: '2024-07-17', score: 8.8, status: 'Excellent', feedback: 'View' },
  { id: 4, role: 'Data Scientist', date: '2024-07-15', score: 6.2, status: 'Needs Improvement', feedback: 'View' },
  { id: 5, role: 'Backend Developer', date: '2024-07-12', score: 8.0, status: 'Good', feedback: 'View' },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Excellent': return 'bg-green-100 text-green-700';
        case 'Good': return 'bg-yellow-100 text-yellow-700';
        case 'Needs Improvement': return 'bg-red-100 text-red-700';
        default: return 'bg-slate-100 text-slate-600';
    }
}

const History: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Interview History</h1>
            <p className="text-slate-500 mb-8">Review your past performance and track your progress over time.</p>

            <Card>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Score</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {interviewHistory.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 font-semibold">{item.score}/10</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-primary-600 hover:text-primary-800">View Feedback</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default History;