import React, { useState } from 'react';
import { BarChart } from 'lucide-react';

interface DashboardAnalyticsData {
  reportType: string;
  startDate: string;
  endDate: string;
  productId: string;
  metrics: string[];
  groupBy: string;
  format: string;
  frequency: string;
  recipients: string;
  notes: string;
}

export default function DashboardAnalyticsForm() {
  const [formData, setFormData] = useState<DashboardAnalyticsData>({
    reportType: '',
    startDate: '',
    endDate: '',
    productId: '',
    metrics: [],
    groupBy: 'daily',
    format: 'chart',
    frequency: 'daily',
    recipients: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dashboard Analytics:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'metrics') {
      const selectedMetrics = value.split(',').map(metric => metric.trim());
      setFormData(prev => ({ ...prev, [name]: selectedMetrics }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <BarChart className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Dashboard & Analytics</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Generate custom reports and analytics dashboards
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">
                Report Type
              </label>
              <select
                name="reportType"
                id="reportType"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.reportType}
                onChange={handleChange}
              >
                <option value="">Select report type</option>
                <option value="inventory">Inventory Analysis</option>
                <option value="quality">Quality Metrics</option>
                <option value="compliance">Compliance Report</option>
                <option value="supplier">Supplier Performance</option>
                <option value="forecast">Demand Forecast</option>
              </select>
            </div>

            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="productId" className="block text-sm font-medium text-gray-700">
                Product ID (Optional)
              </label>
              <input
                type="text"
                name="productId"
                id="productId"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.productId}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="metrics" className="block text-sm font-medium text-gray-700">
                Metrics to Include
              </label>
              <textarea
                name="metrics"
                id="metrics"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.metrics.join(', ')}
                onChange={handleChange}
                placeholder="Enter metrics separated by commas"
              />
            </div>

            <div>
              <label htmlFor="groupBy" className="block text-sm font-medium text-gray-700">
                Group By
              </label>
              <select
                name="groupBy"
                id="groupBy"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500  focus:ring-indigo-500"
                value={formData.groupBy}
                onChange={handleChange}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div>
              <label htmlFor="format" className="block text-sm font-medium text-gray-700">
                Report Format
              </label>
              <select
                name="format"
                id="format"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.format}
                onChange={handleChange}
              >
                <option value="chart">Interactive Charts</option>
                <option value="table">Data Tables</option>
                <option value="pdf">PDF Report</option>
                <option value="excel">Excel Spreadsheet</option>
              </select>
            </div>

            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                Report Frequency
              </label>
              <select
                name="frequency"
                id="frequency"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.frequency}
                onChange={handleChange}
              >
                <option value="once">One-time</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label htmlFor="recipients" className="block text-sm font-medium text-gray-700">
                Report Recipients
              </label>
              <input
                type="text"
                name="recipients"
                id="recipients"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.recipients}
                onChange={handleChange}
                placeholder="Enter email addresses separated by commas"
              />
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
              Generate Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}