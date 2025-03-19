
import React from 'react';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      title: 'Адрес',
      detail: 'ул. Труда, 52, Челябинск'
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: 'Телефон',
      detail: <a href="tel:89660657937" className="hover:text-blue-500 transition-colors">8 966 065-79-37</a>
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: 'Email',
      detail: <a href="mailto:info@ремонт-samsung.ru" className="hover:text-blue-500 transition-colors">info@ремонт-samsung.ru</a>
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-neutral-50">
      <div className="section-container">
        <div className="section-title-container">
          <h2 className="section-title">Контакты</h2>
          <div className="section-title-line"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6">Связаться с нами</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                    <p className="text-neutral-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
