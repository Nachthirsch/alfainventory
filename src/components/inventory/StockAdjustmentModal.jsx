import React, { useState } from 'react';
import { X, AlertTriangle, Upload, Camera } from 'lucide-react';
import { Button, Input, Select, Textarea } from '../common';

/**
 * Stock Adjustment Modal component
 */
const StockAdjustmentModal = ({ isOpen, onClose, item = null }) => {
  const [formData, setFormData] = useState({
    adjustmentType: 'waste',
    quantity: '',
    reason: '',
  });

  if (!isOpen) return null;

  const adjustmentTypes = [
    { value: 'waste', label: 'Waste (Food spoiled/damaged)' },
    { value: 'expired', label: 'Expired (Past expiration date)' },
    { value: 'damaged', label: 'Damaged (Physical damage)' },
    { value: 'missing', label: 'Missing (Inventory discrepancy)' },
    { value: 'correction', label: 'Correction (Count error)' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <h3 className="text-lg font-semibold text-gray-900">Stock Adjustment</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Warning Message */}
          <div className="mx-4 mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-800">
                  Stock adjustments reduce inventory
                </p>
                <p className="text-xs text-yellow-700 mt-1">
                  This action will decrease the stock count. Make sure to document the reason properly.
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            {/* Item Display */}
            {item && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Item</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-500">
                    (Current: {item.current} {item.unit})
                  </span>
                </div>
              </div>
            )}

            {/* Adjustment Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adjustment Type
              </label>
              <div className="space-y-2">
                {adjustmentTypes.map((type) => (
                  <label
                    key={type.value}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      formData.adjustmentType === type.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="adjustmentType"
                      value={type.value}
                      checked={formData.adjustmentType === type.value}
                      onChange={(e) =>
                        setFormData({ ...formData, adjustmentType: e.target.value })
                      }
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Quantity to Remove"
                type="number"
                placeholder="0"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
              <Input
                label="Unit"
                value={item?.unit || ''}
                disabled
                inputClassName="bg-gray-100"
              />
            </div>

            {/* Reason */}
            <Textarea
              label="Reason / Description"
              placeholder="Describe why this adjustment is needed..."
              rows={3}
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            />

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo Evidence (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="danger">Confirm Adjustment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockAdjustmentModal;
