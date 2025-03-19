
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQSection from '@/components/FAQSection';
import MaintenanceTipsSection from '@/components/MaintenanceTipsSection';
import { Facebook, Instagram, Send, Phone, MapPin, Mail } from 'lucide-react';
import { Toaster } from 'sonner';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <MaintenanceTipsSection />
      <FAQSection />
      <ContactSection />
      <footer className="bg-neutral-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ремонт Samsung</h3>
              <p className="text-neutral-300">Профессиональный сервисный центр по ремонту техники Samsung в Челябинске. Гарантия качества на все виды работ.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-blue-400" size={18} />
                <p>Челябинск, ул. Труда, 52</p>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-blue-400" size={18} />
                <a href="tel:89096730698" className="hover:text-blue-400 transition-colors">8 909 673-06-98</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={18} />
                <a href="mailto:info@ремонт-samsung.ru" className="hover:text-blue-400 transition-colors">info@ремонт-samsung.ru</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Facebook />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Instagram />
                </a>
                <a href="https://t.me/golder_creator" className="text-white hover:text-blue-400 transition-colors">
                  <Send />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-700 text-center">
            <p>© 2025 Ремонт Samsung. Все права защищены.</p>
          </div>
        </div>
      </footer>
      <WhatsAppButton phoneNumber="89096730698" />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Index;
