import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
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
      // Отправка в Google Sheets через Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbwXPLOweOdpOpwJEtqNPArsvW9h1bDfnGVcC_klJXAve5s-vtoTVNz6FTBK2LqVVz_3/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company || '', // необязательное поле
          email: formData.email || '', // необязательное поле
          phone: formData.phone,
          message: formData.message || '', // необязательное поле
        }),
      });
      
      if (!response.ok) throw new Error('Ошибка сервера');
      
      toast.success('Ваша заявка успешно отправлена!');
      setFormData({ 
        name: '', 
        company: '', 
        email: '', 
        phone: '', 
        message: '' 
      });
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
          Имя*
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
        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
          Компания
        </label>
        <Input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Название компании"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ваш email"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
          Телефон*
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
