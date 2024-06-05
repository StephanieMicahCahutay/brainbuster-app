import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizComponent from './QuizComponent';
import { fetchQuestions } from '../services/quizService';
import useStore from '../store/useStore';

const AssessmentPage = () => {
  const questions = useStore((state) => state.questions);
  const currentQuestion = useStore((state) => state.currentQuestion);
  const setCurrentQuestion = useStore((state) => state.setCurrentQuestion);
  const setQuestions = useStore((state) => state.setQuestions);
  const addScore = useStore((state) => state.addScore);
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestions = async () => {
      const fetchedQuestions = await fetchQuestions();
      if (fetchedQuestions) {
        setQuestions(fetchedQuestions);
      }
    };

    // Reset the current question to 0 when the component mounts
    setCurrentQuestion(0);
    loadQuestions();
  }, [setQuestions, setCurrentQuestion]);

  const handleQuizCompletion = (
    score: number,
    totalPoints: number,
    correctAnswers: number,
    incorrectAnswers: number,
  ) => {
    const userId = useStore.getState().user?.id || ''; // Assuming you have the user ID stored in Zustand
    const newScore = {
      score,
      totalPoints,
      correctAnswers,
      incorrectAnswers,
      date: new Date().toLocaleDateString(),
      userId,
    };
    addScore(newScore);

    alert(`You have completed the quiz! Your score: ${score}/${totalPoints}`);
    navigate('/dashboard');
  };

  return (
    <div>
      <QuizComponent
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        onQuizComplete={handleQuizCompletion}
      />
    </div>
  );
};

export default AssessmentPage;
