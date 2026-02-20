
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import History from './pages/History';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UploadResume from './pages/UploadResume';
import Analyzing from './pages/Analyzing';
import SkillReport from './pages/SkillReport';
import PracticePlan from './pages/PracticePlan';
import LiveInterview from './pages/LiveInterview';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/skill-report" element={<SkillReport />} />
          <Route path="/practice-plan" element={<PracticePlan />} />
          <Route path="/live-interview" element={<LiveInterview />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/analyzing" element={<Analyzing />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
