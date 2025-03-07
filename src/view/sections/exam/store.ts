import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Question {
  id: string;
  question: string;
  choices: {
    id: string;
    text: string;
  }[];
}

interface ExamState {
  examId: string | null;
  questions: Question[];
  loading: boolean;
  currentQuestionIndex: number;
  answers: Record<string, string>;
  timeLeft: number;
  setExamId: (id: string | null) => void;
  setQuestions: (questions: Question[]) => void;
  setLoading: (loading: boolean) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setAnswer: (questionId: string, answerId: string) => void;
  updateTimeLeft: (callback: (prev: number) => number) => void;
  resetExam: () => void;
}

const initialState = {
  examId: null,
  questions: [],
  loading: true,
  currentQuestionIndex: 0,
  answers: {},
  timeLeft: 10 * 60, // 10 minutes in seconds
};

export const useExamStore = create<ExamState>()(
  persist(
    (set) => ({
      ...initialState,
      setExamId: (examId) => set({ examId }),
      setQuestions: (questions) => set({ questions }),
      setLoading: (loading) => set({ loading }),
      setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
      setAnswer: (questionId, answerId) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: answerId,
          },
        })),
      updateTimeLeft: (callback) => set((state) => ({ timeLeft: callback(state.timeLeft) })),
      resetExam: () => {
        // Clear the persisted storage
        localStorage.removeItem('exam-storage');
        // Reset the state
        set(initialState);
      },
    }),
    {
      name: 'exam-storage',
      partialize: (state) => ({
        examId: state.examId,
        questions: state.questions,
        currentQuestionIndex: state.currentQuestionIndex,
        answers: state.answers,
        timeLeft: state.timeLeft,
      }),
    }
  )
);
