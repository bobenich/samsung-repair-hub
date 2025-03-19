
import React from 'react';
import { Button } from '@/components/ui/button';
import CallbackDialog from './CallbackDialog';
import { Phone } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-lg text-blue-100 mb-8">
              Наш процесс работы: быстро, просто, надёжно
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-white rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Диагностика</h3>
                  <p className="text-blue-100">
                    Бесплатно определяем проблему вашего устройства и предлагаем оптимальное решение.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-white rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Согласование и ремонт</h3>
                  <p className="text-blue-100">
                    Обговариваем стоимость и сроки, приступаем к ремонту после вашего одобрения.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-white rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Тестирование и сдача</h3>
                  <p className="text-blue-100">
                    Тщательно проверяем работу устройства и возвращаем его в идеальном состоянии, готовым к использованию.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="tel:89096730698" className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Phone size={18} />
                8 909 673-06-98
              </a>
              <CallbackDialog title="Заказать ремонт" buttonText="Отправить заявку">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  Оставить заявку
                </Button>
              </CallbackDialog>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <img 
              src="/lovable-uploads/ead1ad42-ab7d-475f-930a-28c8949e9331.png" 
              alt="Процесс работы" 
              className="max-w-full h-auto" 
            />
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 top-0 w-full h-full opacity-10">
        <img 
          src="/main_img.png" 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </div>
    </section>
  );
};

export default CallToActionSection;
