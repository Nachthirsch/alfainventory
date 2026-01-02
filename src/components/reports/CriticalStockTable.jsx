import React from 'react';
import { AlertTriangle, ShoppingCart } from 'lucide-react';
import Badge from '../common/Badge';

/**
 * Critical Stock Table component
 */
const CriticalStockTable = ({ items }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Item
            </th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Saat Ini
            </th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Minimum
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
              Tindakan Diperlukan
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="font-medium text-gray-900">{item.item}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                <span className="text-red-600 font-medium">{item.current}</span>
              </td>
              <td className="px-4 py-3 text-right">
                <span className="text-gray-600">{item.minimum}</span>
              </td>
              <td className="px-4 py-3">
                <Badge variant="danger" size="sm">
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  {item.action}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CriticalStockTable;
