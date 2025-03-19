
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
      // Prepare message for Google Sheets
      const message = `
        🔔 Новая заявка с формы контактов!
        
        Имя: ${formData.name}
        Телефон: ${formData.phone}
        Сообщение: ${formData.message}
      `;
      
      // Log information about where we'd send this in production
      console.log('Sending to Google Sheets:', message);
      console.log('Google Sheets URL:', 'https://docs.google.com/spreadsheets/d/1pE0cy6LuFHsCQqrrtZ0O7VajeTx96gEO9PA5uUSKab8/edit');
      console.log('Also sending to Telegram chat ID: @golder_creator');
      
      // Simulate successful API call
      setTimeout(() => {
        toast.success('Ваша заявка успешно отправлена!');
        setFormData({ name: '', phone: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending form:', error);
      toast.error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
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
          placeholder="89096730698"
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
