
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const questions = [
  {
    id: 'device',
    question: 'Какое устройство Samsung требует ремонта?',
    options: ['Смартфон', 'Планшет', 'Ноутбук', 'Телевизор', 'Умные часы', 'Другое']
  },
  {
    id: 'problem',
    question: 'Какая проблема возникла с вашим устройством?',
    options: ['Не включается', 'Разбит экран', 'Проблемы с батареей', 'Не работает камера', 'Медленная работа', 'Другое']
  },
  {
    id: 'time',
    question: 'Как давно возникла проблема?',
    options: ['Сегодня', 'Неделю назад', 'Месяц назад', 'Более месяца']
  },
  {
    id: 'urgency',
    question: 'Насколько срочно вам нужен ремонт?',
    options: ['Очень срочно (в течение дня)', 'В ближайшие 1-2 дня', 'В течение недели', 'Не срочно']
  },
  {
    id: 'priority',
    question: 'Что для вас наиболее важно при выборе сервиса?',
    options: ['Низкая цена', 'Быстрота ремонта', 'Гарантия на работу', 'Официальные запчасти', 'Удобное расположение сервиса', 'Отзывы и репутация']
  },
  {
    id: 'discount',
    question: 'Хотели бы вы получить скидку на первый ремонт?',
    options: ['Да, конечно!', 'Нет, спасибо']
  }
];

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
      [questions[currentQuestion].id]: answer
    });
  };

  const handleCustomAnswerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomAnswers({
      ...customAnswers,
      [questions[currentQuestion].id]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
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
      // Prepare data for submission
      const surveyData = Object.entries(answers).map(([questionId, answer]) => {
        const question = questions.find(q => q.id === questionId)?.question || '';
        let finalAnswer = answer;
        
        // If the answer is "Другое", use the custom answer
        if (answer === 'Другое' && customAnswers[questionId]) {
          finalAnswer = `Другое: ${customAnswers[questionId]}`;
        }
        
        return `${question}: ${finalAnswer}`;
      }).join('\n');
      
      const formattedData = `
        📋 Результаты опроса с сайта:
        
        ${surveyData}
        
        👤 Контактные данные:
        Имя: ${formData.name}
        Телефон: ${formData.phone}
        Комментарий: ${formData.comment}
      `;
      
      console.log('Sending to Google Sheets:', formattedData);
      console.log('Google Sheets URL:', 'https://docs.google.com/spreadsheets/d/1pE0cy6LuFHsCQqrrtZ0O7VajeTx96gEO9PA5uUSKab8/edit');
      console.log('Also sending to Telegram chat ID: @golder_creator');
      
      // Simulate successful API call
      setTimeout(() => {
        toast.success('Ваша заявка успешно отправлена! Мы скоро свяжемся с вами.');
        setAnswers({});
        setCustomAnswers({});
        setFormData({ name: '', phone: '', comment: '' });
        setCurrentQuestion(0);
        setShowForm(false);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      toast.error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      setIsSubmitting(false);
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestionData.id] || '';
  const needsCustomInput = selectedAnswer === 'Другое';
  const customValue = customAnswers[currentQuestionData.id] || '';
  const isAnswered = !!selectedAnswer && (selectedAnswer !== 'Другое' || !!customValue);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
              <div className="mb-6">
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">
                  Вопрос {currentQuestion + 1} из {questions.length}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{currentQuestionData.question}</h3>
              
              <RadioGroup
                value={selectedAnswer}
                onValueChange={handleAnswerSelect}
                className="space-y-3"
              >
                {currentQuestionData.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${currentQuestionData.id}-${option}`} />
                    <Label htmlFor={`${currentQuestionData.id}-${option}`} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              {needsCustomInput && (
                <div className="mt-4">
                  <Label htmlFor={`custom-${currentQuestionData.id}`} className="block mb-2">
                    Пожалуйста, уточните:
                  </Label>
                  <Input
                    id={`custom-${currentQuestionData.id}`}
                    value={customValue}
                    onChange={handleCustomAnswerChange}
                    placeholder="Введите ваш вариант"
                    className="w-full"
                  />
                </div>
              )}
              
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center"
                >
                  <ChevronLeft className="mr-1" size={16} />
                  Назад
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="flex items-center"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Далее
                      <ChevronRight className="ml-1" size={16} />
                    </>
                  ) : (
                    'Завершить'
                  )}
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Завершите заявку</h3>
              <p className="text-gray-600 mb-6">
                Спасибо за ваши ответы! Для получения точной оценки стоимости ремонта, оставьте ваши контактные данные, и мы свяжемся с вами в ближайшее время.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block mb-1">Ваше имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block mb-1">Номер телефона</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="89096730698"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="comment" className="block mb-1">Дополнительные комментарии (опционально)</Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleFormChange}
                    placeholder="Любая дополнительная информация"
                    rows={3}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-2">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SurveySection;
