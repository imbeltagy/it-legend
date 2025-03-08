'use client';

import { cn } from '@/lib/utils/style';
import { Iconify } from '@/view/components/iconify';
import { useRef, useState, useEffect } from 'react';
import useCoursePopupStore from '@/lib/context/course-popup';

export default function PDFPage() {
  const { pdfUrl, setPdfUrl } = useCoursePopupStore();
  const [isLoading, setIsLoading] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.onload = () => setIsLoading(false);
    }
  }, [pdfUrl]);

  if (!pdfUrl) return null;

  const skeleton = <div className="h-full w-full animate-pulse rounded-lg bg-gray-200" />;

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

        <iframe
          ref={iframeRef}
          src={pdfUrl}
          className={cn('h-full w-full', isLoading && 'hidden')}
          width="640"
          height="480"
        />
        {isLoading && skeleton}
      </div>
    </div>
  );
}
