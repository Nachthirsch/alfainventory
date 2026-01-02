import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

/**
 * Stock Movement Analysis Table component
 */
const StockMovementTable = ({ movements }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Ingredient
            </th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Used
            </th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Restocked
            </th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Net Change
            </th>
          </tr>
        </thead>
        <tbody>
          {movements.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3">
                <span className="font-medium text-gray-900">{item.ingredient}</span>
              </td>
              <td className="px-4 py-3 text-right">
                <span className="text-red-600">{item.used}</span>
              </td>
              <td className="px-4 py-3 text-right">
                <span className="text-green-600">{item.restocked}</span>
              </td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-1">
                  {item.netColor === 'green' ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`font-medium ${
                      item.netColor === 'green' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.netChange}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockMovementTable;
