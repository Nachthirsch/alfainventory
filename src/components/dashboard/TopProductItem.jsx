import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';

/**
 * Top Product Item component
 */
const TopProductItem = ({ product }) => {
  const rankColors = {
    1: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    2: 'bg-gray-100 text-gray-800 border-gray-200',
    3: 'bg-orange-100 text-orange-800 border-orange-200',
  };

  const rankColor = rankColors[product.rank] || 'bg-gray-50 text-gray-600 border-gray-100';

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      {/* Rank Badge */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${rankColor}`}
      >
        {product.rank <= 3 ? (
          <Trophy className="w-4 h-4" />
        ) : (
          product.rank
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <TrendingUp className="w-3 h-3" />
          <span>{product.quantity} sold</span>
        </div>
      </div>

      {/* Revenue */}
      <div className="text-right">
        <p className="text-sm font-semibold text-gray-900">{product.revenue}</p>
      </div>
    </div>
  );
};

export default TopProductItem;
