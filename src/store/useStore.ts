import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Score } from '../types'; 

interface State {
  scores: Score[];
  user: { id: string; email: string } | null;
  questions: any[];
  currentQuestion: number;
  setUser: (user: { id: string; email: string }) => void;
  addScore: (score: Score) => void;
  setQuestions: (questions: any[]) => void;
  setCurrentQuestion: (currentQuestion: number) => void;
}

const useStore = create<State>()(
  persist(
    (set) => ({
      scores: [],
      user: null,
      questions: [],
      currentQuestion: 0,
      setUser: (user) => set({ user }),
      addScore: (score) =>
        set((state) => ({ scores: [...state.scores, score] })),
      setQuestions: (questions) => set({ questions }),
      setCurrentQuestion: (currentQuestion) => set({ currentQuestion }),
    }),
    {
      name: 'brain-buster-storage', 
    }
  )
);

export default useStore;