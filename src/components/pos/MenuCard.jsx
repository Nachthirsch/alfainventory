import React from 'react';
import { Plus, AlertCircle } from 'lucide-react';

/**
 * Menu Card component for POS
 */
const MenuCard = ({ item, onAddToCart }) => {
  const isAvailable = item.stockAvailable;

  return (
    <div
      className={`relative bg-white rounded-lg border shadow-sm overflow-hidden transition-all ${
        isAvailable
          ? 'border-gray-200 hover:shadow-md hover:border-blue-300 cursor-pointer'
          : 'border-gray-200 opacity-60'
      }`}
      onClick={() => isAvailable && onAddToCart(item)}
    >
      {/* Product Icon/Image */}
      <div
        className={`h-24 flex items-center justify-center text-4xl ${
          isAvailable ? 'bg-gray-50' : 'bg-gray-100'
        }`}
      >
        {item.icon}
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-medium text-gray-900 text-sm truncate" title={item.name}>
          {item.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-blue-600 font-bold text-sm">
            Rp {item.price.toLocaleString('id-ID')}
          </span>
          {isAvailable ? (
            <button
              className="p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(item);
              }}
            >
              <Plus className="w-4 h-4" />
            </button>
          ) : (
            <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded-full">
              Habis
            </span>
          )}
        </div>

        {/* Missing Ingredients Warning */}
        {!isAvailable && item.missingIngredients && (
          <div className="mt-2 flex items-start gap-1 text-xs text-red-600">
            <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
            <span>Bahan kurang: {item.missingIngredients.join(', ')}</span>
          </div>
        )}
      </div>

      {/* Stock Badge */}
      <div
        className={`absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded-full ${
          isAvailable
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}
      >
        {isAvailable ? 'Tersedia' : 'Habis'}
      </div>
    </div>
  );
};

export default MenuCard;
