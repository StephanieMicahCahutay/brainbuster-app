import React, { useState } from 'react';
import {
  Box, Button, FormControl, FormControlLabel,
  FormLabel, Radio, RadioGroup, Typography, Stack, CssBaseline
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { QuizComponentProps, Question } from '../types';

const QuizComponent = ({ questions, onQuizComplete }: QuizComponentProps) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selected = event.target.value;
        setSelectedOption(selected);

        const question = questions[currentQuestion];
        const isCorrect = selected === question.correct_answer;

        if (isCorrect) {
            setScore(prevScore => prevScore + 1);  // Increment score if correct
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(''); // Reset selected option
        } else {
            const incorrectAnswers = questions.length - score;
            onQuizComplete(score, questions.length, score, incorrectAnswers);
            alert(`You have completed the quiz! Your score: ${score}/${questions.length}`);
            navigate('/dashboard');
        }
    };

    if (!questions.length) {
        return <Typography>Loading questions or no questions available...</Typography>;
    }

    const question = questions[currentQuestion]; // Get the current question
    const options = [
        { optionText: question.option_a, value: 'A' },
        { optionText: question.option_b, value: 'B' },
        { optionText: question.option_c, value: 'C' },
        { optionText: question.option_d, value: 'D' }
    ];

    return (
        <Box sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
            <CssBaseline />
            <Typography variant="h6">{`Question ${currentQuestion + 1}: ${question.question_text}`}</Typography>
            <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Options</FormLabel>
                <RadioGroup name="quiz-options" value={selectedOption} onChange={handleOptionChange}>
                    {options.map((option, index) => (
                        <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.optionText} />
                    ))}
                </RadioGroup>
            </FormControl>
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button variant="contained" onClick={handleNext}>
                    {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                </Button>
            </Stack>
        </Box>
    );
};

export default QuizComponent;
