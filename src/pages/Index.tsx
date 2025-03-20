
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQSection from '@/components/FAQSection';
import MaintenanceTipsSection from '@/components/MaintenanceTipsSection';
import SurveySection from '@/components/SurveySection';
import CallToActionSection from '@/components/CallToActionSection';
import CallbackCTA from '@/components/CallbackCTA';
import { Toaster } from 'sonner';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Facebook, Instagram, Send } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Ремонт Samsung в Челябинске - Официальный сервисный центр | Гарантия качества</title>
        <meta name="description" content="Профессиональный ремонт телефонов, планшетов и другой техники Samsung в Челябинске. Оригинальные запчасти, гарантия на все виды работ. Звоните: 8 966 065-79-37!" />
        <meta name="keywords" content="ремонт Samsung Челябинск, замена экрана Samsung, ремонт телефонов Samsung, сервисный центр Samsung, починка Galaxy, ремонт планшетов Samsung, диагностика Samsung, сервис Samsung Челябинск" />
        <link rel="canonical" href="https://ремонт-samsung.рф/" />
        <meta property="og:title" content="Ремонт техники Samsung в Челябинске - Сервисный центр" />
        <meta property="og:description" content="Качественный ремонт смартфонов, планшетов и другой техники Samsung с гарантией. Оригинальные запчасти, опытные мастера." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ремонт-samsung.рф/" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Сервисный центр Samsung" />
        <meta name="geo.region" content="RU-CHE" />
        <meta name="geo.placename" content="Челябинск" />
        <meta name="geo.position" content="55.159897;61.402554" />
        <meta name="ICBM" content="55.159897, 61.402554" />
      </Helmet>
      <Header />
      <HeroSection />
      <ServicesSection />
      <CallToActionSection />
      <AboutSection />
      <SurveySection />
      <MaintenanceTipsSection />
      <CallbackCTA />
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
                <p>ул. Труда, 52, Челябинск</p>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-blue-400" size={18} />
                <a href="tel:89660657937" className="hover:text-blue-400 transition-colors">8 966 065-79-37</a>
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
                <a href="https://t.me/+79660657937" className="text-white hover:text-blue-400 transition-colors">
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
      <WhatsAppButton phoneNumber="89660657937" />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Index;
