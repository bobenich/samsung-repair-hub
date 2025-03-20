
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import ServiceDetailDialog from './ServiceDetailDialog';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  className?: string;
  detailedDescription?: string;
  imageSrc?: string;
  features?: string[];
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  className,
  detailedDescription,
  imageSrc,
  features 
}: ServiceCardProps) => {
  const detailedDescriptionText = detailedDescription || 
    "Мы предлагаем профессиональный сервис для всех моделей устройств Samsung. Наши квалифицированные специалисты используют только оригинальные запчасти и профессиональное оборудование.";
  
  return (
    <ServiceDetailDialog
      title={title}
      description={description || ""}
      icon={icon}
      detailedDescription={detailedDescriptionText}
      imageSrc={imageSrc || `https://source.unsplash.com/random/800x600/?${title.toLowerCase().replace(/\s+/g, '-')}`}
      features={features}
    >
      <div 
        className={cn(
          'glass-card rounded-2xl p-6 hover-shadow hover-scale cursor-pointer relative overflow-hidden',
          className
        )}
      >
        {/* Decorative elements */}
        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50"></div>
        
        <div className="relative z-10">
          <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
            {React.createElement(icon, { className: "h-7 w-7 text-blue-500" })}
          </div>
          <h3 className="text-xl font-gothic font-semibold text-center mb-3">{title}</h3>
          {description && (
            <p className="text-neutral-600 text-center font-grotesk">{description}</p>
          )}
        </div>
      </div>
    </ServiceDetailDialog>
  );
};

export default ServiceCard;
