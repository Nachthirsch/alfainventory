import React from 'react';
import { TrendingUp } from 'lucide-react';
import Card, { CardHeader, CardTitle } from '../common/Card';

/**
 * Sales Trend Chart component (Mock visualization)
 */
const SalesTrendChart = ({ data }) => {
  // Calculate max value for scaling
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Sales Trend</h3>
          <p className="text-sm text-gray-500">This week's performance</p>
        </div>
        <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          +18.2%
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-48 md:h-56">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-b border-gray-100 w-full" />
          ))}
        </div>

        {/* Bars */}
        <div className="absolute inset-0 flex items-end justify-between px-2 pb-6">
          {data.map((item, index) => {
            const height = (item.value / maxValue) * 100;
            return (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div
                  className="w-full max-w-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all hover:from-blue-700 hover:to-blue-500 cursor-pointer relative group"
                  style={{ height: `${height}%` }}
                >
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Rp {(item.value / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* X-axis Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 text-center">
              <span className="text-xs text-gray-500">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded" />
          <span className="text-sm text-gray-600">Daily Sales</span>
        </div>
      </div>
    </Card>
  );
};

export default SalesTrendChart;
