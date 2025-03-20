
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { SurveyQuestion } from '@/data/surveyQuestions';

interface QuestionOptionsProps {
  questionData: SurveyQuestion;
  selectedAnswer: string;
  customValue: string;
  onAnswerSelect: (answer: string) => void;
  onCustomAnswerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuestionOptions: React.FC<QuestionOptionsProps> = ({
  questionData,
  selectedAnswer,
  customValue,
  onAnswerSelect,
  onCustomAnswerChange
}) => {
  const needsCustomInput = selectedAnswer === 'Другое';

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{questionData.question}</h3>
      
      <RadioGroup
        value={selectedAnswer}
        onValueChange={onAnswerSelect}
        className="space-y-3"
      >
        {questionData.options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`${questionData.id}-${option}`} />
            <Label htmlFor={`${questionData.id}-${option}`} className="cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      
      {needsCustomInput && (
        <div className="mt-4">
          <Label htmlFor={`custom-${questionData.id}`} className="block mb-2">
            Пожалуйста, уточните:
          </Label>
          <Input
            id={`custom-${questionData.id}`}
            value={customValue}
            onChange={onCustomAnswerChange}
            placeholder="Введите ваш вариант"
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default QuestionOptions;
