export interface Option {
    optionText: string;
    isCorrect: boolean;
}

export interface Question {
    question_text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
    id: number;
}

export interface QuizComponentProps {
    questions: Question[];
    onQuizComplete: (score: number, totalPoints: number, correctAnswers: number, incorrectAnswers: number) => void;
}


