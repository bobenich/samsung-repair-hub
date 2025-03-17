
import React from 'react';
import ServiceCard from './ServiceCard';
import { Laptop, Smartphone, Monitor, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { 
      title: 'Ремонт ноутбуков', 
      description: 'Устранение неисправностей любой сложности в ноутбуках Samsung', 
      icon: Laptop 
    },
    { 
      title: 'Ремонт смартфонов', 
      description: 'Замена комплектующих и восстановление программного обеспечения', 
      icon: Smartphone 
    },
    { 
      title: 'Замена экранов', 
      description: 'Профессиональная замена экранов на устройствах Samsung', 
      icon: Monitor 
    },
    { 
      title: 'Диагностика', 
      description: 'Комплексная диагностика и выявление дефектов', 
      icon: Search 
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
