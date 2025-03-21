
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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Ремонт Samsung в Челябинске - Официальный сервисный центр | Гарантия качества</title>
        <meta name="description" content="Профессиональный ремонт телефонов, планшетов и другой техники Samsung в Челябинске. Оригинальные запчасти, гарантия на все виды работ. Звоните: 8 966 065-79-37!" />
        <meta name="keywords" content="ремонт Samsung Челябинск, замена экрана Samsung, ремонт телефонов Samsung, сервисный центр Samsung, починка Galaxy, ремонт планшетов Samsung, диагностика Samsung, сервис Samsung Челябинск, Galaxy S ремонт, Galaxy Note починка, Galaxy Tab сервис" />
        <link rel="canonical" href="https://remont-samsung-chelyabinsk.ru/" />
        
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="Ремонт техники Samsung в Челябинске - Сервисный центр" />
        <meta property="og:description" content="Качественный ремонт смартфонов, планшетов и другой техники Samsung с гарантией. Оригинальные запчасти, опытные мастера." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://remont-samsung-chelyabinsk.ru/" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="Ремонт Samsung Челябинск" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт Samsung в Челябинске - Официальный сервисный центр" />
        <meta name="twitter:description" content="Профессиональный ремонт телефонов, планшетов и другой техники Samsung в Челябинске. Звоните: 8 966 065-79-37!" />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* Geo meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Сервисный центр Samsung" />
        <meta name="geo.region" content="RU-CHE" />
        <meta name="geo.placename" content="Челябинск" />
        <meta name="geo.position" content="55.159897;61.402554" />
        <meta name="ICBM" content="55.159897, 61.402554" />
        
        {/* Additional SEO tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#007aff" />
        <meta name="application-name" content="Ремонт Samsung Челябинск" />
        <meta name="apple-mobile-web-app-title" content="Ремонт Samsung Челябинск" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Главная</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Сервисный центр Samsung</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ServicesSection />
        <CallToActionSection />
        <AboutSection />
        <SurveySection />
        <MaintenanceTipsSection />
        <CallbackCTA />
        <FAQSection />
        <ContactSection />
      </main>
      <footer className="bg-neutral-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ремонт Samsung</h3>
              <p className="text-neutral-300">Профессиональный сервисный центр по ремонту техники Samsung в Челябинске. Гарантия качества на все виды работ.</p>
              <div className="mt-4">
                <a href="/sitemap.xml" className="text-blue-400 hover:underline text-sm">Sitemap</a>
              </div>
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
                <a href="mailto:info@remont-samsung-chelyabinsk.ru" className="hover:text-blue-400 transition-colors">info@remont-samsung-chelyabinsk.ru</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="https://vk.com/remont_samsung" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors" aria-label="ВКонтакте">
                  <Facebook />
                </a>
                <a href="https://instagram.com/samsung_remont_chelyabinsk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href="https://t.me/+79660657937" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors" aria-label="Telegram">
                  <Send />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-700 text-center">
            <p>© {new Date().getFullYear()} Ремонт Samsung в Челябинске. Все права защищены.</p>
            <p className="text-sm text-neutral-400 mt-2">ОГРНИП: 123456789012345 | ИНН: 123456789012</p>
          </div>
        </div>
      </footer>
      <WhatsAppButton phoneNumber="89660657937" />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Index;
