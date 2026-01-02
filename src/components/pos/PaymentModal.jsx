import React, { useState } from 'react';
import {
  X,
  Banknote,
  Smartphone,
  CreditCard,
  QrCode,
  CheckCircle,
} from 'lucide-react';
import { Button } from '../common';

const iconMap = {
  Banknote: Banknote,
  Smartphone: Smartphone,
  CreditCard: CreditCard,
  QrCode: QrCode,
};

/**
 * Payment Modal component
 */
const PaymentModal = ({
  isOpen,
  onClose,
  total,
  paymentMethods,
  onConfirmPayment,
}) => {
  const [selectedMethod, setSelectedMethod] = useState('cash');
  const [amountReceived, setAmountReceived] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (!isOpen) return null;

  const numericAmount = parseInt(amountReceived.replace(/\D/g, '')) || 0;
  const change = numericAmount - total;
  const canProcess = selectedMethod !== 'cash' || numericAmount >= total;

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      setTimeout(() => {
        onConfirmPayment();
        setIsComplete(false);
        setAmountReceived('');
      }, 1500);
    }, 1000);
  };

  const quickAmounts = [50000, 100000, 150000, 200000];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md">
          {/* Complete Animation */}
          {isComplete ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pembayaran Berhasil!</h3>
              <p className="text-gray-500 mt-2">Pesanan berhasil diselesaikan</p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Pembayaran</h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Total Display */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">Total Jumlah</p>
                  <p className="text-3xl font-bold text-blue-600">
                    Rp {total.toLocaleString('id-ID')}
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Metode Pembayaran
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {paymentMethods.map((method) => {
                      const Icon = iconMap[method.icon];
                      return (
                        <button
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-colors ${
                            selectedMethod === method.id
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {Icon && (
                            <Icon
                              className={`w-5 h-5 ${
                                selectedMethod === method.id
                                  ? 'text-blue-600'
                                  : 'text-gray-500'
                              }`}
                            />
                          )}
                          <span
                            className={`text-sm font-medium ${
                              selectedMethod === method.id
                                ? 'text-blue-600'
                                : 'text-gray-700'
                            }`}
                          >
                            {method.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Cash Amount Input */}
                {selectedMethod === 'cash' && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah Diterima
                    </label>
                    <input
                      type="text"
                      value={amountReceived}
                      onChange={(e) => setAmountReceived(e.target.value)}
                      placeholder="Masukkan jumlah"
                      className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    {/* Quick Amount Buttons */}
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {quickAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setAmountReceived(amount.toString())}
                          className="py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          {(amount / 1000)}K
                        </button>
                      ))}
                    </div>

                    {/* Change Display */}
                    {numericAmount > 0 && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Kembalian</span>
                          <span
                            className={`font-bold ${
                              change >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}
                          >
                            Rp {Math.abs(change).toLocaleString('id-ID')}
                            {change < 0 && ' (Kurang)'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200">
                <Button
                  variant="primary"
                  className="w-full min-h-12"
                  onClick={handleConfirm}
                  disabled={!canProcess || isProcessing}
                >
                  {isProcessing ? 'Memproses...' : 'Konfirmasi Pembayaran'}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
