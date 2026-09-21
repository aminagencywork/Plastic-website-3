import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Category, B2BEnquiry, CompanyInfo, PublicPage, AdminPage } from '../types';
import { initialProducts, initialCategories, initialCompanyInfo } from '../data/initialData';

interface CatalogContextType {
  products: Product[];
  categories: Category[];
  companyInfo: CompanyInfo;
  enquiries: B2BEnquiry[];
  isAdminLoggedIn: boolean;
  
  // Navigation & View State
  activeView: 'public' | 'admin';
  setActiveView: (view: 'public' | 'admin') => void;
  publicPage: PublicPage;
  setPublicPage: (page: PublicPage) => void;
  adminPage: AdminPage;
  setAdminPage: (page: AdminPage) => void;
  selectedProductSlug: string | null;
  setSelectedProductSlug: (slug: string | null) => void;
  activeCategoryFilter: string | null;
  setActiveCategoryFilter: (categoryId: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  editingProductId: string | null;
  setEditingProductId: (id: string | null) => void;
  editingCategoryId: string | null;
  setEditingCategoryId: (id: string | null) => void;
  quickEnquiryProduct: Product | null;
  setQuickEnquiryProduct: (prod: Product | null) => void;

  // Actions
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => Product;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: Omit<Category, 'id' | 'createdAt'>) => Category;
  updateCategory: (id: string, updates: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  submitEnquiry: (enquiryData: Omit<B2BEnquiry, 'id' | 'createdAt' | 'status'>) => void;
  markEnquiryStatus: (id: string, status: 'new' | 'contacted' | 'resolved') => void;
  loginAdmin: (email: string, pass: string) => boolean;
  logoutAdmin: () => void;
  resetToDefaults: () => void;
  navigateToProduct: (slug: string) => void;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PRODUCTS: 'apexplast_products_v1',
  CATEGORIES: 'apexplast_categories_v1',
  ENQUIRIES: 'apexplast_enquiries_v1',
  ADMIN_AUTH: 'apexplast_admin_auth_v1'
};

export const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return initialProducts;
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return initialCategories;
  });

  const [enquiries, setEnquiries] = useState<B2BEnquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      {
        id: 'enq-sample-1',
        name: 'Marcus Vance',
        companyName: 'Vance Auto Assembly Corp',
        email: 'procurement@vanceauto.com',
        phone: '+1 (555) 749-3820',
        productName: 'Heavy-Duty Euro Stackable Crate 6432',
        productCode: 'AP-EC-6432',
        quantity: '2,500 Units / Month',
        message: 'Requesting bulk quotation with custom company branding hot-stamped on both handles. We need delivery to our assembly plant.',
        createdAt: '2024-02-17T11:20:00.000Z',
        status: 'new'
      }
    ];
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });

  // Navigation
  const [activeView, setActiveView] = useState<'public' | 'admin'>('public');
  const [publicPage, setPublicPage] = useState<PublicPage>('home');
  const [adminPage, setAdminPage] = useState<AdminPage>('dashboard');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [quickEnquiryProduct, setQuickEnquiryProduct] = useState<Product | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, String(isAdminLoggedIn));
  }, [isAdminLoggedIn]);

  // Actions
  const addProduct = (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product => {
    const newProduct: Product = {
      ...productData,
      id: 'prod-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setProducts(prev => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === id ? { ...item, ...updates, updatedAt: new Date().toISOString() } : item
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(item => item.id !== id));
  };

  const addCategory = (catData: Omit<Category, 'id' | 'createdAt'>): Category => {
    const newCat: Category = {
      ...catData,
      id: 'cat-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
      createdAt: new Date().toISOString()
    };
    setCategories(prev => [...prev, newCat]);
    return newCat;
  };

  const updateCategory = (id: string, updates: Partial<Category>) => {
    setCategories(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const deleteCategory = (id: string) => {
    setCategories(prev => prev.filter(item => item.id !== id));
  };

  const submitEnquiry = (enquiryData: Omit<B2BEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnq: B2BEnquiry = {
      ...enquiryData,
      id: 'enq-' + Date.now().toString(36),
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    setEnquiries(prev => [newEnq, ...prev]);
  };

  const markEnquiryStatus = (id: string, status: 'new' | 'contacted' | 'resolved') => {
    setEnquiries(prev =>
      prev.map(e => (e.id === id ? { ...e, status } : e))
    );
  };

  const loginAdmin = (email: string, pass: string): boolean => {
    // Standard secure-looking check for Phase 1 admin
    if (
      (email.trim().toLowerCase() === 'admin@apexplast.com' && pass === 'admin123') ||
      (email.trim().toLowerCase() === 'admin' && pass === 'admin')
    ) {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    setActiveView('public');
  };

  const resetToDefaults = () => {
    setProducts(initialProducts);
    setCategories(initialCategories);
    localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
    localStorage.removeItem(STORAGE_KEYS.CATEGORIES);
  };

  const navigateToProduct = (slug: string) => {
    setSelectedProductSlug(slug);
    setActiveView('public');
    setPublicPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CatalogContext.Provider
      value={{
        products,
        categories,
        companyInfo: initialCompanyInfo,
        enquiries,
        isAdminLoggedIn,
        activeView,
        setActiveView,
        publicPage,
        setPublicPage,
        adminPage,
        setAdminPage,
        selectedProductSlug,
        setSelectedProductSlug,
        activeCategoryFilter,
        setActiveCategoryFilter,
        searchQuery,
        setSearchQuery,
        editingProductId,
        setEditingProductId,
        editingCategoryId,
        setEditingCategoryId,
        quickEnquiryProduct,
        setQuickEnquiryProduct,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory,
        updateCategory,
        deleteCategory,
        submitEnquiry,
        markEnquiryStatus,
        loginAdmin,
        logoutAdmin,
        resetToDefaults,
        navigateToProduct
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = () => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error('useCatalog must be used within a CatalogProvider');
  }
  return context;
};
