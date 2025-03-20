import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Подготовка данных для отправки
      const formPayload = {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        formType: 'Контактная форма', // Тип формы для идентификации
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
      setFormData({ name: '', phone: '', message: '' }); // Очистка формы
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      toast.error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Имя
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Ваше имя"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
          Телефон
        </label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="89660657937"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Сообщение
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Опишите вашу проблему"
        />
      </div>
      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
      </Button>
      <p className="text-xs text-neutral-500 text-center mt-2">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
};

export default ContactForm;
