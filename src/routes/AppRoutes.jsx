import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import DashboardPage from '../pages/DashboardPage';
import POSPage from '../pages/POSPage';
import ProductsPage from '../pages/ProductsPage';
import InventoryPage from '../pages/InventoryPage';
import ReportsPage from '../pages/ReportsPage';

/**
 * Application Routes
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Main Routes */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/pos" element={<POSPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      
      {/* 404 - Redirect to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
