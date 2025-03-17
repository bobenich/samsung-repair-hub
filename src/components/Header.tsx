
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Услуги', href: '#services' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contacts' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
      scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-2' : 'bg-transparent'
    )}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-500 flex items-center">
          Ремонт <span className="text-neutral-800">Samsung</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-neutral-700 hover:text-blue-500 transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <Button>Заказать ремонт</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 border-t animated fade-in-down">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-neutral-700 hover:text-blue-500 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button>Заказать ремонт</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
