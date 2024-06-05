import { Button, Box, Typography, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainNavbar from './MainNavbar';
import ScoresTable from './ScoresTable';
import useStore from '../store/useStore';
import logo from '../assets/images/BB-image.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const scores = useStore((state) => state.scores);
  const user = useStore((state) => state.user);

  const startAssessment = () => {
    navigate('/assessment');
  };

  const userScores = scores.filter((score) => score.userId === user?.id);

  return (
    <div>
      <MainNavbar />
      <Box
        sx={{
          margin: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <CssBaseline />
        <Typography variant="h4" gutterBottom>Welcome to Brain Buster</Typography>
        <img src={logo} alt="Brain Buster Logo" style={{ height: '150px', marginBottom: '10px', }} />
        <Typography paragraph>
          Challenge your knowledge, explore new topics, and master the subjects with our interactive assessment.
        </Typography>
        <Typography paragraph>
          This assessment is designed to test your knowledge of React. It includes a variety of question types to evaluate your understanding and application of React concepts.
        </Typography>
        <Button variant="contained" onClick={startAssessment} sx={{ marginBottom: 2, alignItems: 'center', background: '#52B0FF'}}>Start Assessment</Button>
        <ScoresTable recentScores={userScores} />
      </Box>
    </div>
  );
};

export default Dashboard;
