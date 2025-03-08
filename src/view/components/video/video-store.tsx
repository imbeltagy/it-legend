import { create } from 'zustand';

interface VideoStore {
  isWide: boolean;
  toggleWide: () => void;
}

const useVideoStore = create<VideoStore>((set) => ({
  isWide: false,
  toggleWide: () => set((state) => ({ isWide: !state.isWide })),
}));

export default useVideoStore;
