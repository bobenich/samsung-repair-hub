
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'default', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        // Variants
        variant === 'default' && 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all',
        variant === 'outline' && 'border border-blue-500 text-blue-500 hover:bg-blue-50',
        variant === 'ghost' && 'text-blue-500 hover:bg-blue-50 hover:text-blue-600',
        // Sizes
        size === 'sm' && 'h-9 px-4 text-sm',
        size === 'md' && 'h-11 px-6 py-2',
        size === 'lg' && 'h-12 px-8 py-3 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
