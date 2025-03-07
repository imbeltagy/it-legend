import { motion } from 'framer-motion';
import { Iconify } from '@/view/components/iconify';

import { useExamStore } from '../../store';

interface Question {
  id: string;
  question: string;
  choices: {
    id: string;
    text: string;
  }[];
}

interface QuestionsCarouselProps {
  questions: Question[];
  onSubmit: () => void;
}

export default function QuestionsCarousel({ questions, onSubmit }: QuestionsCarouselProps) {
  const { currentQuestionIndex, answers, setAnswer, setCurrentQuestionIndex } = useExamStore();

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isAnswered = Boolean(answers[questions[currentQuestionIndex]?.id]);

  const handleNext = () => {
    if (!isAnswered) return;
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="relative mx-auto max-h-[calc(100vh-200px)] min-h-[400px] overflow-y-auto">
      <motion.div
        className="flex h-full items-center justify-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = offset.x * velocity.x;
          if (swipe < -10000 && !isLastQuestion && isAnswered) {
            handleNext();
          } else if (swipe > 10000 && currentQuestionIndex > 0) {
            handlePrevious();
          }
        }}
      >
        <div className="relative h-full w-full overflow-hidden">
          <motion.div
            className="grid h-full"
            animate={{
              x: `-${currentQuestionIndex * 100}%`,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            style={{
              gridTemplateColumns: `repeat(${questions.length}, 100%)`,
              gap: '2rem',
              paddingInline: '1rem',
            }}
          >
            {questions.map((question, index) => (
              <div key={question.id} className="flex h-full w-full items-center justify-center">
                <div className="w-full rounded-3xl bg-white p-6 shadow-xl">
                  <div className="mb-6">
                    <p className="text-lg font-medium text-gray-800">
                      <span className="mr-1">{index + 1}.</span>
                      {question.question}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {question.choices.map((choice) => (
                      <button
                        key={choice.id}
                        onClick={() => setAnswer(question.id, choice.id)}
                        className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border p-3.5 shadow-sm transition-all ${
                          answers[question.id] === choice.id
                            ? 'border-[#4361ee] bg-[#4361ee] text-white'
                            : 'border-gray-100 bg-white hover:border-gray-200'
                        }`}
                      >
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded border ${
                            answers[question.id] === choice.id ? 'border-white' : 'border-gray-300'
                          }`}
                        >
                          {answers[question.id] === choice.id && (
                            <div className="h-2.5 w-2.5 rounded-sm bg-white" />
                          )}
                        </div>
                        <span className="flex-1 text-left text-base">{choice.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="pointer-events-none sticky right-0 bottom-4 left-0 flex items-center justify-between px-2">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all ${
            currentQuestionIndex === 0 ? 'opacity-50' : 'hover:bg-white/90'
          }`}
        >
          <Iconify icon="ph:arrow-left-bold" className="text-2xl text-[#4361ee] rtl:rotate-180" />
        </button>

        {isLastQuestion ? (
          <button
            onClick={onSubmit}
            disabled={!isAnswered}
            className={`pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#ffd60a] shadow-lg transition-all hover:bg-[#ffd60a]/90 ${
              !isAnswered ? 'opacity-50' : ''
            }`}
          >
            <Iconify icon="ph:check-bold" className="text-2xl text-white" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-white/90 ${
              !isAnswered ? 'opacity-50' : ''
            }`}
          >
            <Iconify
              icon="ph:arrow-right-bold"
              className="text-2xl text-[#4361ee] rtl:rotate-180"
            />
          </button>
        )}
      </div>
    </div>
  );
}
