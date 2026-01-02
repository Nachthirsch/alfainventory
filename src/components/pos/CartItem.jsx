import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

/**
 * Cart Item component
 */
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const subtotal = item.price * item.quantity;

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 text-sm truncate">{item.name}</h4>
        <p className="text-xs text-gray-500">
          Rp {item.price.toLocaleString('id-ID')} × {item.quantity}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
          disabled={item.quantity <= 1}
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Subtotal & Remove */}
      <div className="text-right">
        <p className="font-semibold text-gray-900 text-sm">
          Rp {subtotal.toLocaleString('id-ID')}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 mt-1"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
