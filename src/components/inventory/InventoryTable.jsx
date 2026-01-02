import React from 'react';
import { Plus, Eye, History } from 'lucide-react';
import Table, { TableHead, TableBody, TableRow, TableHeader, TableCell, TablePagination } from '../common/Table';
import Badge from '../common/Badge';

/**
 * Inventory Table component
 */
const InventoryTable = ({ items, onQuickAdd, onViewHistory }) => {
  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'safe':
        return 'success';
      case 'reorder':
        return 'warning';
      case 'low':
        return 'danger';
      default:
        return 'default';
    }
  };

  const getStatusDotColor = (statusColor) => {
    switch (statusColor) {
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <Table>
        <TableHead>
          <TableRow hover={false}>
            <TableHeader>Item</TableHeader>
            <TableHeader>Tipe</TableHeader>
            <TableHeader align="right">Stok Saat Ini</TableHeader>
            <TableHeader align="right">Stok Minimum</TableHeader>
            <TableHeader align="center">Status</TableHeader>
            <TableHeader align="center">Aksi</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${getStatusDotColor(item.statusColor)}`} />
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-gray-600">{item.type}</span>
              </TableCell>
              <TableCell align="right">
                <span className={`font-medium ${item.statusColor === 'red' ? 'text-red-600' : 'text-gray-900'}`}>
                  {item.current} {item.unit}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className="text-gray-600">
                  {item.minimum} {item.unit}
                </span>
              </TableCell>
              <TableCell align="center">
                <Badge variant={getStatusBadgeVariant(item.status)} size="sm">
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell align="center">
                <div className="flex items-center justify-center gap-1">
                  <button
                    onClick={() => onQuickAdd(item)}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
                    title="Stok Masuk Cepat"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onViewHistory(item)}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    title="Lihat Riwayat"
                  >
                    <History className="w-4 h-4" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        currentPage={1}
        totalPages={1}
        totalItems={items.length}
        itemsPerPage={10}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default InventoryTable;
