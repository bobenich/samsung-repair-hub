
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface SurveyContactFormProps {
  formData: {
    name: string;
    phone: string;
    comment: string;
  };
  isSubmitting: boolean;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const SurveyContactForm: React.FC<SurveyContactFormProps> = ({
  formData,
  isSubmitting,
  onFormChange,
  onSubmit
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 animate-fade-in">
      <h3 className="text-xl font-semibold mb-4">Завершите заявку</h3>
      <p className="text-gray-600 mb-6">
        Спасибо за ваши ответы! Для получения точной оценки стоимости ремонта, оставьте ваши контактные данные, и мы свяжемся с вами в ближайшее время.
      </p>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="block mb-1">Ваше имя</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={onFormChange}
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
            onChange={onFormChange}
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
            onChange={onFormChange}
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
  );
};

export default SurveyContactForm;
