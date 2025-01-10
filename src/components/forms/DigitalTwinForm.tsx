import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface DigitalTwinData {
  productId: string;
  serialNumber: string;
  location: string;
  condition: string;
  lastUpdated: string;
  maintenanceHistory: string;
  currentStatus: string;
  specifications: string;
}

export default function DigitalTwinForm() {
  const [formData, setFormData] = useState<DigitalTwinData>({
    productId: '',
    serialNumber: '',
    location: '',
    condition: 'new',
    lastUpdated: '',
    maintenanceHistory: '',
    currentStatus: 'active',
    specifications: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Digital Twin:', formData);
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
          <Copy className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Digital Twin Creation</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Create and manage digital representations of physical products
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
              <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700">
                Serial Number
              </label>
              <input
                type="text"
                name="serialNumber"
                id="serialNumber"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.serialNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
                Condition
              </label>
              <select
                name="condition"
                id="condition"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.condition}
                onChange={handleChange}
              >
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="refurbished">Refurbished</option>
                <option value="damaged">Damaged</option>
              </select>
            </div>

            <div>
              <label htmlFor="lastUpdated" className="block text-sm font-medium text-gray-700">
                Last Updated
              </label>
              <input
                type="datetime-local"
                name="lastUpdated"
                id="lastUpdated"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.lastUpdated}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="maintenanceHistory" className="block text-sm font-medium text-gray-700">
                Maintenance History
              </label>
              <textarea
                name="maintenanceHistory"
                id="maintenanceHistory"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.maintenanceHistory}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="currentStatus" className="block text-sm font-medium text-gray-700">
                Current Status
              </label>
              <select
                name="currentStatus"
                id="currentStatus"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.currentStatus}
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="maintenance">Under Maintenance</option>
                <option value="retired">Retired</option>
              </select>
            </div>

            <div>
              <label htmlFor="specifications" className="block text-sm font-medium text-gray-700">
                Specifications
              </label>
              <textarea
                name="specifications"
                id="specifications"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.specifications}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Digital Twin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}