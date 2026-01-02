import React from 'react';

/**
 * Stock Card component for displaying stock status
 */
const StockCard = ({ item }) => {
  const statusStyles = {
    green: {
      badge: 'bg-green-100 text-green-800',
      dot: 'bg-green-500',
      border: 'border-green-200',
    },
    yellow: {
      badge: 'bg-yellow-100 text-yellow-800',
      dot: 'bg-yellow-500',
      border: 'border-yellow-200',
    },
    red: {
      badge: 'bg-red-100 text-red-800',
      dot: 'bg-red-500',
      border: 'border-red-200',
    },
  };

  const style = statusStyles[item.statusColor] || statusStyles.green;

  return (
    <div
      className={`flex-shrink-0 w-36 md:w-40 p-3 bg-white rounded-lg border ${style.border} shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`w-2 h-2 rounded-full ${style.dot}`} />
        <span
          className={`px-2 py-0.5 text-xs font-medium rounded-full ${style.badge}`}
        >
          {item.status}
        </span>
      </div>
      <p className="text-sm font-medium text-gray-900 truncate" title={item.name}>
        {item.name}
      </p>
      <p className="text-lg font-bold text-gray-700 mt-1">{item.quantity}</p>
    </div>
  );
};

export default StockCard;
