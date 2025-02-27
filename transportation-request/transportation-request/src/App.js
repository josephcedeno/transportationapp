import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import TeamPage from './components/TeamPage';
import ParentDashboard from './components/ParentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
