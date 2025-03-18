
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from 'lucide-react';

interface CallbackDialogProps {
  children: React.ReactNode;
  title?: string;
  buttonText?: string;
}

const CallbackDialog = ({ 
  children, 
  title = "Оставить заявку на ремонт", 
  buttonText = "Отправить заявку" 
}: CallbackDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
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
      // Google App Script public URL - this would need to be created
      const scriptURL = "https://script.google.com/macros/s/your-script-id/exec";
      
      // Имитация отправки в Google Sheets
      // В реальном приложении использовать fetch для отправки данных
      console.log('Отправка данных в Google Sheets:', formData);
      console.log('Ссылка для API Google Sheets:', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vToWL6wwIKGKmjLKnmyxSXrjeDH7qV-FgyIReKieab5tiMDRrXv_9FcijL5xp049H--rDpVoAzm3UmG/pubhtml?gid=0&single=true');
      
      // Имитация успешной отправки
      setTimeout(() => {
        toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '', device: '', message: '' });
        setIsSubmitting(false);
        setOpen(false);
      }, 1000);
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      toast.error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Ваше имя</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (XXX) XXX-XX-XX"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="device" className="text-sm font-medium">Устройство</label>
            <Input
              id="device"
              name="device"
              value={formData.device}
              onChange={handleChange}
              placeholder="Samsung Galaxy S21"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Опишите проблему</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Разбит экран, не включается и т.д."
              rows={3}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : buttonText}
          </Button>
          <p className="text-xs text-neutral-500 text-center mt-2">
            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallbackDialog;
