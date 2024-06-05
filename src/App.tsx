import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import AssessmentPage from './components/AssessmentPage';
import useStore from './store/useStore';
import PrivateRoute from './components/PrivateRoute';
import { Score } from './types';

const App = () => {
  const scores: Score[] = useStore((state) => state.scores);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              path="/dashboard"
              element={<Dashboard scores={scores} />}
            />
          }
        />
        <Route
          path="/assessment"
          element={
            <PrivateRoute path="/assessment" element={<AssessmentPage />} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
