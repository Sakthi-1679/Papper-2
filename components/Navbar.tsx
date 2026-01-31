import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onOpenQuote: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out mt-0 md:mt-8 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-xl py-3 mt-0 top-0' 
          : 'bg-primary py-5 top-0 border-b border-white/10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300`}>
              <ShoppingBag className="text-secondary h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-white leading-none tracking-tight">EcoPrint</h1>
              <span className="text-[10px] tracking-[0.1em] text-gray-300 uppercase font-bold block mt-1">Paper Bags Pvt Ltd</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium text-sm uppercase tracking-wide transition-colors py-2 group ${
                  location.pathname === item.path ? 'text-secondary font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <button
              onClick={onOpenQuote}
              className="btn-fill bg-secondary text-primary px-7 py-2.5 rounded font-heading font-bold hover:shadow-lg transition-all hover:-translate-y-0.5 border border-secondary hover:border-white hover:text-white"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-primary ${isOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col space-y-2 border-t border-white/10 pt-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 font-medium rounded-md transition-colors ${
                    location.pathname === item.path ? 'bg-white/10 text-secondary' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <button
                    onClick={() => {
                    setIsOpen(false);
                    onOpenQuote();
                    }}
                    className="bg-secondary text-primary w-full py-3 rounded font-bold shadow-md active:scale-95 transition-transform"
                >
                    Request Quote
                </button>
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
