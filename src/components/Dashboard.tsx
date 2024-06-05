import React from 'react';
import MainNavbar from './MainNavbar';
import ScoresTable from './ScoresTable';
import { Score } from '../types';
import { Box, Typography, Button, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        <Typography variant="h4" gutterBottom>
          Welcome to Brain Buster
        </Typography>
        <Typography paragraph>
          Challenge your knowledge, explore new topics, and master the subjects
          with our interactive assessment.
        </Typography>
        <Button
          variant="contained"
          onClick={startAssessment}
          sx={{ marginBottom: 2, alignItems: 'center' }}
        >
          Start Assessment
        </Button>
        <ScoresTable recentScores={scores} />
      </Box>
    </div>
  );
};

export default Dashboard;
