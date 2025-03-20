
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';
import CallbackDialog from './CallbackDialog';

interface ServiceDetailDialogProps {
  title: string;
  description: string;
  icon: LucideIcon;
  detailedDescription: string;
  imageSrc?: string;
  features?: string[];
  children: React.ReactNode;
}

const ServiceDetailDialog = ({ 
  title, 
  description, 
  icon: Icon, 
  detailedDescription, 
  imageSrc, 
  features,
  children 
}: ServiceDetailDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Icon className="h-8 w-8 text-blue-500" />
            <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <div className="flex flex-col md:flex-row gap-6">
            {imageSrc && (
              <div className="md:w-1/2">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}
            <div className={imageSrc ? "md:w-1/2" : "w-full"}>
              <p className="text-lg font-medium mb-3">{description}</p>
              <p className="text-neutral-700 mb-4">{detailedDescription}</p>
              
              {features && features.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Что включает в себя услуга:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {features.map((feature, index) => (
                      <li key={index} className="text-neutral-700">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-6">
                <CallbackDialog title={`Заявка на услугу: ${title}`}>
                  <Button className="w-full">Оставить заявку на ремонт</Button>
                </CallbackDialog>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;
