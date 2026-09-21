import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { AdminLogin } from './AdminLogin';
import { AdminNavbar } from './AdminNavbar';
import { AdminDashboard } from './AdminDashboard';
import { AdminProductManagement } from './AdminProductManagement';
import { AdminProductForm } from './AdminProductForm';
import { AdminCategoryManagement } from './AdminCategoryManagement';
import { AdminEnquiriesView } from './AdminEnquiriesView';

export const AdminContainer: React.FC = () => {
  const { isAdminLoggedIn, adminPage } = useCatalog();

  if (!isAdminLoggedIn) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <AdminNavbar />
      <main className="flex-1 pb-16">
        {adminPage === 'dashboard' && <AdminDashboard />}
        {adminPage === 'products' && <AdminProductManagement />}
        {adminPage === 'add-product' && <AdminProductForm mode="add" />}
        {adminPage === 'edit-product' && <AdminProductForm mode="edit" />}
        {adminPage === 'categories' && <AdminCategoryManagement />}
        {adminPage === 'enquiries' && <AdminEnquiriesView />}
      </main>
    </div>
  );
};
