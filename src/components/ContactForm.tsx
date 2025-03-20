
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

    setIsSubmitting(true);
    
    try {
      // Prepare form data for Google Forms
      const googleFormData = new FormData();
      googleFormData.append('entry.1432870689', formData.name); // Имя
      googleFormData.append('entry.1303145825', formData.phone); // Телефон
      googleFormData.append('entry.1586614236', formData.message); // Сообщение
      googleFormData.append('entry.465865088', ''); // Пустое устройство
      
      // Send to Google Forms
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe6K18obyk8L2YZKCVSub1qo7lenA6A0Qs6ddjVFICiAiwz0A/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });
      
      toast.success('Ваша заявка успешно отправлена!');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending form:', error);
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
          placeholder="8(XXX)XXX-XX-XX"
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
        className="w-full light-blue-button"
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
