import React, { useEffect, useState } from 'react';
import QuizComponent from './QuizComponent';
import { fetchQuestions } from '../services/quizService';
import { Question } from '../types';
import { useStore } from '../store/useStore';

const AssessmentPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const addScore = useStore((state: { addScore: any; }) => state.addScore);

  useEffect(() => {
    const loadQuestions = async () => {
      const fetchedQuestions = await fetchQuestions();
      if (fetchedQuestions) {
        setQuestions(fetchedQuestions);
      }
    };

    loadQuestions();
  }, []);

  const handleQuizCompletion = (score: number, totalPoints: number, correctAnswers: number, incorrectAnswers: number) => {
    const newScore = {
      score,
      totalPoints,
      correctAnswers,
      incorrectAnswers,
      date: new Date().toLocaleDateString()
    };
    addScore(newScore);
  };

  return (
    <div>
      <QuizComponent questions={questions} onQuizComplete={handleQuizCompletion} />
    </div>
  );
};

export default AssessmentPage;
