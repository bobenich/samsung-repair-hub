import React from 'react';
import { Button } from '@/components/ui/button';
import CallbackDialog from './CallbackDialog';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100vh] flex items-center pt-16 overflow-hidden" 
    >
      <div className="absolute inset-0 bg-blue-600 bg-opacity-10 z-0">
        {/* Dot pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22><circle cx=%222%22 cy=%222%22 r=%221%22 fill=%22%23007BFF%22 fill-opacity=%220.2%22/></svg>')] bg-[length:20px_20px]"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-400 opacity-20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-blue-300 opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-lg bg-blue-500 opacity-15 rotate-12 animate-pulse animation-delay-4000"></div>
        
        {/* Animated blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-20 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-blue-300 opacity-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 rounded-full bg-blue-500 opacity-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Additional decorative elements from FAQSection */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100/40 blur-xl"></div>
        <div className="absolute top-20 right-[10%] w-24 h-24 bg-blue-200/30 rotate-45 animate-floating-slow"></div>
        <div className="absolute top-40 right-[20%] w-16 h-16 bg-blue-300/20 rotate-12 animate-floating"></div>
        <div className="absolute bottom-40 left-[15%] w-32 h-32 rounded-full bg-blue-100/50 animate-floating-reverse"></div>
        <div className="absolute -bottom-16 right-[30%] w-48 h-48 rounded-full bg-blue-200/30 blur-lg"></div>
        <div className="absolute top-[40%] left-[45%] w-20 h-20 bg-blue-400/10 rounded-md rotate-12 animate-pulse"></div>
        <div className="absolute top-[30%] left-[20%] w-12 h-12 bg-blue-300/20 rounded-full animate-floating-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto md:mx-0 relative">
          {/* Decorative geometric element */}
          <div className="absolute -left-8 -top-8 w-16 h-16 border-2 border-blue-400 opacity-70 rounded-lg hidden md:block"></div>
          
          <span className="inline-block py-1 px-3 mb-4 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-fade-in-up backdrop-blur-sm">
            Официальный сервисный центр
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up [animation-delay:200ms]">
            Ремонт техники Samsung в Челябинске
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 animate-fade-in-up [animation-delay:400ms]">
            Быстро, качественно, с гарантией. Доверьте свою технику профессионалам с многолетним опытом работы!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms] relative">
            {/* Decorative geometric element */}
            <div className="absolute -right-12 bottom-0 w-20 h-2 bg-blue-300 opacity-50 rounded hidden md:block"></div>
            
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
