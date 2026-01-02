import React from 'react';
import { ChevronRight, Award } from 'lucide-react';
import Card from '../common/Card';
import TopProductItem from './TopProductItem';

/**
 * Top Products Panel component
 */
const TopProductsPanel = ({ products }) => {
  return (
    <Card padding="default">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">
            Produk Terlaris
          </h3>
        </div>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
          Lihat Laporan
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Products List */}
      <div className="space-y-1">
        {products.map((product, index) => (
          <TopProductItem key={product.id} product={product} index={index} />
        ))}
      </div>
    </Card>
  );
};

export default TopProductsPanel;
