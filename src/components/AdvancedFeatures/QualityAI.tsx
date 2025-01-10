import React from 'react';
import { Brain, Camera, AlertCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const QualityAI = () => {
  const qualityData = {
    currentBatch: {
      id: "MAH-TOM-2025-001",
      predictions: {
        qualityScore: 92,
        shelfLife: "5 days",
        ripeness: "85%",
        defectProbability: "2%"
      },
      images: [
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80"
      ],
      trends: {
        temperature: "Stable",
        humidity: "Rising",
        quality: "Stable"
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">AI Quality Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Brain className="h-5 w-5 mr-2 text-purple-500" />
              AI Quality Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">
              {qualityData.currentBatch.predictions.qualityScore}%
            </div>
            <p className="text-sm text-gray-600">Overall Quality Rating</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Camera className="h-5 w-5 mr-2 text-blue-500" />
              Visual Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {qualityData.currentBatch.images.map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt={`Quality scan ${index + 1}`}
                  className="rounded-lg object-cover h-24 w-full"
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
              Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-medium">Shelf Life</p>
                <p className="text-lg">{qualityData.currentBatch.predictions.shelfLife}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Defect Probability</p>
                <p className="text-lg">{qualityData.currentBatch.predictions.defectProbability}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
              Quality Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(qualityData.currentBatch.trends).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm capitalize">{key}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    value === 'Rising' ? 'bg-green-100 text-green-800' :
                    value === 'Falling' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QualityAI;