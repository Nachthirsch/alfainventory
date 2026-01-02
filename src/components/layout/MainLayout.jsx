import React from 'react';
import Navigation from './Navigation';

/**
 * Main Layout component that wraps all pages
 */
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
