import { Product, Service, NavItem } from './types';

export const COMPANY_INFO = {
  name: "EcoPrint Paper Bags Pvt Ltd",
  phone: "+91 98765 43210",
  email: "sales@ecoprintbags.com",
  address: "No. 123, Industrial Estate, Salem Main Road, Tamil Nadu, India",
  whatsapp: "919876543210"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
];

// NOTE: 'image' field now only contains the filename WITHOUT extension.
// The app will automatically try .jpg, .png, .jpeg, .webp
export const PRODUCTS: Product[] = [
  {
    id: 'cherry-shoppe',
    name: 'Cherry Shoppe Retail Bag',
    description: 'Durable brown kraft paper bag with twisted paper handles and prominent red logo branding.',
    image: 'cherry-shoppe', 
    category: 'Retail'
  },
  {
    id: 'find-to-fit',
    name: 'Find To Fit Womens Wear',
    description: 'Premium brown shopping bag with bold black "Find To Fit" logo and sturdy handles.',
    image: 'find-to-fit',
    category: 'Fashion'
  },
  {
    id: 'go-green',
    name: 'Go Green Eco Bag',
    description: 'White paper bag featuring green "Go Green" typography and a sprout icon with rope handles.',
    image: 'go-green',
    category: 'Eco-Friendly'
  },
  {
    id: 'wedding-ganesh',
    name: 'Wedding Return Gift Bag',
    description: 'Traditional bag with intricate red Ganesha design and Tamil text, perfect for wedding thamboolam.',
    image: 'wedding-ganesh',
    category: 'Events'
  },
  {
    id: 'myharvest',
    name: 'myHarvest Farms Pouch',
    description: 'Custom-printed brown paper pouch with decorative borders, ideal for organic seeds and produce.',
    image: 'myharvest',
    category: 'Food'
  },
  {
    id: 'nior-burger',
    name: 'Nior Burger Takeout',
    description: 'Trendy fast-food carry bag with "Every Day is a Burger Day" slogan and burger icon.',
    image: 'nior-burger',
    category: 'Food'
  },
  {
    id: 'bhoopathy',
    name: 'Bhoopathy Bakery',
    description: 'Wide-bottom kraft bag with elegant script typography, designed specifically for cake boxes.',
    image: 'bhoopathy-bakery',
    category: 'Food'
  },
  {
    id: 'grand-estancia',
    name: 'Grand Estancia Hotel',
    description: 'Minimalist and elegant brown paper bag for premium hotel amenities and guests.',
    image: 'grand-estancia',
    category: 'Hospitality'
  },
  {
    id: 'quarterly-meeting',
    name: 'Corporate Event Bag',
    description: 'Clean white paper bag with custom green text printing for official meetings and corporate events.',
    image: 'quarterly-meeting',
    category: 'Corporate'
  },
  {
    id: 'oho-corea',
    name: 'Oho Corea Bag',
    description: 'Custom branded brown paper bag with distinct red logo and contact details for retail.',
    image: 'oho-corea',
    category: 'Retail'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Custom Designing',
    description: 'Our expert design team creates unique layouts for your brand identity.',
    icon: 'PenTool'
  },
  {
    id: '2',
    title: 'Offset Printing',
    description: 'High-quality 4-color printing ensuring vibrant and sharp logos.',
    icon: 'Printer'
  },
  {
    id: '3',
    title: 'Bulk Manufacturing',
    description: 'Capacity to produce 100,000+ bags daily for large scale requirements.',
    icon: 'Factory'
  }
];
