
import React, { useState } from 'react';
import { toast } from 'sonner';
import { surveyQuestions } from '@/data/surveyQuestions';
import SurveyProgress from '@/components/survey/SurveyProgress';
import QuestionOptions from '@/components/survey/QuestionOptions';
import SurveyNavigation from '@/components/survey/SurveyNavigation';
import SurveyContactForm from '@/components/survey/SurveyContactForm';
import { submitFormToGoogleApps } from '@/services/formSubmissionService';

const SurveySection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [customAnswers, setCustomAnswers] = useState<Record<string, string>>({});
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setAnswers({
      ...answers,
      [surveyQuestions[currentQuestion].id]: answer
    });
  };

  const handleCustomAnswerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomAnswers({
      ...customAnswers,
      [surveyQuestions[currentQuestion].id]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowForm(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare survey data
      const surveyData = Object.entries(answers).map(([questionId, answer]) => {
        const question = surveyQuestions.find(q => q.id === questionId)?.question || '';
        let finalAnswer = answer;
        
        // If the answer is "Другое", use the custom answer
        if (answer === 'Другое' && customAnswers[questionId]) {
          finalAnswer = `Другое: ${customAnswers[questionId]}`;
        }
        
        return `${question}: ${finalAnswer}`;
      }).join('\n');
      
      // Prepare form data
      const formPayload = {
        name: formData.name,
        phone: formData.phone,
        message: `${surveyData}\nКомментарий: ${formData.comment}`,
        formType: 'Опрос для расчёта стоимости'
      };
      
      // Send to Google Apps Script
      await submitFormToGoogleApps(formPayload);
      
      toast.success('Ваша заявка успешно отправлена! Мы скоро свяжемся с вами.');
      setAnswers({});
      setCustomAnswers({});
      setFormData({ name: '', phone: '', comment: '' });
      setCurrentQuestion(0);
      setShowForm(false);
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      toast.error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQuestionData = surveyQuestions[currentQuestion];
  const selectedAnswer = answers[currentQuestionData.id] || '';
  const customValue = customAnswers[currentQuestionData.id] || '';
  const isAnswered = !!selectedAnswer && (selectedAnswer !== 'Другое' || !!customValue);

  return (
    <section id="survey" className="py-20 bg-white">
      <div className="section-container">
        <div className="section-title-container">
          <h2 className="section-title">Опрос для расчёта стоимости</h2>
          <div className="section-title-line"></div>
        </div>
        
        <div className="max-w-2xl mx-auto mt-8">
          {!showForm ? (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <SurveyProgress 
                currentQuestion={currentQuestion}
                totalQuestions={surveyQuestions.length}
              />
              
              <QuestionOptions
                questionData={currentQuestionData}
                selectedAnswer={selectedAnswer}
                customValue={customValue}
                onAnswerSelect={handleAnswerSelect}
                onCustomAnswerChange={handleCustomAnswerChange}
              />
              
              <SurveyNavigation
                isFirst={currentQuestion === 0}
                isLast={currentQuestion === surveyQuestions.length - 1}
                isAnswered={isAnswered}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>
          ) : (
            <SurveyContactForm
              formData={formData}
              isSubmitting={isSubmitting}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SurveySection;
