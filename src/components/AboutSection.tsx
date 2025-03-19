
import React from 'react';
import { Shield, Award, ThumbsUp } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Гарантия на работы',
      description: 'Предоставляем гарантию до 12 месяцев на все ремонтные работы'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: 'Сертифицированные мастера',
      description: 'Наши специалисты имеют сертификаты Samsung и большой опыт'
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-500" />,
      title: 'Бесплатная диагностика',
      description: 'Проводим бесплатную диагностику при согласии на ремонт'
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="section-title-container">
          <h2 className="section-title">Почему выбирают нас?</h2>
          <div className="section-title-line"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-lg text-neutral-700">
            Мы специализируемся на ремонте техники Samsung уже более 5 лет. 
            Используем только оригинальные запчасти и предоставляем гарантию на все виды работ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="flex flex-col items-center gap-4 animate-fade-in-up p-6 rounded-lg bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition-all border border-blue-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 p-4 bg-blue-100 rounded-xl transform rotate-6">
                <div className="transform -rotate-6">
                  {benefit.icon}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
