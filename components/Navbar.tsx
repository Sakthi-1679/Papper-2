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
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 mt-0 top-0' 
          : 'bg-white py-5 top-0 border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'bg-primary' : 'bg-primary'}`}>
              <ShoppingBag className="text-white h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-primary leading-none tracking-tight">Jayamurugan</h1>
              <span className="text-[10px] tracking-[0.1em] text-gray-500 uppercase font-bold block mt-1">Packing Industry</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium text-sm uppercase tracking-wide transition-colors py-2 group ${
                  location.pathname === item.path ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
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
              className="btn-fill bg-secondary text-white px-7 py-2.5 rounded shadow-lg shadow-amber-500/20 font-heading font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col space-y-2 pb-4 border-t border-gray-100 pt-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 font-medium rounded-md transition-colors ${
                    location.pathname === item.path ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
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
                    className="bg-primary text-white w-full py-3 rounded font-bold shadow-md active:scale-95 transition-transform"
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