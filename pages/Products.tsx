import React from 'react';
import Section from '../components/Section';
import { PRODUCTS } from '../constants';

interface ProductsPageProps {
  onQuoteRequest: (productName?: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onQuoteRequest }) => {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Products</h1>
        <p className="text-lg text-gray-400">Explore our extensive range of eco-friendly paper bags.</p>
      </div>
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-72 overflow-hidden bg-gray-100 relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-green-100 text-primary text-xs font-bold px-2 py-1 rounded mb-3">
                  {product.category}
                </span>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <button 
                  onClick={() => onQuoteRequest(product.name)}
                  className="w-full block text-center bg-primary text-white font-bold py-3 rounded hover:bg-secondary transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProductsPage;
