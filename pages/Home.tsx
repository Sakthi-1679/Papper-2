import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, PenTool, Printer, Factory, Star, Award } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import Section from '../components/Section';
import SmartImage from '../components/SmartImage';
import { PRODUCTS, SERVICES } from '../constants';

interface HomeProps {
  onQuoteRequest: (productName?: string) => void;
}

// Simple Counter Component (used for badges)
const Counter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Home: React.FC<HomeProps> = ({ onQuoteRequest }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'PenTool': <PenTool size={32} />,
    'Printer': <Printer size={32} />,
    'Factory': <Factory size={32} />
  };

  return (
    <div className="flex flex-col min-h-screen page-enter">
      <HeroSlider />

      {/* About Intro - Staggered Reveal */}
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 animate-on-scroll">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-tl-[3rem] transition-all group-hover:bg-accent/20"></div>
              <img 
                src="https://picsum.photos/seed/factorywork/800/600" 
                alt="About Us" 
                className="rounded-lg shadow-2xl relative z-10 w-full object-cover transform transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-br-[3rem] z-0 transition-all group-hover:bg-primary/20"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-[-20px] bg-white p-6 rounded-lg shadow-xl z-20 animate-on-scroll delay-300 hidden md:block border-l-4 border-secondary">
                 <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Award size={32} />
                    </div>
                    <div>
                        <p className="font-bold text-3xl text-dark"><Counter end={15} />+</p>
                        <p className="text-xs text-muted uppercase tracking-wider">Years Experience</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-on-scroll delay-200">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center">
              <span className="w-8 h-[2px] bg-secondary mr-3"></span> Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6 leading-tight">
              Crafting Excellence in <span className="text-primary relative inline-block">
                Paper Packaging
                <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/20 -z-10"></span>
              </span>
            </h2>
            <p className="text-body mb-8 leading-relaxed text-lg">
              At EcoPrint, we merge artistic innovation with industrial precision. 
              Since 2010, we've redefined sustainable packaging for over 500 global brands.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {['100% Recyclable', 'Premium Finishing', 'Global Shipping', 'Free Design Support'].map((item) => (
                <div key={item} className="flex items-center text-gray-700 font-medium group">
                  <CheckCircle size={20} className="text-accent mr-3 group-hover:scale-125 transition-transform" />
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-fill inline-flex items-center border-2 border-primary text-primary px-8 py-3 rounded font-bold hover:text-white transition-colors duration-300">
              Discover Our Story <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Products - Hover Lift Effects */}
      <Section gray>
        <div className="text-center mb-16 max-w-3xl mx-auto animate-on-scroll">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">Our Collection</span>
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">Premium Packaging Solutions</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-lg">Engineered for durability and designed for brand impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 6).map((product, idx) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover-lift animate-on-scroll border border-transparent hover:border-primary"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="h-72 overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center space-y-4">
                    <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{product.name}</h4>
                    <button 
                      onClick={() => onQuoteRequest(product.name)}
                      className="bg-secondary text-primary font-bold py-2 px-8 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-white"
                    >
                      Enquire Now
                    </button>
                 </div>
                <SmartImage 
                  baseName={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
                    {product.category}
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">{product.description}</p>
                <button 
                  onClick={() => onQuoteRequest(product.name)}
                  className="text-primary font-bold text-sm uppercase flex items-center group/btn"
                >
                  <span className="border-b-2 border-transparent group-hover/btn:border-secondary transition-all">View Details</span>
                  <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-on-scroll">
          <Link to="/products" className="btn-fill inline-block bg-primary text-white px-10 py-4 rounded font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            View Full Catalogue
          </Link>
        </div>
      </Section>

      {/* Services - Fade Up */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
                key={service.id} 
                className="group p-8 rounded-2xl border border-border hover:border-primary hover:shadow-2xl transition-all duration-300 bg-white animate-on-scroll"
                style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                 <div className="group-hover:scale-110 transition-transform duration-300">
                    {iconMap[service.icon]}
                 </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-dark group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-body leading-relaxed">{service.description}</p>
              <div className="w-12 h-1 bg-secondary mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section gray>
         <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-heading font-bold text-dark">Client Testimonials</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-on-scroll hover:-translate-y-1 duration-300 border border-transparent hover:border-primary/20">
                    <div className="flex text-secondary mb-4">
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-body italic mb-6">"EcoPrint delivered exceptional quality bags for our retail chain. The printing sharpness and paper durability exceeded our expectations."</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                        <div>
                            <h4 className="font-bold text-sm text-dark">John Smith</h4>
                            <p className="text-xs text-muted">CEO, Retail Corp</p>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-accent py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 pattern-dots"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between animate-on-scroll">
          <div className="mb-8 md:mb-0 text-center md:text-left max-w-2xl">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to Elevate Your Brand?</h2>
             <p className="text-white/90 text-lg font-medium">Get a custom quote within 24 hours. No hidden charges.</p>
          </div>
          <button 
            onClick={() => onQuoteRequest()}
            className="bg-secondary text-primary font-bold text-lg px-10 py-4 rounded shadow-2xl hover:bg-white transition-all transform hover:scale-105 active:scale-95"
          >
            Request Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
