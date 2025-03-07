import { create } from 'zustand';

type Store = {
  pdfUrl: string | null;
  setPdfUrl: (pdfUrl: string | null) => void;
  examId: string | null;
  setExamId: (examId: string | null) => void;
};

const useCoursePopupStore = create<Store>()((set) => ({
  pdfUrl: null,
  setPdfUrl: (pdfUrl) => set({ pdfUrl }),
  examId: null,
  setExamId: (examId) => set({ examId }),
}));

export default useCoursePopupStore;
