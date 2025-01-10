import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface AntiCounterfeitingData {
  productId: string;
  serialNumber: string;
  authenticationType: string;
  securityFeatures: string[];
  verificationCode: string;
  manufacturingLocation: string;
  productionDate: string;
  blockchainHash: string;
  status: string;
  lastVerified: string;
}

export default function AntiCounterfeitingForm() {
  const [formData, setFormData] = useState<AntiCounterfeitingData>({
    productId: '',
    serialNumber: '',
    authenticationType: 'qr',
    securityFeatures: [],
    verificationCode: '',
    manufacturingLocation: '',
    productionDate: '',
    blockchainHash: '',
    status: 'unverified',
    lastVerified: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Anti-Counterfeiting:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'securityFeatures') {
      const features = value.split(',').map(feature => feature.trim());
      setFormData(prev => ({ ...prev, [name]: features }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Anti-Counterfeiting</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Verify product authenticity and prevent counterfeiting
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
              <label htmlFor="authenticationType" className="block text-sm font-medium text-gray-700">
                Authentication Type
              </label>
              <select
                name="authenticationType"
                id="authenticationType"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.authenticationType}
                onChange={handleChange}
              >
                <option value="qr">QR Code</option>
                <option value="rfid">RFID</option>
                <option value="nfc">NFC Tag</option>
                <option value="hologram">Hologram</option>
                <option value="blockchain">Blockchain</option>
              </select>
            </div>

            <div>
              <label htmlFor="securityFeatures" className="block text-sm font-medium text-gray-700">
                Security Features
              </label>
              <textarea
                name="securityFeatures"
                id="securityFeatures"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.securityFeatures.join(', ')}
                onChange={handleChange}
                placeholder="Enter security features separated by commas"
              />
            </div>

            <div>
              <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
                Verification Code
              </label>
              <input
                type="text"
                name="verificationCode"
                id="verificationCode"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.verificationCode}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="manufacturingLocation" className="block text-sm font-medium text-gray-700">
                Manufacturing Location
              </label>
              <input
                type="text"
                name="manufacturingLocation"
                id="manufacturingLocation"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.manufacturingLocation}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="productionDate" className="block text-sm font-medium text-gray-700">
                Production Date
              </label>
              <input
                type="date"
                name="productionDate"
                id="productionDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.productionDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="blockchainHash" className="block text-sm font-medium text-gray-700">
                Blockchain Hash
              </label>
              <input
                type="text"
                name="blockchainHash"
                id="blockchainHash"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.blockchainHash}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                id="status"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="unverified">Unverified</option>
                <option value="verified">Verified</option>
                <option value="suspicious">Suspicious</option>
                <option value="counterfeit">Counterfeit</option>
              </select>
            </div>

            <div>
              <label htmlFor="lastVerified" className="block text-sm font-medium text-gray-700">
                Last Verified
              </label>
              <input
                type="datetime-local"
                name="lastVerified"
                id="lastVerified"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.lastVerified}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}