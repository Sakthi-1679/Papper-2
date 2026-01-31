import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  gray?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, gray = false }) => {
  return (
    <section 
      id={id} 
      className={`py-24 relative overflow-hidden ${gray ? 'bg-gray-50' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4 relative z-10 animate-on-scroll">
        {children}
      </div>
    </section>
  );
};

export default Section;