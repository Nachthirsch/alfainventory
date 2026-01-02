import React, { useState } from 'react';
import { Plus, Download, Search, Filter, AlertTriangle } from 'lucide-react';
import { MainLayout, PageHeader } from '../components/layout';
import { Button, Tabs, SearchInput } from '../components/common';
import {
  InventoryTable,
  StockInModal,
  StockAdjustmentModal,
  StockHistoryTable,
  StockInTable,
  StockAdjustmentsTable,
} from '../components/inventory';
import { inventoryData } from '../utils/mockData';

/**
 * Inventory Page
 */
const InventoryPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [searchQuery, setSearchQuery] = useState('');
  const [isStockInModalOpen, setIsStockInModalOpen] = useState(false);
  const [isAdjustmentModalOpen, setIsAdjustmentModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const tabs = [
    { id: 'current', label: 'Stok Saat Ini', count: inventoryData.currentStock.length },
    { id: 'stock-in', label: 'Stok Masuk', count: inventoryData.stockInEntries.length },
    { id: 'adjustments', label: 'Penyesuaian', count: inventoryData.stockAdjustments.length },
    { id: 'history', label: 'Riwayat', count: inventoryData.stockHistory.length },
  ];

  // Filter current stock
  const filteredStock = inventoryData.currentStock.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuickAdd = (item) => {
    setSelectedItem(item);
    setIsStockInModalOpen(true);
  };

  const handleViewHistory = (item) => {
    setSelectedItem(item);
    setActiveTab('history');
  };

  // Calculate summary stats
  const lowStockCount = inventoryData.currentStock.filter((i) => i.status === 'low').length;
  const reorderCount = inventoryData.currentStock.filter((i) => i.status === 'reorder').length;

  return (
    <MainLayout>
      {/* Page Header */}
      <PageHeader
        title="Manajemen Inventaris"
        subtitle="Lacak dan kelola level stok"
        actions={
          <>
            <Button variant="outline" icon={Download} size="sm">
              Ekspor CSV
            </Button>
            <Button
              variant="outline"
              icon={AlertTriangle}
              size="sm"
              onClick={() => setIsAdjustmentModalOpen(true)}
            >
              Penyesuaian
            </Button>
            <Button
              variant="primary"
              icon={Plus}
              onClick={() => {
                setSelectedItem(null);
                setIsStockInModalOpen(true);
              }}
            >
              Stok Masuk
            </Button>
          </>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Total Item</p>
          <p className="text-2xl font-bold text-gray-900">
            {inventoryData.currentStock.length}
          </p>
        </div>
        <div className="bg-green-50 rounded-lg border border-green-200 p-4">
          <p className="text-sm text-green-600">Stok Aman</p>
          <p className="text-2xl font-bold text-green-700">
            {inventoryData.currentStock.filter((i) => i.status === 'safe').length}
          </p>
        </div>
        <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-4">
          <p className="text-sm text-yellow-600">Segera Pesan</p>
          <p className="text-2xl font-bold text-yellow-700">{reorderCount}</p>
        </div>
        <div className="bg-red-50 rounded-lg border border-red-200 p-4">
          <p className="text-sm text-red-600">Stok Rendah</p>
          <p className="text-2xl font-bold text-red-700">{lowStockCount}</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="mb-6" />

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchInput
            placeholder="Cari item..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" icon={Filter}>
          Saring
        </Button>
      </div>

      {/* Tab Content */}
      {activeTab === 'current' && (
        <InventoryTable
          items={filteredStock}
          onQuickAdd={handleQuickAdd}
          onViewHistory={handleViewHistory}
        />
      )}

      {activeTab === 'stock-in' && (
        <StockInTable entries={inventoryData.stockInEntries} />
      )}

      {activeTab === 'adjustments' && (
        <StockAdjustmentsTable adjustments={inventoryData.stockAdjustments} />
      )}

      {activeTab === 'history' && (
        <StockHistoryTable history={inventoryData.stockHistory} />
      )}

      {/* Stock In Modal */}
      <StockInModal
        isOpen={isStockInModalOpen}
        onClose={() => {
          setIsStockInModalOpen(false);
          setSelectedItem(null);
        }}
        item={selectedItem}
      />

      {/* Stock Adjustment Modal */}
      <StockAdjustmentModal
        isOpen={isAdjustmentModalOpen}
        onClose={() => {
          setIsAdjustmentModalOpen(false);
          setSelectedItem(null);
        }}
        item={selectedItem}
      />
    </MainLayout>
  );
};

export default InventoryPage;
