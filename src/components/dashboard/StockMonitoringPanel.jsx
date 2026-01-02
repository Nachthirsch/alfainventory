import React from 'react';
import { ChevronRight } from 'lucide-react';
import Card from '../common/Card';
import StockCard from './StockCard';

/**
 * Stock Monitoring Panel component
 */
const StockMonitoringPanel = ({ title, items, businessUnit }) => {
  return (
    <Card padding="default">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{businessUnit}</p>
        </div>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal Scrollable Stock Cards */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        {items.map((item) => (
          <StockCard key={item.id} item={item} />
        ))}
      </div>

      {/* Stock Status Summary */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-xs text-gray-600">
            Safe: {items.filter((i) => i.statusColor === 'green').length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full" />
          <span className="text-xs text-gray-600">
            Reorder: {items.filter((i) => i.statusColor === 'yellow').length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          <span className="text-xs text-gray-600">
            Low: {items.filter((i) => i.statusColor === 'red').length}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default StockMonitoringPanel;
