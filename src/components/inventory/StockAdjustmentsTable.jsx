import React from 'react';
import Table, { TableHead, TableBody, TableRow, TableHeader, TableCell, TablePagination } from '../common/Table';
import Badge from '../common/Badge';

/**
 * Stock Adjustments Table component
 */
const StockAdjustmentsTable = ({ adjustments }) => {
  const getTypeVariant = (type) => {
    switch (type) {
      case 'Waste':
        return 'warning';
      case 'Expired':
        return 'danger';
      case 'Damaged':
        return 'danger';
      default:
        return 'default';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <Table>
        <TableHead>
          <TableRow hover={false}>
            <TableHeader>Date</TableHeader>
            <TableHeader>Item</TableHeader>
            <TableHeader align="right">Quantity</TableHeader>
            <TableHeader align="center">Type</TableHeader>
            <TableHeader>Reason</TableHeader>
            <TableHeader>By</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {adjustments.map((adj) => (
            <TableRow key={adj.id}>
              <TableCell>
                <span className="text-gray-600 text-sm">{adj.date}</span>
              </TableCell>
              <TableCell>
                <span className="font-medium text-gray-900">{adj.item}</span>
              </TableCell>
              <TableCell align="right">
                <span className="text-red-600 font-medium">{adj.quantity}</span>
              </TableCell>
              <TableCell align="center">
                <Badge variant={getTypeVariant(adj.type)} size="sm">
                  {adj.type}
                </Badge>
              </TableCell>
              <TableCell>
                <span className="text-gray-600">{adj.reason}</span>
              </TableCell>
              <TableCell>
                <span className="text-gray-600">{adj.by}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        currentPage={1}
        totalPages={1}
        totalItems={adjustments.length}
        itemsPerPage={10}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default StockAdjustmentsTable;
