import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import AssessmentPage from './components/AssessmentPage';
import { useStore } from './store/useStore';

const App = () => {
  const scores = useStore((state: { scores: any; }) => state.scores);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Dashboard scores={scores} />} />
        <Route path="/assessment" element={<AssessmentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
