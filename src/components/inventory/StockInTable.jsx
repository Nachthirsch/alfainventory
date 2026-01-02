import React from 'react';
import Table, { TableHead, TableBody, TableRow, TableHeader, TableCell, TablePagination } from '../common/Table';

/**
 * Stock In Table component
 */
const StockInTable = ({ entries }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <Table>
        <TableHead>
          <TableRow hover={false}>
            <TableHeader>Date</TableHeader>
            <TableHeader>Item</TableHeader>
            <TableHeader align="right">Quantity</TableHeader>
            <TableHeader>Supplier</TableHeader>
            <TableHeader align="right">Cost</TableHeader>
            <TableHeader>Entry By</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>
                <span className="text-gray-600 text-sm">{entry.date}</span>
              </TableCell>
              <TableCell>
                <span className="font-medium text-gray-900">{entry.item}</span>
              </TableCell>
              <TableCell align="right">
                <span className="text-green-600 font-medium">+{entry.quantity}</span>
              </TableCell>
              <TableCell>
                <span className="text-gray-600">{entry.supplier}</span>
              </TableCell>
              <TableCell align="right">
                <span className="font-medium text-gray-900">
                  Rp {entry.cost.toLocaleString('id-ID')}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-gray-600">{entry.entryBy}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        currentPage={1}
        totalPages={1}
        totalItems={entries.length}
        itemsPerPage={10}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default StockInTable;
