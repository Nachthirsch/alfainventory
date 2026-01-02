import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '../common';
import CartItem from './CartItem';

/**
 * Cart Summary component
 */
const CartSummary = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
  orderNumber = '#0784',
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.1); // 10% tax
  const total = subtotal + tax;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <h3 className="font-semibold text-gray-900">Order {orderNumber}</h3>
          </div>
          {items.length > 0 && (
            <button
              onClick={onClearCart}
              className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemoveItem}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <ShoppingCart className="w-12 h-12 mb-2" />
            <p className="text-sm">Cart is empty</p>
            <p className="text-xs">Add items to start an order</p>
          </div>
        )}
      </div>

      {/* Summary */}
      {items.length > 0 && (
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax (10%)</span>
              <span className="text-gray-900">Rp {tax.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
              <span className="text-gray-900">Total</span>
              <span className="text-blue-600">Rp {total.toLocaleString('id-ID')}</span>
            </div>
          </div>

          <Button
            variant="primary"
            className="w-full min-h-12"
            onClick={onCheckout}
          >
            Process Payment
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
