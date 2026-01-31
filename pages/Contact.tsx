import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Section from '../components/Section';
import { COMPANY_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-20">
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300">We'd love to hear from you. Get in touch with us.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Our Location</h4>
                  <p className="text-gray-600 w-3/4">{COMPANY_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Phone Number</h4>
                  <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Sat 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Email Address</h4>
                  <p className="text-gray-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>
            
            {/* Embedded Map */}
            <div className="mt-10 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1697555555555!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
             <h3 className="text-2xl font-heading font-bold mb-6">Send us a Message</h3>
             
             {status === 'success' ? (
               <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded text-center">
                 <h4 className="font-bold text-xl mb-2">Message Sent!</h4>
                 <p>Thank you for contacting us. Our team will get back to you shortly.</p>
                 <button onClick={() => setStatus('idle')} className="mt-4 text-sm font-bold underline">Send another</button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                     <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                     <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="+91..." />
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                   <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                   <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Inquiry about..." />
                 </div>

                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                   <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                 </div>

                 <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-secondary text-white font-bold text-lg py-4 rounded-lg hover:bg-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                   {status === 'submitting' ? 'Sending...' : 'Send Message'}
                 </button>
                 <p className="text-xs text-gray-400 text-center">
                   This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                 </p>
               </form>
             )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
