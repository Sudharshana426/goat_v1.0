import React, { useState } from 'react';
import { Brain } from 'lucide-react';

interface QualityAIAnalysisData {
  productId: string;
  analysisDate: string;
  qualityScore: number;
  defectProbability: number;
  aiModel: string;
  confidenceScore: number;
  recommendations: string;
  imageUrl: string;
  analysisResults: string;
}

export default function QualityAIAnalysisForm() {
  const [formData, setFormData] = useState<QualityAIAnalysisData>({
    productId: '',
    analysisDate: '',
    qualityScore: 0,
    defectProbability: 0,
    aiModel: '',
    confidenceScore: 0,
    recommendations: '',
    imageUrl: '',
    analysisResults: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quality AI Analysis:', formData);
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
          <Brain className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Quality AI Analysis</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            AI-powered quality analysis and defect detection
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
              <label htmlFor="analysisDate" className="block text-sm font-medium text-gray-700">
                Analysis Date
              </label>
              <input
                type="datetime-local"
                name="analysisDate"
                id="analysisDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.analysisDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="qualityScore" className="block text-sm font-medium text-gray-700">
                Quality Score (0-100)
              </label>
              <input
                type="number"
                name="qualityScore"
                id="qualityScore"
                min="0"
                max="100"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.qualityScore}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="defectProbability" className="block text-sm font-medium text-gray-700">
                Defect Probability (0-100)
              </label>
              <input
                type="number"
                name="defectProbability"
                id="defectProbability"
                min="0"
                max="100"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.defectProbability}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="aiModel" className="block text-sm font-medium text-gray-700">
                AI Model Used
              </label>
              <input
                type="text"
                name="aiModel"
                id="aiModel"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.aiModel}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confidenceScore" className="block text-sm font-medium text-gray-700">
                Confidence Score (0-100)
              </label>
              <input
                type="number"
                name="confidenceScore"
                id="confidenceScore"
                min="0"
                max="100"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.confidenceScore}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                id="imageUrl"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="recommendations" className="block text-sm font-medium text-gray-700">
                AI Recommendations
              </label>
              <textarea
                name="recommendations"
                id="recommendations"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.recommendations}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="analysisResults" className="block text-sm font-medium text-gray-700">
                Detailed Analysis Results
              </label>
              <textarea
                name="analysisResults"
                id="analysisResults"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.analysisResults}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Run AI Analysis
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}