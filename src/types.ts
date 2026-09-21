export type ProductStatus = 'published' | 'draft';
export type CategoryStatus = 'active' | 'inactive';

export interface ProductImage {
  id: string;
  imageUrl: string;
  isPrimary: boolean;
  altText?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  productCode: string;
  material: string;
  color: string;
  dimensions: string;
  weight: string;
  capacity?: string;
  applications: string[];
  images: ProductImage[];
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  status: CategoryStatus;
  productCount?: number;
  createdAt: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  establishedYear: number;
  experienceYears: number;
  plantArea: string;
  annualCapacity: string;
  machinesCount: number;
  certifications: string[];
  phone: string;
  whatsapp: string;
  email: string;
  salesEmail: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  businessHours: string;
  googleMapsEmbedUrl: string;
}

export interface B2BEnquiry {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  productId?: string;
  productName?: string;
  productCode?: string;
  quantity?: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

export type PublicPage = 'home' | 'products' | 'product-detail' | 'about' | 'contact' | 'capabilities';
export type AdminPage = 'dashboard' | 'products' | 'add-product' | 'edit-product' | 'categories' | 'enquiries';
