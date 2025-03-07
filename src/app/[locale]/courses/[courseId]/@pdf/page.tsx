'use client';

import { Iconify } from '@/view/components/iconify';
import useCoursePopupStore from '@/lib/context/course-popup';

export default function PDFPage() {
  const { pdfUrl, setPdfUrl } = useCoursePopupStore();

  if (!pdfUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => setPdfUrl(null)}
    >
      <div
        className="relative mx-4 h-[90vh] w-full max-w-3xl rounded-lg bg-white p-4 md:h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setPdfUrl(null)}
          className="absolute -top-2 -right-2 cursor-pointer rounded-full bg-white p-1 shadow-lg hover:bg-neutral-100"
        >
          <Iconify icon="ph:x-bold" className="text-xl" />
        </button>

        <iframe src={pdfUrl} className="h-full w-full" width="640" height="480" />
      </div>
    </div>
  );
}
