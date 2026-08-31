export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'amigurumi' | 'tercos' | 'sacramento' | 'mobile' | 'decoracao' | 'Baby'| 'Velas';
  price: number;
  image: string;
  description: string;
  dimensions: string;
  materials: string[];
  isPopular?: boolean;
  isNew?: boolean;
  customizationOptions?: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  city: string;
  rating: number;
  comment: string;
  productName: string;
  avatarUrl?: string;
  date: string;
}

export interface CustomOrderState {
  saintType: string;
  size: '15cm' | '24cm' | '25cm';
  customNameTag: string;
  giftBox: boolean;
  specialRequests: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'whatsapp' | 'email';
}
