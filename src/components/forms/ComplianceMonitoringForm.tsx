import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface ComplianceMonitoringData {
  productId: string;
  complianceType: string;
  status: string;
  certificationNumber: string;
  issuingAuthority: string;
  issueDate: string;
  expiryDate: string;
  documents: string;
  comments: string;
  nextReviewDate: string;
}

export default function ComplianceMonitoringForm() {
  const [formData, setFormData] = useState<ComplianceMonitoringData>({
    productId: '',
    complianceType: '',
    status: 'pending',
    certificationNumber: '',
    issuingAuthority: '',
    issueDate: '',
    expiryDate: '',
    documents: '',
    comments: '',
    nextReviewDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Compliance Monitoring:', formData);
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
          <ShieldCheck className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Compliance Monitoring</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Track and manage regulatory compliance and certifications
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
              <label htmlFor="complianceType" className="block text-sm font-medium text-gray-700">
                Compliance Type
              </label>
              <select
                name="complianceType"
                id="complianceType"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.complianceType}
                onChange={handleChange}
              >
                <option value="">Select type</option>
                <option value="safety">Safety Certification</option>
                <option value="environmental">Environmental Compliance</option>
                <option value="quality">Quality Standard</option>
                <option value="industry">Industry Regulation</option>
              </select>
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
                <option value="expired">Expired</option>
                <option value="review">Under Review</option>
              </select>
            </div>

            <div>
              <label htmlFor="certificationNumber" className="block text-sm font-medium text-gray-700">
                Certification Number
              </label>
              <input
                type="text"
                name="certificationNumber"
                id="certificationNumber"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.certificationNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="issuingAuthority" className="block text-sm font-medium text-gray-700">
                Issuing Authority
              </label>
              <input
                type="text"
                name="issuingAuthority"
                id="issuingAuthority"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.issuingAuthority}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">
                Issue Date
              </label>
              <input
                type="date"
                name="issueDate"
                id="issueDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.issueDate}
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
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="documents" className="block text-sm font-medium text-gray-700">
                Document URLs
              </label>
              <textarea
                name="documents"
                id="documents"
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.documents}
                onChange={handleChange}
                placeholder="Enter document URLs separated by commas"
              />
            </div>

            <div>
              <label htmlFor="nextReviewDate" className="block text-sm font-medium text-gray-700">
                Next Review Date
              </label>
              <input
                type="date"
                name="nextReviewDate"
                id="nextReviewDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.nextReviewDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                Comments
              </label>
              <textarea
                name="comments"
                id="comments"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Compliance Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}