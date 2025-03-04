import { create } from 'zustand';

type Store = {
  open: boolean;
  setOpen: (open: boolean) => void;
  pdfUrl: string | null;
  setPdfUrl: (pdfUrl: string | null) => void;
};

const useCoursePopupStore = create<Store>()((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  pdfUrl: null,
  setPdfUrl: (pdfUrl) => set({ pdfUrl }),
}));

export default useCoursePopupStore;
