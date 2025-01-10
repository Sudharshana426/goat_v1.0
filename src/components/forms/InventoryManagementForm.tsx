import React, { useState } from 'react';
import { BoxesIcon } from 'lucide-react';

interface InventoryManagementData {
  productId: string;
  warehouseLocation: string;
  quantity: number;
  minimumStock: number;
  maximumStock: number;
  reorderPoint: number;
  stockStatus: string;
  lastRestocked: string;
  notes: string;
}

export default function InventoryManagementForm() {
  const [formData, setFormData] = useState<InventoryManagementData>({
    productId: '',
    warehouseLocation: '',
    quantity: 0,
    minimumStock: 0,
    maximumStock: 0,
    reorderPoint: 0,
    stockStatus: 'in-stock',
    lastRestocked: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inventory Management:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <BoxesIcon className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Inventory Management</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Track and manage product inventory levels
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="productId" className="block text-sm font-medium text-gray-700">
                Product ID
              </label>
              <input
                type="text"
                name="productId"
                id="productId"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.productId}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="warehouseLocation" className="block text-sm font-medium text-gray-700">
                Warehouse Location
              </label>
              <input
                type="text"
                name="warehouseLocation"
                id="warehouseLocation"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.warehouseLocation}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Current Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min="0"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="minimumStock" className="block text-sm font-medium text-gray-700">
                Minimum Stock Level
              </label>
              <input
                type="number"
                name="minimumStock"
                id="minimumStock"
                min="0"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.minimumStock}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="maximumStock" className="block text-sm font-medium text-gray-700">
                Maximum Stock Level
              </label>
              <input
                type="number"
                name="maximumStock"
                id="maximumStock"
                min="0"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.maximumStock}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="reorderPoint" className="block text-sm font-medium text-gray-700">
                Reorder Point
              </label>
              <input
                type="number"
                name="reorderPoint"
                id="reorderPoint"
                min="0"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.reorderPoint}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700">
                Stock Status
              </label>
              <select
                name="stockStatus"
                id="stockStatus"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.stockStatus}
                onChange={handleChange}
              >
                <option value="in-stock">In Stock</option>
                <option value="low-stock">Low Stock</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="backorder">On Backorder</option>
              </select>
            </div>

            <div>
              <label htmlFor="lastRestocked" className="block text-sm font-medium text-gray-700">
                Last Restocked Date
              </label>
              <input
                type="datetime-local"
                name="lastRestocked"
                id="lastRestocked"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.lastRestocked}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Notes
              </label>
              <textarea
                name="notes"
                id="notes"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Inventory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}