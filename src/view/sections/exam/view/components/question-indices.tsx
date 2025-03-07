import { useExamStore } from '../../store';

interface Question {
  id: string;
  question: string;
  choices: {
    id: string;
    text: string;
  }[];
}

interface QuestionIndicesProps {
  questions: Question[];
}

export default function QuestionIndices({ questions }: QuestionIndicesProps) {
  const { currentQuestionIndex, setCurrentQuestionIndex } = useExamStore();

  return (
    <div className="mb-8 flex items-center justify-center gap-4">
      {questions.map((_, index) => (
        <div
          key={index}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-white text-sm font-medium transition-colors ${
            index === currentQuestionIndex ? 'bg-white text-[#4361ee]' : 'text-white'
          }`}
          onClick={() => setCurrentQuestionIndex(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
