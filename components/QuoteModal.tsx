import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PRODUCTS } from '../constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: defaultProduct,
    quantity: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend here
    alert('Thank you! Your quote request has been submitted securely.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg z-10 overflow-hidden animate-fadeIn">
        <div className="bg-primary p-4 flex justify-between items-center text-white">
          <h3 className="text-xl font-heading font-bold">Request a Quote</h3>
          <button onClick={onClose} className="hover:text-secondary"><X /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input 
                required 
                type="text" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                required 
                type="tel" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              required 
              type="email" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
              <select 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-secondary outline-none"
                value={formData.product}
                onChange={e => setFormData({...formData, product: e.target.value})}
              >
                <option value="">Select a Product</option>
                {PRODUCTS.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input 
                type="number" 
                placeholder="e.g. 1000"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-secondary outline-none"
                value={formData.quantity}
                onChange={e => setFormData({...formData, quantity: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-secondary outline-none"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-secondary text-white font-bold py-3 rounded hover:bg-primary transition-colors">
            Submit Enquiry
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-2">
            Your data is secure. We never share your details with third parties.
          </p>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
