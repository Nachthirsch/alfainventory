import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { Button, Input, Select, Textarea } from '../common';
import { productsData } from '../../utils/mockData';

/**
 * Add/Edit Product Modal component
 */
const AddProductModal = ({ isOpen, onClose, product = null }) => {
  const [productType, setProductType] = useState(product?.type || 'simple');
  const [formData, setFormData] = useState({
    name: product?.name || '',
    category: product?.category || '',
    price: product?.price || '',
    businessUnit: product?.businessUnit || '',
  });
  const [recipeIngredients, setRecipeIngredients] = useState([
    { ingredientId: '', quantity: '', unit: '' },
  ]);

  if (!isOpen) return null;

  const categoryOptions = [
    { value: 'Makanan', label: 'Makanan' },
    { value: 'Minuman', label: 'Minuman' },
    { value: 'Camilan', label: 'Camilan' },
    { value: 'Layanan', label: 'Layanan' },
    { value: 'Pembersih', label: 'Pembersih' },
  ];

  const businessUnitOptions = [
    { value: 'Bakso Malang', label: 'Bakso Malang' },
    { value: 'Steam Cuci', label: 'Steam Cuci Motor/Mobil' },
  ];

  const ingredientOptions = productsData.ingredientsList.map((ing) => ({
    value: ing.id.toString(),
    label: `${ing.name} (${ing.currentStock} ${ing.unit})`,
  }));

  const addIngredientRow = () => {
    setRecipeIngredients([...recipeIngredients, { ingredientId: '', quantity: '', unit: '' }]);
  };

  const removeIngredientRow = (index) => {
    setRecipeIngredients(recipeIngredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index, field, value) => {
    const updated = [...recipeIngredients];
    updated[index][field] = value;
    
    // Auto-fill unit when ingredient is selected
    if (field === 'ingredientId') {
      const selectedIng = productsData.ingredientsList.find(
        (ing) => ing.id.toString() === value
      );
      if (selectedIng) {
        updated[index].unit = selectedIng.unit;
      }
    }
    
    setRecipeIngredients(updated);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              {product ? 'Edit Produk' : 'Tambah Produk Baru'}
            </h3>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 overflow-y-auto max-h-[calc(90vh-130px)]">
            {/* Product Type Toggle */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipe Produk
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setProductType('simple')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                    productType === 'simple'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <div className="text-xl mb-1">✅</div>
                  <div className="font-medium">Produk Sederhana</div>
                  <div className="text-xs text-gray-500">Item tunggal, lacak stok langsung</div>
                </button>
                <button
                  onClick={() => setProductType('recipe')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                    productType === 'recipe'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <div className="text-xl mb-1">📝</div>
                  <div className="font-medium">Produk Resep</div>
                  <div className="text-xs text-gray-500">Dibuat dari beberapa bahan</div>
                </button>
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-4">
              <Input
                label="Nama Produk"
                placeholder="Masukkan nama produk"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Kategori"
                  options={categoryOptions}
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
                <Select
                  label="Unit Bisnis"
                  options={businessUnitOptions}
                  value={formData.businessUnit}
                  onChange={(e) => setFormData({ ...formData, businessUnit: e.target.value })}
                />
              </div>

              <Input
                label="Harga Jual (Rp)"
                type="number"
                placeholder="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>

            {/* Recipe Builder */}
            {productType === 'recipe' && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Bahan Resep</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={Plus}
                    onClick={addIngredientRow}
                  >
                    Tambah Bahan
                  </Button>
                </div>

                <div className="space-y-3">
                  {recipeIngredients.map((ingredient, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1 grid grid-cols-3 gap-3">
                        <Select
                          placeholder="Pilih bahan"
                          options={ingredientOptions}
                          value={ingredient.ingredientId}
                          onChange={(e) => updateIngredient(index, 'ingredientId', e.target.value)}
                        />
                        <Input
                          type="number"
                          placeholder="Jumlah"
                          value={ingredient.quantity}
                          onChange={(e) => updateIngredient(index, 'quantity', e.target.value)}
                        />
                        <Input
                          placeholder="Satuan"
                          value={ingredient.unit}
                          disabled
                          inputClassName="bg-gray-100"
                        />
                      </div>
                      {recipeIngredients.length > 1 && (
                        <button
                          onClick={() => removeIngredientRow(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Estimated Servings */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <span className="font-medium">Estimasi Porsi yang Dapat Dibuat:</span>{' '}
                    {recipeIngredients[0]?.ingredientId ? '~45 porsi' : 'Tambahkan bahan untuk menghitung'}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Berdasarkan level stok saat ini
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button variant="primary">
              {product ? 'Simpan Perubahan' : 'Tambah Produk'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
