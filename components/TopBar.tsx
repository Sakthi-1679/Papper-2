import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const TopBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`bg-accent text-white text-xs py-2 hidden md:block border-b border-white/10 transition-transform duration-300 ease-in-out fixed w-full z-[60] top-0 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Phone size={14} className="text-secondary group-hover:rotate-12 transition-transform" />
            <span className="opacity-90 group-hover:opacity-100">{COMPANY_INFO.phone}</span>
          </div>
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Mail size={14} className="text-secondary group-hover:rotate-12 transition-transform" />
            <span className="opacity-90 group-hover:opacity-100">{COMPANY_INFO.email}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={14} className="text-secondary" />
          <span className="opacity-90">{COMPANY_INFO.address}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
