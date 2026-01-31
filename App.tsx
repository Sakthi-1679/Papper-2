import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import ContactPage from './pages/Contact';

// Placeholder components
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 container mx-auto text-center animate-on-scroll">
    <h1 className="text-4xl font-heading font-bold mb-4">{title}</h1>
    <p className="text-gray-500">This page is under construction for this demo.</p>
  </div>
);

const App: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleOpenQuote = (productName: string = '') => {
    setSelectedProduct(productName);
    setIsQuoteOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
        setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-dark flex flex-col">
        <TopBar />
        <Navbar onOpenQuote={() => handleOpenQuote()} />
        
        <main className="flex-grow pt-[104px] md:pt-[36px]"> {/* Offset for fixed nav/topbar */}
          <Routes>
            <Route path="/" element={<Home onQuoteRequest={handleOpenQuote} />} />
            <Route path="/products" element={<ProductsPage onQuoteRequest={handleOpenQuote} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/services" element={<PlaceholderPage title="Services" />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppBtn />
        
        {/* Scroll To Top Button */}
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 left-6 z-40 bg-primary text-white p-3 rounded shadow-lg transition-all duration-300 hover:bg-secondary ${
                showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>

        <QuoteModal 
          isOpen={isQuoteOpen} 
          onClose={() => setIsQuoteOpen(false)} 
          defaultProduct={selectedProduct}
        />
      </div>
    </Router>
  );
};

export default App;