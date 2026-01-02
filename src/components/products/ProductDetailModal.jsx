import React from 'react';
import { X, TrendingUp, Package, DollarSign } from 'lucide-react';
import { Button, Badge } from '../common';
import { productsData } from '../../utils/mockData';

/**
 * Product Detail Modal component
 */
const ProductDetailModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  const isRecipe = product.type === 'recipe';
  const recipeDetail = productsData.recipeDetail;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{product.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant={isRecipe ? 'purple' : 'info'} size="sm">
                    {isRecipe ? '📝 Recipe Product' : '✅ Simple Product'}
                  </Badge>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 overflow-y-auto max-h-[calc(90vh-130px)]">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm font-medium">Price</span>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
              </div>
              {isRecipe && (
                <>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-600 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">Total Sold</span>
                    </div>
                    <p className="text-xl font-bold text-gray-900">
                      {recipeDetail.salesStats.totalSold}x
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-purple-600 mb-1">
                      <Package className="w-4 h-4" />
                      <span className="text-sm font-medium">Max Servings</span>
                    </div>
                    <p className="text-xl font-bold text-gray-900">
                      {recipeDetail.maxServings}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Limited by: {recipeDetail.limitingIngredient}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Recipe Ingredients Table */}
            {isRecipe && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Recipe Composition</h4>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-100">
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                          Ingredient
                        </th>
                        <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                          Required
                        </th>
                        <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                          Current Stock
                        </th>
                        <th className="text-center px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recipeDetail.ingredients.map((ing, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="px-4 py-3 font-medium text-gray-900">
                            {ing.name}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-600">
                            {ing.required}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-600">
                            {ing.currentStock}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <Badge
                              variant={
                                ing.statusColor === 'green'
                                  ? 'success'
                                  : ing.statusColor === 'yellow'
                                  ? 'warning'
                                  : 'danger'
                              }
                              size="sm"
                            >
                              {ing.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Sales Statistics */}
            {isRecipe && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sales Statistics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-500">Average per Day</p>
                    <p className="text-xl font-bold text-gray-900">
                      {recipeDetail.salesStats.avgPerDay}x
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-500">Total Revenue</p>
                    <p className="text-xl font-bold text-gray-900">
                      Rp {recipeDetail.salesStats.revenue.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Simple Product Stock */}
            {!isRecipe && product.stock && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Stock Information</h4>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-500">Current Stock</p>
                  <p className="text-xl font-bold text-gray-900">{product.stock}</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary">Edit Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
