import React, { useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export default function QualityControl() {
  const [inspectionData, setInspectionData] = useState({
    batchNumber: '',
    temperature: '',
    humidity: '',
    visualInspection: '',
    qualityNotes: '',
    status: 'pending',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Inspection submitted:', inspectionData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInspectionData({
      ...inspectionData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="quality-control" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Quality Control
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Product Inspection Form
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Record quality control checks and environmental conditions.
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="batchNumber" className="block text-sm font-medium text-gray-700">
                Batch Number
              </label>
              <input
                type="text"
                name="batchNumber"
                id="batchNumber"
                value={inspectionData.batchNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">
                Temperature (°C)
              </label>
              <input
                type="number"
                name="temperature"
                id="temperature"
                value={inspectionData.temperature}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="humidity" className="block text-sm font-medium text-gray-700">
                Humidity (%)
              </label>
              <input
                type="number"
                name="humidity"
                id="humidity"
                value={inspectionData.humidity}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="visualInspection" className="block text-sm font-medium text-gray-700">
                Visual Inspection Result
              </label>
              <select
                name="visualInspection"
                id="visualInspection"
                value={inspectionData.visualInspection}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select result</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
                <option value="warning">Warning</option>
              </select>
            </div>

            <div>
              <label htmlFor="qualityNotes" className="block text-sm font-medium text-gray-700">
                Quality Notes
              </label>
              <textarea
                name="qualityNotes"
                id="qualityNotes"
                rows={4}
                value={inspectionData.qualityNotes}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Inspection Status
              </label>
              <select
                name="status"
                id="status"
                value={inspectionData.status}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="review">Needs Review</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Inspection
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}