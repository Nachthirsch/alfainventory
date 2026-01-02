import React from 'react';
import { Trophy } from 'lucide-react';

/**
 * Top Selling Products Table component
 */
const TopSellingTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-center px-4 py-3 text-xs font-semibold text-gray-600 uppercase w-16">
              Peringkat
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Produk
            </th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Qty Terjual
            </th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Pendapatan
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const rankColors = {
              1: 'bg-yellow-100 text-yellow-800 border-yellow-200',
              2: 'bg-gray-100 text-gray-800 border-gray-200',
              3: 'bg-orange-100 text-orange-800 border-orange-200',
            };
            const rankColor = rankColors[product.rank] || 'bg-gray-50 text-gray-600 border-gray-100';

            return (
              <tr key={product.rank} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm border ${rankColor}`}
                  >
                    {product.rank <= 3 ? <Trophy className="w-4 h-4" /> : product.rank}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="font-medium text-gray-900">{product.name}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="text-gray-600">{product.qty}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-medium text-gray-900">
                    Rp {product.revenue.toLocaleString('id-ID')}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingTable;
