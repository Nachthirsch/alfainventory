import React from 'react';
import { ArrowDownCircle, ShoppingCart, AlertTriangle } from 'lucide-react';
import Table, { TableHead, TableBody, TableRow, TableHeader, TableCell, TablePagination } from '../common/Table';
import Badge from '../common/Badge';

/**
 * Stock History Table component
 */
const StockHistoryTable = ({ history }) => {
  const getTypeConfig = (type) => {
    switch (type) {
      case 'in':
        return {
          icon: '📥',
          label: 'Stok Masuk',
          variant: 'success',
          textColor: 'text-green-600',
        };
      case 'sale':
        return {
          icon: '🛒',
          label: 'Penjualan',
          variant: 'info',
          textColor: 'text-blue-600',
        };
      case 'adjustment':
        return {
          icon: '🗑️',
          label: 'Penyesuaian',
          variant: 'warning',
          textColor: 'text-yellow-600',
        };
      default:
        return {
          icon: '📦',
          label: type,
          variant: 'default',
          textColor: 'text-gray-600',
        };
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <Table>
        <TableHead>
          <TableRow hover={false}>
            <TableHeader>Tanggal & Waktu</TableHeader>
            <TableHeader>Item</TableHeader>
            <TableHeader align="center">Tipe</TableHeader>
            <TableHeader align="right">Jumlah</TableHeader>
            <TableHeader align="right">Saldo</TableHeader>
            <TableHeader>Catatan</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((entry) => {
            const config = getTypeConfig(entry.type);
            const isNegative = entry.quantity.startsWith('-');
            
            return (
              <TableRow key={entry.id}>
                <TableCell>
                  <span className="text-gray-600 text-sm">{entry.datetime}</span>
                </TableCell>
                <TableCell>
                  <span className="font-medium text-gray-900">{entry.item}</span>
                </TableCell>
                <TableCell align="center">
                  <div className="flex items-center justify-center gap-1">
                    <span>{config.icon}</span>
                    <Badge variant={config.variant} size="sm">
                      {config.label}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <span className={`font-medium ${isNegative ? 'text-red-600' : 'text-green-600'}`}>
                    {entry.quantity}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <span className="font-bold text-gray-900">{entry.balance}</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-500 text-sm">{entry.notes}</span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        currentPage={1}
        totalPages={1}
        totalItems={history.length}
        itemsPerPage={10}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default StockHistoryTable;
