import React from 'react';
import { Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import Table, { TableHead, TableBody, TableRow, TableHeader, TableCell, TablePagination } from '../common/Table';
import Badge from '../common/Badge';

/**
 * Product Table component
 */
const ProductTable = ({ products, onView, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <Table>
        <TableHead>
          <TableRow hover={false}>
            <TableHeader>Produk</TableHeader>
            <TableHeader>Tipe</TableHeader>
            <TableHeader>Kategori</TableHeader>
            <TableHeader>Unit Bisnis</TableHeader>
            <TableHeader align="right">Harga</TableHeader>
            <TableHeader align="center">Aksi</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{product.icon}</span>
                  <span className="font-medium text-gray-900">{product.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={product.type === 'recipe' ? 'purple' : 'info'}
                  size="sm"
                >
                  {product.type === 'recipe' ? '📝 Resep' : '✅ Sederhana'}
                </Badge>
              </TableCell>
              <TableCell>
                <span className="text-gray-600">{product.category}</span>
              </TableCell>
              <TableCell>
                <span className="text-gray-600">{product.businessUnit}</span>
              </TableCell>
              <TableCell align="right">
                <span className="font-medium text-gray-900">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
              </TableCell>
              <TableCell align="center">
                <div className="flex items-center justify-center gap-1">
                  <button
                    onClick={() => onView(product)}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    title="Lihat Detail"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onEdit(product)}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(product)}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
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
        totalItems={products.length}
        itemsPerPage={10}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default ProductTable;
