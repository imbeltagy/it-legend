import { create } from 'zustand';

type Store = {
  pdfUrl: string | null;
  setPdfUrl: (pdfUrl: string | null) => void;
  examId: string | null;
  setExamId: (examId: string | null) => void;
  ask: boolean;
  setAsk: (ask: boolean) => void;
  leaderboard: boolean;
  setLeaderboard: (leaderboard: boolean) => void;
};

const useCoursePopupStore = create<Store>()((set) => ({
  pdfUrl: null,
  setPdfUrl: (pdfUrl) => set({ pdfUrl }),
  examId: null,
  setExamId: (examId) => set({ examId }),
  ask: false,
  setAsk: (ask) => set({ ask }),
  leaderboard: false,
  setLeaderboard: (leaderboard) => set({ leaderboard }),
}));

export default useCoursePopupStore;
