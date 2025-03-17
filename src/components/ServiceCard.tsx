
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card rounded-2xl p-6 hover-shadow hover-scale',
        className
      )}
    >
      <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
        <Icon className="h-7 w-7 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
      {description && (
        <p className="text-neutral-600 text-center">{description}</p>
      )}
    </div>
  );
};

export default ServiceCard;
