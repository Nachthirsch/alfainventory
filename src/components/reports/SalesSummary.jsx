import React from 'react';
import { DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

/**
 * Sales Summary component
 */
const SalesSummary = ({ summary }) => {
  return (
    <div>
      {/* KPI Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm font-medium">Total Revenue</span>
          </div>
          <p className="text-xl font-bold text-gray-900">
            Rp {summary.totalRevenue.toLocaleString('id-ID')}
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-600 mb-1">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Transactions</span>
          </div>
          <p className="text-xl font-bold text-gray-900">{summary.totalTransactions}</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-purple-600 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Avg. Order</span>
          </div>
          <p className="text-xl font-bold text-gray-900">
            Rp {summary.averageOrder.toLocaleString('id-ID')}
          </p>
        </div>
      </div>

      {/* Business Unit Breakdown */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Revenue by Business Unit</h4>
        
        {/* Bakso Malang */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-600">Bakso Malang</span>
            <span className="text-sm font-medium">
              Rp {summary.baksoRevenue.toLocaleString('id-ID')} ({summary.baksoPercentage}%)
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${summary.baksoPercentage}%` }}
            />
          </div>
        </div>

        {/* Steam Cuci */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-600">Steam Cuci Motor/Mobil</span>
            <span className="text-sm font-medium">
              Rp {summary.steamRevenue.toLocaleString('id-ID')} ({summary.steamPercentage}%)
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${summary.steamPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
