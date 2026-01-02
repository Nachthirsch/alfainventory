import React from 'react';
import { DollarSign, Package } from 'lucide-react';

/**
 * Stock Valuation component
 */
const StockValuation = ({ valuation }) => {
  const formatCurrency = (value) => `Rp ${value.toLocaleString('id-ID')}`;

  return (
    <div>
      {/* Total Value */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 mb-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="w-5 h-5" />
          <span className="text-sm font-medium opacity-90">Total Nilai Stok</span>
        </div>
        <p className="text-3xl font-bold">{formatCurrency(valuation.totalValue)}</p>
      </div>

      {/* Business Unit Breakdown */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Bakso Malang</p>
          <p className="text-lg font-bold text-gray-900">
            {formatCurrency(valuation.baksoUnitValue)}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Steam Cuci</p>
          <p className="text-lg font-bold text-gray-900">
            {formatCurrency(valuation.steamUnitValue)}
          </p>
        </div>
      </div>

      {/* Top Valuable Items */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
          <Package className="w-4 h-4" />
          Item Bernilai Tinggi
        </h4>
        <div className="space-y-2">
          {valuation.topValuable.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-sm text-gray-700">{item.item}</span>
              <span className="font-medium text-gray-900">
                {formatCurrency(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockValuation;
