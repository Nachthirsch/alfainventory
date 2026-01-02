import React, { useState } from 'react';
import { Plus, Search, Filter, Download } from 'lucide-react';
import { MainLayout, PageHeader } from '../components/layout';
import { Button, Tabs, SearchInput } from '../components/common';
import { ProductTable, AddProductModal, ProductDetailModal } from '../components/products';
import { productsData } from '../utils/mockData';

/**
 * Products Page
 */
const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const tabs = [
    { id: 'all', label: 'All Products', count: productsData.productsList.length },
    { id: 'recipe', label: 'Recipe Products', count: productsData.productsList.filter((p) => p.type === 'recipe').length },
    { id: 'simple', label: 'Simple Products', count: productsData.productsList.filter((p) => p.type === 'simple').length },
  ];

  // Filter products
  const filteredProducts = productsData.productsList.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || product.type === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleView = (product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsAddModalOpen(true);
  };

  const handleDelete = (product) => {
    // UI only - would show confirmation modal
    console.log('Delete:', product);
  };

  return (
    <MainLayout>
      {/* Page Header */}
      <PageHeader
        title="Master Products"
        subtitle="Manage products and recipes"
        actions={
          <>
            <Button variant="outline" icon={Download} size="sm">
              Export
            </Button>
            <Button
              variant="primary"
              icon={Plus}
              onClick={() => {
                setSelectedProduct(null);
                setIsAddModalOpen(true);
              }}
            >
              Add Product
            </Button>
          </>
        }
      />

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="mb-6" />

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchInput
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" icon={Filter}>
          Filter
        </Button>
      </div>

      {/* Products Table */}
      <ProductTable
        products={filteredProducts}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add/Edit Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
      />
    </MainLayout>
  );
};

export default ProductsPage;
