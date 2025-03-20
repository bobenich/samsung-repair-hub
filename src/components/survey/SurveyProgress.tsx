
import React from 'react';

interface SurveyProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

const SurveyProgress: React.FC<SurveyProgressProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="mb-6">
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-right text-sm text-gray-500 mt-1">
        Вопрос {currentQuestion + 1} из {totalQuestions}
      </div>
    </div>
  );
};

export default SurveyProgress;
