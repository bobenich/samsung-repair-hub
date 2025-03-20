import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

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
  const validatePhone = (phone: string) => {
    const regex = /^\+?[0-9]{10,15}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      toast.error('Пожалуйста, введите корректный номер телефона.');
      return;
    }

    try {
      // Подготовка данных для отправки
      const formPayload = {
        name: formData.name,
        phone: formData.phone,
        comment: formData.comment,
      };

      // Логирование данных перед отправкой
      console.log('Отправляемые данные:', formPayload);

      // Отправка данных в Google Apps Script
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzryZgY_pFXC2esv7xDmaebzda4_Qeu5TenC3QuNSLA5p5dhKnpHBcoM2R5tkEnAdRA/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formPayload),
        }
      );

      // Логирование ответа от сервера
      console.log('Ответ от сервера:', response);

      // Проверка статуса ответа
      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      // Успешная отправка
      toast.success('Ваша заявка успешно отправлена!');
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      toast.error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    } finally {
      onSubmit(e); // Вызов переданного обработчика onSubmit
    }
  };

  return (
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
            placeholder="8(ХХХ)ХХХ-ХХ-ХХ"
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
