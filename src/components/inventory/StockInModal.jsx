import React, { useState } from 'react';
import { X, Package } from 'lucide-react';
import { Button, Input, Select, Textarea } from '../common';

/**
 * Stock In Modal component
 */
const StockInModal = ({ isOpen, onClose, item = null }) => {
  const [formData, setFormData] = useState({
    item: item?.name || '',
    quantity: '',
    unit: item?.unit || '',
    supplier: '',
    invoiceNumber: '',
    cost: '',
    notes: '',
  });

  if (!isOpen) return null;

  const supplierOptions = [
    { value: 'Supplier A', label: 'Pemasok A' },
    { value: 'Supplier B', label: 'Pemasok B' },
    { value: 'Supplier C', label: 'Pemasok C' },
    { value: 'Other', label: 'Lainnya' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Stok Masuk</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            {/* Date */}
            <Input
              label="Tanggal"
              type="datetime-local"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />

            {/* Item Selection */}
            {item ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Item</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-500">({item.current} {item.unit} tersedia)</span>
                </div>
              </div>
            ) : (
              <Select
                label="Item"
                placeholder="Pilih item"
                options={[
                  { value: 'bakso', label: 'Bakso' },
                  { value: 'mie', label: 'Mie' },
                  { value: 'sayur-sawi', label: 'Sayur Sawi' },
                ]}
              />
            )}

            {/* Quantity and Unit */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Jumlah"
                type="number"
                placeholder="0"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
              <Input
                label="Satuan"
                value={item?.unit || formData.unit}
                disabled={!!item}
                inputClassName={item ? 'bg-gray-100' : ''}
              />
            </div>

            {/* Supplier */}
            <Select
              label="Pemasok"
              placeholder="Pilih pemasok"
              options={supplierOptions}
              value={formData.supplier}
              onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
            />

            {/* Invoice Number */}
            <Input
              label="Nomor Faktur/PO"
              placeholder="cth: PO#123"
              value={formData.invoiceNumber}
              onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
            />

            {/* Cost */}
            <Input
              label="Total Biaya (Rp)"
              type="number"
              placeholder="0"
              value={formData.cost}
              onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
            />

            {/* Notes */}
            <Textarea
              label="Catatan (Opsional)"
              placeholder="Catatan tambahan..."
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button variant="success">Tambah Stok</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockInModal;
