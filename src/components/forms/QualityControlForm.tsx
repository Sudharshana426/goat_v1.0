import React, { useState } from 'react';
import { ClipboardCheck } from 'lucide-react';

interface QualityControlData {
  batchNumber: string;
  inspectionDate: string;
  inspectorName: string;
  qualityGrade: string;
  temperature: number;
  humidity: number;
  defectDescription: string;
  actionTaken: string;
  status: string;
  notes: string;
}

export default function QualityControlForm() {
  const [formData, setFormData] = useState<QualityControlData>({
    batchNumber: '',
    inspectionDate: '',
    inspectorName: '',
    qualityGrade: 'A',
    temperature: 20,
    humidity: 50,
    defectDescription: '',
    actionTaken: '',
    status: 'pending',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quality Control:', formData);
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
          <ClipboardCheck className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Quality Control</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Record quality control inspections and maintain product standards
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
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

            <div>
              <label htmlFor="inspectionDate" className="block text-sm font-medium text-gray-700">
                Inspection Date
              </label>
              <input
                type="date"
                name="inspectionDate"
                id="inspectionDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.inspectionDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="inspectorName" className="block text-sm font-medium text-gray-700">
                Inspector Name
              </label>
              <input
                type="text"
                name="inspectorName"
                id="inspectorName"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.inspectorName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="qualityGrade" className="block text-sm font-medium text-gray-700">
                Quality Grade
              </label>
              <select
                name="qualityGrade"
                id="qualityGrade"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.qualityGrade}
                onChange={handleChange}
              >
                <option value="A">Grade A</option>
                <option value="B">Grade B</option>
                <option value="C">Grade C</option>
                <option value="D">Grade D</option>
                <option value="F">Grade F</option>
              </select>
            </div>

            <div>
              <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">
                Temperature (°C)
              </label>
              <input
                type="number"
                name="temperature"
                id="temperature"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.temperature}
                onChange={handleChange}
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
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.humidity}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="defectDescription" className="block text-sm font-medium text-gray-700">
                Defect Description
              </label>
              <textarea
                name="defectDescription"
                id="defectDescription"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.defectDescription}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="actionTaken" className="block text-sm font-medium text-gray-700">
                Action Taken
              </label>
              <textarea
                name="actionTaken"
                id="actionTaken"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.actionTaken}
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
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="review">Under Review</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Additional Notes
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
              Submit Quality Control Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}