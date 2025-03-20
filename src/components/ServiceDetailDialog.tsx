import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';

interface ServiceDetailDialogProps {
  title: string;
  description: string;
  icon: LucideIcon;
  detailedDescription: string;
  imageSrc?: string;
  features?: string[];
  children: React.ReactNode;
}

const ServiceDetailDialog = ({ 
  title, 
  description, 
  icon: Icon, 
  detailedDescription, 
  imageSrc, 
  features,
  children 
}: ServiceDetailDialogProps) => {
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
      // Подготовка данных для отправки
      const formPayload = {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        service: title, // Название услуги
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
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Icon className="h-8 w-8 text-blue-500" />
            <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <div className="flex flex-col md:flex-row gap-6">
            {imageSrc && (
              <div className="md:w-1/2">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}
            <div className={imageSrc ? "md:w-1/2" : "w-full"}>
              <p className="text-lg font-medium mb-3">{description}</p>
              <p className="text-neutral-700 mb-4">{detailedDescription}</p>
              
              {features && features.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Что включает в себя услуга:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {features.map((feature, index) => (
                      <li key={index} className="text-neutral-700">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Ваше имя</label>
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
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
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
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
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
                    className="w-full light-blue-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Оставить заявку на ремонт'}
                  </Button>
                  <p className="text-xs text-neutral-500 text-center mt-2">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;
