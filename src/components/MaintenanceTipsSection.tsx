
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Laptop, Shield, Droplet, Zap, Thermometer } from 'lucide-react';

const MaintenanceTipsSection = () => {
  const tips = [
    {
      title: 'Регулярная очистка от пыли',
      description: 'Очищайте внутренние компоненты компьютера от пыли каждые 3-6 месяцев. Это предотвратит перегрев и продлит срок службы оборудования.',
      icon: <Droplet className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Обновление программного обеспечения',
      description: 'Регулярно обновляйте операционную систему и драйверы. Это повысит производительность и безопасность вашего устройства.',
      icon: <Shield className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Проверка системы охлаждения',
      description: 'Следите за работой системы охлаждения. Шумные или постоянно работающие на высоких оборотах вентиляторы могут сигнализировать о проблемах.',
      icon: <Thermometer className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Использование источника бесперебойного питания',
      description: 'Подключайте компьютер к источнику бесперебойного питания (ИБП). Это защитит устройство от скачков напряжения и внезапного отключения электричества.',
      icon: <Zap className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Регулярное резервное копирование данных',
      description: 'Создавайте резервные копии важных данных на внешних носителях или в облачных сервисах. Это поможет избежать потери информации при сбоях.',
      icon: <Laptop className="h-8 w-8 text-blue-500" />
    }
  ];

  return (
    <section id="maintenance-tips" className="py-20">
      <div className="section-container">
        <div className="section-title-container">
          <h2 className="section-title">Советы по обслуживанию ПК</h2>
          <div className="section-title-line"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in-up">
          <p className="text-lg text-neutral-700">
            Следуя этим простым рекомендациям, вы можете значительно продлить срок службы вашего компьютера и избежать распространенных проблем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card 
              key={tip.title} 
              className="shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {tip.icon}
                  </div>
                </div>
                <CardTitle className="text-center">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-600 text-center">
                  {tip.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceTipsSection;
