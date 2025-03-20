
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SurveyNavigationProps {
  isFirst: boolean;
  isLast: boolean;
  isAnswered: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const SurveyNavigation: React.FC<SurveyNavigationProps> = ({
  isFirst,
  isLast,
  isAnswered,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex justify-between mt-8">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={isFirst}
        className="flex items-center"
      >
        <ChevronLeft className="mr-1" size={16} />
        Назад
      </Button>
      
      <Button
        onClick={onNext}
        disabled={!isAnswered}
        className="flex items-center"
      >
        {!isLast ? (
          <>
            Далее
            <ChevronRight className="ml-1" size={16} />
          </>
        ) : (
          'Завершить'
        )}
      </Button>
    </div>
  );
};

export default SurveyNavigation;
