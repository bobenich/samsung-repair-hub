
import React from 'react';
import { Button } from '@/components/ui/button';
import CallbackDialog from './CallbackDialog';
import { Headset, PhoneCall } from 'lucide-react';

const CallbackCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.01] transition-transform">
          <div className="p-8 md:p-10 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-br-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-50 rounded-tl-3xl -z-10"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Headset className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Нужна консультация специалиста?
              </h2>
              
              <p className="text-center text-neutral-600 mb-8">
                Оставьте заявку сейчас и получите профессиональную консультацию по ремонту вашего устройства Samsung. Мы свяжемся с вами в течение 15 минут!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:89660657937" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-6 py-2.5 rounded-lg font-medium transition-colors">
                  <PhoneCall size={18} />
                  89660657937
                </a>
                <CallbackDialog title="Получить консультацию" buttonText="Отправить">
                  <Button size="lg" className="w-full sm:w-auto light-blue-button">
                    Оставить заявку
                  </Button>
                </CallbackDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackCTA;
