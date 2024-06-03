import React from 'react';
import { Button, Box, Typography, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainNavbar from './MainNavbar';
import ScoresTable from './ScoresTable';

export interface Score {
  score: number;
  totalPoints: number;
  correctAnswers: number;
  incorrectAnswers: number;
  date: string;
}

interface DashboardProps {
  scores: Score[];
}

const Dashboard: React.FC<DashboardProps> = ({ scores }) => {
  const navigate = useNavigate();

  const startAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div>
      <MainNavbar />
      <Box sx={{ margin: 4 }}>
        <CssBaseline />
        <Typography variant="h4" gutterBottom>Welcome to Brain Buster</Typography>
        <Typography paragraph>
          Challenge your knowledge, explore new topics, and master the subjects with our interactive assessment.
        </Typography>
        <Typography paragraph>
          This assessment is designed to test your knowledge on the key concepts from the first three weeks of our course. It includes a variety of question types to evaluate your understanding and application of these topics.
        </Typography>
        <Button variant="contained" onClick={startAssessment} sx={{ marginBottom: 2, alignItems: 'center' }}>Start Assessment</Button>
        <ScoresTable recentScores={scores} />
      </Box>
    </div>
  );
};

export default Dashboard;
