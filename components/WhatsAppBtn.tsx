import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const WhatsAppBtn: React.FC = () => {
  const message = "Hello, I am interested in your products.";
  const link = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <Phone fill="white" size={28} />
    </a>
  );
};

export default WhatsAppBtn;
