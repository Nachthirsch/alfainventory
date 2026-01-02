import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

/**
 * Stock Status Overview component with visual bar
 */
const StockStatusOverview = ({ summary }) => {
  const statuses = [
    {
      label: 'Safe Stock',
      count: summary.safeStock,
      percentage: summary.safePercentage,
      color: 'bg-green-500',
      icon: CheckCircle,
      textColor: 'text-green-600',
    },
    {
      label: 'Reorder Soon',
      count: summary.reorderSoon,
      percentage: summary.reorderPercentage,
      color: 'bg-yellow-500',
      icon: AlertTriangle,
      textColor: 'text-yellow-600',
    },
    {
      label: 'Low Stock',
      count: summary.lowStock,
      percentage: summary.lowPercentage,
      color: 'bg-red-500',
      icon: XCircle,
      textColor: 'text-red-600',
    },
  ];

  return (
    <div>
      {/* Visual Bar */}
      <div className="h-6 rounded-full overflow-hidden flex mb-4">
        {statuses.map((status, index) => (
          <div
            key={index}
            className={`${status.color} transition-all`}
            style={{ width: `${status.percentage}%` }}
          />
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        {statuses.map((status, index) => {
          const Icon = status.icon;
          return (
            <div key={index} className="text-center">
              <div className={`flex items-center justify-center gap-1 ${status.textColor} mb-1`}>
                <Icon className="w-4 h-4" />
                <span className="text-2xl font-bold">{status.count}</span>
              </div>
              <p className="text-sm text-gray-600">{status.label}</p>
              <p className="text-xs text-gray-400">{status.percentage}%</p>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Total Items: <span className="font-semibold">{summary.totalItems}</span>
        </p>
      </div>
    </div>
  );
};

export default StockStatusOverview;
