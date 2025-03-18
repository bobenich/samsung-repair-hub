
import React from 'react';
import { Check, Clock, Shield, Award, ThumbsUp, Users, GraduationCap, MapPin, Wrench, Gift } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    {
      icon: <Check className="h-8 w-8 text-blue-500" />,
      title: 'Оригинальные запчасти',
      description: 'Используем только оригинальные комплектующие Samsung'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: 'Быстрый ремонт',
      description: 'Большинство ремонтов выполняется в течение 24 часов'
    },
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
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Индивидуальный подход',
      description: 'Решаем проблемы с учетом потребностей каждого клиента'
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
      title: 'Постоянное обучение',
      description: 'Регулярно повышаем квалификацию наших специалистов'
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-500" />,
      title: 'Удобное расположение',
      description: 'Находимся в центре города с хорошей транспортной доступностью'
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      title: 'Современное оборудование',
      description: 'Используем профессиональное оборудование для точной диагностики'
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-500" />,
      title: 'Программа лояльности',
      description: 'Специальные предложения для постоянных клиентов'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="flex flex-col items-center gap-4 animate-fade-in-up p-4 rounded-lg hover:bg-blue-50 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
                {benefit.icon}
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
