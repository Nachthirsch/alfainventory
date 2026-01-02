import React from 'react';
import { X, Printer, Download, CheckCircle } from 'lucide-react';
import { Button } from '../common';

/**
 * Receipt Modal component
 */
const ReceiptModal = ({ isOpen, onClose, orderData }) => {
  if (!isOpen) return null;

  const { orderNumber, items, subtotal, tax, total, paymentMethod, change } = orderData;
  const currentDate = new Date().toLocaleString('id-ID');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Receipt</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Receipt Content */}
          <div className="p-4">
            {/* Store Info */}
            <div className="text-center pb-4 border-b border-dashed border-gray-300">
              <h4 className="font-bold text-lg">AlfaInventory</h4>
              <p className="text-xs text-gray-500">Jl. Contoh No. 123, Malang</p>
              <p className="text-xs text-gray-500">Telp: 0341-123456</p>
            </div>

            {/* Order Info */}
            <div className="py-3 border-b border-dashed border-gray-300 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order No:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span>{currentDate}</span>
              </div>
            </div>

            {/* Items */}
            <div className="py-3 border-b border-dashed border-gray-300 space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div>
                    <span>{item.name}</span>
                    <span className="text-gray-500 text-xs ml-2">
                      × {item.quantity}
                    </span>
                  </div>
                  <span>
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="py-3 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span>Rp {tax.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>Rp {total.toLocaleString('id-ID')}</span>
              </div>
              {paymentMethod === 'cash' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cash</span>
                    <span>Rp {(total + change).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Change</span>
                    <span>Rp {change.toLocaleString('id-ID')}</span>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-dashed border-gray-300">
              <div className="flex items-center justify-center gap-1 text-green-600 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Payment Complete</span>
              </div>
              <p className="text-xs text-gray-500">Thank you for your purchase!</p>
              <p className="text-xs text-gray-400 mt-1">
                Keep this receipt for your records
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <Button variant="outline" className="flex-1" icon={Printer}>
              Print
            </Button>
            <Button variant="primary" className="flex-1" icon={Download}>
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
