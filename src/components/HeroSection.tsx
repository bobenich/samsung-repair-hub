
import React from 'react';
import { Button } from '@/components/ui/button';
import CallbackDialog from './CallbackDialog';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100vh] flex items-center pt-16 overflow-hidden" 
      style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.6)), url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80) center/cover no-repeat fixed'
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className="inline-block py-1 px-3 mb-4 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-fade-in-up">
            Официальный сервисный центр
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up [animation-delay:200ms]">
            Профессиональный ремонт техники Samsung в Челябинске
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 animate-fade-in-up [animation-delay:400ms]">
            Быстро, качественно, с гарантией. Доверьте свою технику профессионалам с многолетним опытом работы!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms]">
            <CallbackDialog>
              <Button size="lg">Оставить заявку</Button>
            </CallbackDialog>
            <CallbackDialog title="Узнать стоимость ремонта" buttonText="Узнать стоимость">
              <Button variant="outline" size="lg">Узнать стоимость</Button>
            </CallbackDialog>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
