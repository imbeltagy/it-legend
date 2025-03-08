'use client';

import { useLocale } from 'next-intl';
import { Iconify } from '@/view/components/iconify';
import useCoursePopupStore from '@/lib/context/course-popup';

export default function AskQuestionPage() {
  const { ask, setAsk } = useCoursePopupStore();
  const locale = useLocale();

  if (!ask) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => setAsk(false)}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <h2 className="text-info mb-6 text-center text-xl font-bold">
          {locale === 'ar' ? 'اسأل سؤالك' : 'Ask a Question'}
        </h2>

        {/* Question Form */}
        <div className="space-y-4">
          <textarea
            className="bg-default block w-full rounded-lg border p-4 py-6 focus:outline-none"
            rows={4}
            placeholder={locale === 'ar' ? 'اكتب سؤالك هنا...' : 'Write your question here...'}
          />
          <button className="button button-success flex w-full justify-center">
            {locale === 'ar' ? 'إرسال' : 'Submit'}
            <Iconify icon="tabler:arrow-right" className="text-xl rtl:rotate-180" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setAsk(false)}
          className="absolute -top-2 -right-2 cursor-pointer rounded-full bg-white p-1 shadow-lg hover:bg-neutral-100"
        >
          <Iconify icon="ph:x-bold" className="text-xl" />
        </button>
      </div>
    </div>
  );
}
