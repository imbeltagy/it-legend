'use client';

import { useLocale } from 'next-intl';
import { Iconify } from '@/view/components/iconify';
import useCoursePopupStore from '@/lib/context/course-popup';

export default function LeaderboardPage() {
  const { leaderboard, setLeaderboard } = useCoursePopupStore();
  const locale = useLocale();

  if (!leaderboard) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => setLeaderboard(false)}
    >
      <div
        className="relative mx-4 grid max-h-[90vh] w-full max-w-md rounded-lg bg-white p-6"
        style={{ gridTemplateRows: 'auto auto 1fr' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <h1 className="text-info mb-2 text-center text-xl font-semibold">Course Name Shown Here</h1>

        <h2 className="text-info mb-6 text-center text-xl font-bold">Leaderboard</h2>

        <div className="overflow-y-auto">
          {/* Performance Message */}
          <div className="mb-6 flex items-center rounded-lg bg-[#F5F9FA] p-4 text-right">
            <span className="text-5xl">💪</span>
            <p className="text-info text-lg leading-relaxed font-semibold">
              {locale === 'ar'
                ? 'عظيم يا صديقي.. أداءك في الكورس ده أفضل من ٦٠٪ من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا'
                : 'Great job, friend! Your performance in this course is better than 60% of other students. I want to see your name in the leaderboard here'}
            </p>
          </div>

          {/* Leaderboard Slots */}
          <div className="space-y-4 rounded-3xl bg-[#F5F9FA] p-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="h-16 rounded-lg bg-[#fff] shadow-xs" />
            ))}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setLeaderboard(false)}
          className="absolute -top-2 -right-2 cursor-pointer rounded-full bg-white p-1 shadow-lg hover:bg-neutral-100"
        >
          <Iconify icon="ph:x-bold" className="text-xl" />
        </button>
      </div>
    </div>
  );
}
