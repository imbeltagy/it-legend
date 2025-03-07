'use client';

import ExamView from '@/view/sections/exam/view';
import useCoursePopupStore from '@/lib/context/course-popup';

export default function Page() {
  const { examId, setExamId } = useCoursePopupStore();

  if (!examId) return null;

  return (
    <ExamView
      examId={examId}
      onClose={() => {
        setExamId(null);
      }}
    />
  );
}
