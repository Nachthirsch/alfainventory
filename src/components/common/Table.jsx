import React from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Reusable Table component
 */
const Table = ({ children, className = '' }) => (
  <div className="overflow-x-auto">
    <table className={`w-full border-collapse ${className}`}>
      {children}
    </table>
  </div>
);

/**
 * Table Head component
 */
export const TableHead = ({ children, className = '' }) => (
  <thead className={`bg-gray-50 ${className}`}>{children}</thead>
);

/**
 * Table Body component
 */
export const TableBody = ({ children, className = '' }) => (
  <tbody className={`divide-y divide-gray-100 ${className}`}>{children}</tbody>
);

/**
 * Table Row component
 */
export const TableRow = ({ children, className = '', hover = true, onClick }) => (
  <tr
    className={`${hover ? 'hover:bg-gray-50 transition-colors' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    onClick={onClick}
  >
    {children}
  </tr>
);

/**
 * Table Header Cell component
 */
export const TableHeader = ({
  children,
  className = '',
  sortable = false,
  sortDirection,
  onSort,
  align = 'left',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <th
      className={`px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200 ${alignClasses[align]} ${sortable ? 'cursor-pointer select-none' : ''} ${className}`}
      onClick={sortable ? onSort : undefined}
    >
      <div className={`flex items-center gap-1 ${align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : ''}`}>
        {children}
        {sortable && (
          <span className="flex flex-col">
            <ChevronUp
              className={`w-3 h-3 ${sortDirection === 'asc' ? 'text-blue-600' : 'text-gray-300'}`}
            />
            <ChevronDown
              className={`w-3 h-3 -mt-1 ${sortDirection === 'desc' ? 'text-blue-600' : 'text-gray-300'}`}
            />
          </span>
        )}
      </div>
    </th>
  );
};

/**
 * Table Cell component
 */
export const TableCell = ({ children, className = '', align = 'left' }) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <td className={`px-4 py-3 text-sm text-gray-700 ${alignClasses[align]} ${className}`}>
      {children}
    </td>
  );
};

/**
 * Table Pagination component
 */
export const TablePagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  totalItems = 0,
  itemsPerPage = 10,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
      <div className="text-sm text-gray-600">
        Menampilkan {startItem} sampai {endItem} dari {totalItems} hasil
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="px-3 py-1 text-sm">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1 rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Table;
