'use client';

import { useEffect } from 'react';
import { Iconify } from '@/view/components/iconify';
import { getQuestions } from '@/lib/actions/course-actions';

import { useExamStore } from '../store';
import ExamHeader from './components/exam-header';
import QuestionIndices from './components/question-indices';
import QuestionsCarousel from './components/questions-carousel';

interface ExamViewProps {
  examId: string;
  onClose: () => void;
}

export default function ExamView({ examId, onClose }: ExamViewProps) {
  const {
    questions,
    loading,
    answers,
    examId: storedExamId,
    setQuestions,
    setLoading,
    setExamId,
    updateTimeLeft,
    resetExam,
  } = useExamStore();

  useEffect(() => {
    // If we have a stored exam and it matches the current examId, we don't need to load questions
    if (storedExamId === examId && questions.length > 0) {
      setLoading(false);
      return;
    }

    // If we have a different exam or no stored exam, load the questions
    async function loadQuestions() {
      if (examId) {
        try {
          const data = await getQuestions(examId);
          setQuestions(data);
          setExamId(examId);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Failed to load questions:', error);
        } finally {
          setLoading(false);
        }
      }
    }

    loadQuestions();
  }, [examId, storedExamId, questions.length, setQuestions, setLoading, setExamId]);

  useEffect(() => {
    if (!loading) {
      const timer = setInterval(() => {
        updateTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, updateTimeLeft]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4361ee]">
        <div className="flex items-center gap-2 rounded-lg bg-white p-6">
          <Iconify icon="eos-icons:loading" className="text-2xl" />
          <span>Loading questions...</span>
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) return;

    // Handle submit logic here
    // eslint-disable-next-line no-console
    console.log('Submitted answers:', answers);

    // Clear the exam state and local storage
    resetExam();

    // Close the exam view
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#4361ee]">
      <div className="mx-auto h-full max-w-2xl px-6 py-4">
        <ExamHeader onClose={onClose} />
        <QuestionIndices questions={questions} />
        <QuestionsCarousel questions={questions} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
