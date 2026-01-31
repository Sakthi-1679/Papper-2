import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/paperbag1/1920/1080',
    title: 'Sustainable Packaging Solutions',
    subtitle: 'Premium quality paper bags that elevate your brand identity while protecting the planet.',
    cta: 'Explore Products'
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/paperbag2/1920/1080',
    title: 'Custom Printed Branding',
    subtitle: 'State-of-the-art offset printing technology to make your logo stand out in the crowd.',
    cta: 'Contact Us'
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/paperbag3/1920/1080',
    title: 'Eco-Friendly & Durable',
    subtitle: 'Strong, biodegradable kraft materials engineered for strength and sustainability.',
    cta: 'View Gallery'
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className="relative h-[650px] md:h-[750px] w-full overflow-hidden bg-dark">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div className="absolute inset-0 overflow-hidden">
             <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover ${index === current ? 'hero-zoom' : ''}`}
            />
          </div>
          
          {/* Gradient Overlay using new theme */}
          <div className="absolute inset-0 bg-hero-gradient z-10 opacity-90" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                {/* Staggered Animations only trigger when slide is active */}
                {index === current && (
                  <>
                    <div className="overflow-hidden mb-4">
                        <span className="inline-block text-secondary font-bold text-sm md:text-base tracking-[0.3em] uppercase animate-slide-left">
                        Welcome to EcoPrint
                        </span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-tight animate-slide-left delay-100" style={{ animationDelay: '200ms' }}>
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl animate-slide-up leading-relaxed" style={{ animationDelay: '400ms' }}>
                      {slide.subtitle}
                    </p>
                    
                    <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
                        <Link
                            to="/products"
                            className="group inline-flex items-center bg-secondary text-primary px-10 py-4 rounded text-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
                        >
                            {slide.cta} 
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Progress Bars / Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-30 container mx-auto px-4">
        <div className="flex space-x-4">
            {SLIDES.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                index === current ? 'w-16 bg-secondary' : 'w-8 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
