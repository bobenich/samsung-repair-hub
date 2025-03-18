
import React from 'react';
import ServiceCard from './ServiceCard';
import { Laptop, Smartphone, Monitor, Search, Battery, Cpu, Database, Zap, WifiOff, BookOpen, ShieldCheck, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { 
      title: 'Ремонт ноутбуков', 
      description: 'Устранение неисправностей любой сложности в ноутбуках Samsung, замена матрицы, клавиатуры, чистка от пыли', 
      icon: Laptop 
    },
    { 
      title: 'Ремонт смартфонов', 
      description: 'Замена комплектующих и восстановление программного обеспечения на смартфонах Samsung Galaxy', 
      icon: Smartphone 
    },
    { 
      title: 'Замена экранов', 
      description: 'Профессиональная замена дисплеев и сенсорных модулей на всех устройствах Samsung', 
      icon: Monitor 
    },
    { 
      title: 'Диагностика', 
      description: 'Комплексная диагностика и выявление дефектов с использованием профессионального оборудования', 
      icon: Search 
    },
    { 
      title: 'Замена батареи', 
      description: 'Замена аккумуляторов на смартфонах, планшетах и ноутбуках Samsung с гарантией', 
      icon: Battery 
    },
    { 
      title: 'Ремонт материнских плат', 
      description: 'Восстановление и замена микросхем, пайка BGA, замена разъемов питания', 
      icon: Cpu 
    },
    { 
      title: 'Восстановление данных', 
      description: 'Спасение данных с поврежденных устройств, восстановление после попадания влаги', 
      icon: Database 
    },
    { 
      title: 'Ремонт после падения', 
      description: 'Устранение последствий механических повреждений в результате падения техники', 
      icon: Zap 
    },
    { 
      title: 'Решение проблем с Wi-Fi/Bluetooth', 
      description: 'Диагностика и ремонт неисправностей беспроводных модулей в устройствах Samsung', 
      icon: WifiOff 
    },
    { 
      title: 'Настройка ПО', 
      description: 'Обновление прошивки, установка и настройка программного обеспечения', 
      icon: BookOpen 
    },
    { 
      title: 'Защита устройств', 
      description: 'Установка защитных стекол, пленок и чехлов на устройства Samsung', 
      icon: ShieldCheck 
    },
    { 
      title: 'Срочный ремонт', 
      description: 'Экспресс-ремонт распространенных неисправностей в кратчайшие сроки', 
      icon: Clock 
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="section-container">
        <div className="section-title-container">
          <h2 className="section-title">Наши услуги</h2>
          <div className="section-title-line"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
