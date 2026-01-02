import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

/**
 * Profit & Loss Statement component
 */
const ProfitLossStatement = ({ data }) => {
  const formatCurrency = (value) => `Rp ${value.toLocaleString('id-ID')}`;

  return (
    <div className="space-y-4">
      {/* Revenue Section */}
      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-900">Pendapatan</span>
          </div>
          <span className="text-xl font-bold text-green-600">
            {formatCurrency(data.revenue)}
          </span>
        </div>
      </div>

      {/* COGS Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="font-semibold text-gray-900 mb-3">Harga Pokok Penjualan (HPP)</div>
        <div className="space-y-2 pl-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Biaya Bahan</span>
            <span className="text-gray-900">{formatCurrency(data.cogsIngredients)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Biaya Produk</span>
            <span className="text-gray-900">{formatCurrency(data.cogsProducts)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-200">
          <span className="font-medium text-gray-900">Total HPP</span>
          <span className="font-semibold text-red-600">
            ({formatCurrency(data.totalCogs)})
          </span>
        </div>
      </div>

      {/* Gross Profit */}
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-gray-900">Laba Kotor</span>
            <span className="text-sm text-gray-500 ml-2">
              ({data.grossMargin}% margin)
            </span>
          </div>
          <span className="text-xl font-bold text-blue-600">
            {formatCurrency(data.grossProfit)}
          </span>
        </div>
      </div>

      {/* Operating Expenses */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="font-semibold text-gray-900 mb-3">Biaya Operasional</div>
        <div className="space-y-2 pl-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Gaji & Upah</span>
            <span className="text-gray-900">{formatCurrency(data.salaries)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Utilitas</span>
            <span className="text-gray-900">{formatCurrency(data.utilities)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Sewa</span>
            <span className="text-gray-900">{formatCurrency(data.rent)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Biaya Lainnya</span>
            <span className="text-gray-900">{formatCurrency(data.otherExpenses)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-200">
          <span className="font-medium text-gray-900">Total Biaya Operasional</span>
          <span className="font-semibold text-red-600">
            ({formatCurrency(data.totalOpex)})
          </span>
        </div>
      </div>

      {/* Net Profit */}
      <div className={`rounded-lg p-4 ${data.netProfit >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className={`w-5 h-5 ${data.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`} />
            <div>
              <span className="font-bold text-gray-900">Laba Bersih</span>
              <span className="text-sm text-gray-600 ml-2">
                ({data.netMargin}% margin)
              </span>
            </div>
          </div>
          <span className={`text-2xl font-bold ${data.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(data.netProfit)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossStatement;
