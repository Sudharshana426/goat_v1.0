import React, { useState } from 'react';
import { Package } from 'lucide-react';

interface ProductRegistrationData {
  productId: string;
  productName: string;
  description: string;
  category: string;
  quantity: number;
  unitPrice: number;
  manufacturingDate: string;
  expiryDate: string;
  batchNumber: string;
}

export default function ProductRegistrationForm() {
  const [formData, setFormData] = useState<ProductRegistrationData>({
    productId: '',
    productName: '',
    description: '',
    category: '',
    quantity: 0,
    unitPrice: 0,
    manufacturingDate: '',
    expiryDate: '',
    batchNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product Registration:', formData);
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
          <Package className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Product Registration</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Register new products in the blockchain supply chain
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
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                id="category"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="food">Food & Beverage</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
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
              <label htmlFor="unitPrice" className="block text-sm font-medium text-gray-700">
                Unit Price
              </label>
              <input
                type="number"
                name="unitPrice"
                id="unitPrice"
                min="0"
                step="0.01"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.unitPrice}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="manufacturingDate" className="block text-sm font-medium text-gray-700">
                Manufacturing Date
              </label>
              <input
                type="date"
                name="manufacturingDate"
                id="manufacturingDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.manufacturingDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="date"
                name="expiryDate"
                id="expiryDate"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="batchNumber" className="block text-sm font-medium text-gray-700">
                Batch Number
              </label>
              <input
                type="text"
                name="batchNumber"
                id="batchNumber"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.batchNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}