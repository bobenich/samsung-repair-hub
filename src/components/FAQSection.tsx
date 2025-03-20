
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { HelpCircle, Info, MessageSquare } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  image?: string;
}

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "Сколько времени занимает ремонт смартфона Samsung?",
      answer: "Большинство ремонтов выполняется в течение 1-2 часов. Сложные случаи могут занять до 24 часов. При приеме устройства мастер сообщит точное время ремонта.",
      image: "https://images.unsplash.com/photo-1581993192873-7f24f557ccf3?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Даете ли вы гарантию на ремонт?",
      answer: "Да, мы предоставляем гарантию от 1 до 12 месяцев на все виды работ в зависимости от сложности ремонта и типа устройства.",
    },
    {
      question: "Используете ли вы оригинальные запчасти?",
      answer: "Да, мы используем только оригинальные комплектующие Samsung или высококачественные аналоги, которые проходят тщательную проверку перед установкой.",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Что делать, если устройство не включается?",
      answer: "Не пытайтесь ремонтировать его самостоятельно. Принесите устройство в наш сервисный центр для диагностики. Часто проблема может быть решена без замены дорогостоящих компонентов.",
    },
    {
      question: "Сохраняются ли данные при ремонте?",
      answer: "Мы всегда стараемся сохранить ваши данные, но рекомендуем создать резервную копию перед сдачей устройства в ремонт. В некоторых случаях, особенно при ремонте памяти или системной платы, сохранение данных может быть невозможно.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Как долго работает ваш сервисный центр?",
      answer: "Наш сервисный центр открыт с 9:00 до 20:00 без выходных. Вы можете оставить заявку на нашем сайте в любое время, и мы свяжемся с вами в рабочие часы.",
    },
    {
      question: "Выполняете ли вы срочный ремонт?",
      answer: "Да, мы предлагаем услугу срочного ремонта для большинства типов неисправностей. За дополнительную плату ваше устройство будет отремонтировано вне очереди, обычно в течение 1 часа.",
    },
    {
      question: "Можно ли отремонтировать устройство, если на нем есть физические повреждения?",
      answer: "Да, мы занимаемся ремонтом устройств с различными физическими повреждениями, включая разбитые экраны, повреждение от влаги, погнутые корпуса и другие механические проблемы.",
      image: "https://images.unsplash.com/photo-1559312368-8a8d6c838fec?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Есть ли у вас бесплатная диагностика?",
      answer: "Да, базовая диагностика проблем выполняется бесплатно. Если требуется углубленная диагностика с разбором устройства, её стоимость будет включена в общую стоимость ремонта при вашем согласии на проведение работ.",
    },
    {
      question: "Как узнать стоимость ремонта?",
      answer: "Вы можете узнать предварительную стоимость ремонта, заполнив форму на нашем сайте или позвонив по телефону. Точная стоимость будет определена после диагностики устройства.",
    },
    {
      question: "Выполняете ли вы ремонт устаревших моделей Samsung?",
      answer: "Да, мы ремонтируем как новейшие, так и устаревшие модели техники Samsung. Наши мастера имеют опыт работы со всеми поколениями устройств.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Что делать, если после ремонта возникла та же проблема?",
      answer: "Если после ремонта возникла та же проблема, обратитесь к нам как можно скорее. Если это произошло в течение гарантийного срока, мы устраним неисправность бесплатно.",
    },
    {
      question: "Можно ли отследить статус ремонта онлайн?",
      answer: "Да, вы можете узнать статус ремонта, связавшись с нами по телефону или через WhatsApp. В ближайшее время мы планируем запустить систему онлайн-отслеживания статуса ремонта.",
    },
    {
      question: "Работаете ли вы с юридическими лицами?",
      answer: "Да, мы предлагаем специальные условия для юридических лиц, включая безналичный расчет, заключение договоров на обслуживание и корпоративные скидки при обслуживании нескольких устройств.",
    },
  ];

  // Create an array of icon components to use
  const icons = [<HelpCircle size={18} className="text-blue-500" />, <Info size={18} className="text-blue-500" />, <MessageSquare size={18} className="text-blue-500" />];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-40 transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Small floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-200 rounded-sm opacity-30 animate-float rotate-45"></div>
      <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-blue-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
      <div className="absolute top-2/3 left-2/3 w-6 h-6 bg-blue-300 rounded-md opacity-20 animate-float animation-delay-4000 rotate-12"></div>
      
      <div className="section-container relative z-10">
        <div className="section-title-container">
          <h2 className="section-title">Часто задаваемые вопросы</h2>
          <div className="section-title-line bg-gradient-to-r from-blue-300 to-blue-500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {[0, 1, 2, 3, 4].map((page) => (
                <CarouselItem key={page} className="md:basis-1/1">
                  <div className="p-1">
                    <Card className="p-6 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg border-0 relative">
                      {/* Decorative element */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-3xl -z-10"></div>
                      
                      <Accordion type="single" collapsible className="w-full">
                        {faqs.slice(page * 3, page * 3 + 3).map((faq, index) => (
                          <AccordionItem value={`faq-${page}-${index}`} key={`faq-${page}-${index}`} className="border-b border-blue-100">
                            <AccordionTrigger className="text-left py-5 hover:no-underline hover:text-blue-600 group">
                              <div className="flex items-center gap-3">
                                {icons[index % icons.length]}
                                <span className="group-hover:text-blue-600 transition-colors">{faq.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-2">
                              <div className="flex flex-col md:flex-row gap-4 items-start bg-blue-50 bg-opacity-50 p-4 rounded-lg">
                                <div className="md:flex-1">{faq.answer}</div>
                                {faq.image && (
                                  <div className="w-full md:w-1/3 mt-4 md:mt-0">
                                    <img 
                                      src={faq.image} 
                                      alt="Иллюстрация к вопросу" 
                                      className="rounded-md w-full h-auto object-cover shadow-md hover:shadow-lg transition-shadow"
                                    />
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 mt-0 bg-white hover:bg-blue-50 border border-blue-100" />
              <CarouselNext className="relative static right-0 translate-y-0 mt-0 bg-white hover:bg-blue-50 border border-blue-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
