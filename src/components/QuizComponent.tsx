import React from 'react';
import {
  Box, Button, FormControl, FormControlLabel,
  FormLabel, Radio, RadioGroup, Typography, Stack, CssBaseline, Card, CardContent
} from '@mui/material';
import { QuizComponentProps } from '../types';

const QuizComponent: React.FC<QuizComponentProps> = ({
  questions,
  currentQuestion,
  setCurrentQuestion,
  onQuizComplete
}) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');
  const [score, setScore] = React.useState<number>(0);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    setSelectedOption(selected);

    const question = questions[currentQuestion];
    const isCorrect = selected === question.correct_answer;

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      const incorrectAnswers = questions.length - score;
      onQuizComplete(score, questions.length, score, incorrectAnswers);
    }
  };

  if (!questions.length) {
    return <Typography>Loading questions or no questions available...</Typography>;
  }

  const question = questions[currentQuestion];
  const options = [
    { optionText: question.option_a, value: 'A' },
    { optionText: question.option_b, value: 'B' },
    { optionText: question.option_c, value: 'C' },
    { optionText: question.option_d, value: 'D' }
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <CssBaseline />
      <Card sx={{ backgroundColor: '#FE819F' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>{`Question ${currentQuestion + 1}: ${question.question_text}`}</Typography>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Options</FormLabel>
            <RadioGroup name="quiz-options" value={selectedOption} onChange={handleOptionChange}>
              {options.map((option, index) => (
                <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.optionText} />
              ))}
            </RadioGroup>
          </FormControl>
          <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: '#52B0FF', mb: 2 }}>
              {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuizComponent;
