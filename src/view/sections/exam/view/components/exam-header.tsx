import { Iconify } from '@/view/components/iconify';

import { useExamStore } from '../../store';

interface ExamHeaderProps {
  onClose: () => void;
}

export default function ExamHeader({ onClose }: ExamHeaderProps) {
  const { timeLeft } = useExamStore();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative mb-6 flex items-start">
      <button
        onClick={onClose}
        className="cursor-pointer rounded-full p-2 text-white transition-colors hover:bg-white/10"
      >
        <Iconify icon="ph:arrow-left-bold" className="text-2xl rtl:rotate-180" />
      </button>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-2 rounded-md bg-[#ffd60a] px-4 py-1.5 font-medium shadow-lg">
          <Iconify icon="ph:clock-bold" className="text-xl" />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>
    </div>
  );
}
