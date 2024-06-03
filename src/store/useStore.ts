import { create } from 'zustand';

export interface Score {
  score: number;
  totalPoints: number;
  correctAnswers: number;
  incorrectAnswers: number;
  date: string;
}

interface StoreState {
  scores: Score[];
  addScore: (score: Score) => void;
}

export const useStore = create<StoreState>((set) => ({
  scores: [],
  addScore: (score) => set((state) => ({ scores: [...state.scores, score] })),
}));
