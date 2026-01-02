import React, { useState } from 'react';
import { Search, Filter, Hash } from 'lucide-react';
import { MainLayout, PageHeader } from '../components/layout';
import { Button, Input } from '../components/common';
import { MenuCard, CartSummary, PaymentModal, ReceiptModal } from '../components/pos';
import { posData } from '../utils/mockData';

/**
 * POS (Point of Sale) Page
 */
const POSPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Bakso Jumbo', price: 25000, quantity: 1 },
    { id: 4, name: 'Es Teh Manis', price: 5000, quantity: 2 },
  ]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState('');

  // Filter menu items
  const filteredItems = posData.menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Cart functions
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      setCartItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity } : i))
      );
    }
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentConfirm = () => {
    setIsPaymentModalOpen(false);
    setIsReceiptModalOpen(true);
  };

  const handleReceiptClose = () => {
    setIsReceiptModalOpen(false);
    clearCart();
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  return (
    <MainLayout>
      {/* Page Header */}
      <PageHeader
        title="Kasir"
        subtitle="Proses pesanan dan transaksi"
        actions={
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
              <Hash className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Meja #"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="w-16 bg-transparent border-none focus:outline-none text-sm"
              />
            </div>
            <span className="text-sm text-gray-500">Pesanan #0784</span>
          </div>
        }
      />

      {/* Main Content - Split Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Menu Grid */}
        <div className="flex-1">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {posData.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>Tidak ada item ditemukan</p>
            </div>
          )}
        </div>

        {/* Right Side - Cart */}
        <div className="w-full lg:w-96 lg:sticky lg:top-20 lg:h-[calc(100vh-120px)]">
          <CartSummary
            items={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
            onClearCart={clearCart}
            onCheckout={handleCheckout}
            orderNumber="#0784"
          />
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        total={total}
        paymentMethods={posData.paymentMethods}
        onConfirmPayment={handlePaymentConfirm}
      />

      {/* Receipt Modal */}
      <ReceiptModal
        isOpen={isReceiptModalOpen}
        onClose={handleReceiptClose}
        orderData={{
          orderNumber: '#0784',
          items: cartItems,
          subtotal,
          tax,
          total,
          paymentMethod: 'cash',
          change: 50000,
        }}
      />
    </MainLayout>
  );
};

export default POSPage;
