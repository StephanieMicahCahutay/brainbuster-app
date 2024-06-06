import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Score } from '../types';

interface ScoresTableProps {
  recentScores: Score[];
}

const ScoresTable: React.FC<ScoresTableProps> = ({ recentScores }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Total Score</TableCell>
            <TableCell align="right">Total Points</TableCell>
            <TableCell align="right">Correct Answers</TableCell>
            <TableCell align="right">Incorrect Answers</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentScores.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">{row.score}</TableCell>
              <TableCell align="right">{row.totalPoints}</TableCell>
              <TableCell align="right">{row.correctAnswers}</TableCell>
              <TableCell align="right">{row.incorrectAnswers}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoresTable;