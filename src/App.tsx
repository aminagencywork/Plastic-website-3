/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CatalogProvider, useCatalog } from './context/CatalogContext';
import { PublicContainer } from './components/public/PublicContainer';
import { AdminContainer } from './components/admin/AdminContainer';

const AppContent: React.FC = () => {
  const { activeView } = useCatalog();

  return (
    <>
      {activeView === 'public' ? <PublicContainer /> : <AdminContainer />}
    </>
  );
};

export default function App() {
  return (
    <CatalogProvider>
      <AppContent />
    </CatalogProvider>
  );
}
