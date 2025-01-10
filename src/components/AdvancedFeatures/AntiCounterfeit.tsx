import React from 'react';
import { Shield, AlertOctagon, History, QrCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AntiCounterfeit = () => {
  const verificationData = {
    productId: "MAH-TOM-2025-001-UNIT-123",
    verificationHistory: [
      {
        timestamp: "2025-01-10 14:30:00",
        location: "Mumbai Warehouse",
        verifier: "IoT Gateway MH-001",
        status: "Authentic"
      },
      {
        timestamp: "2025-01-10 09:15:00",
        location: "Transport Vehicle TN-01-AB-1234",
        verifier: "Mobile Scanner TN-123",
        status: "Authentic"
      }
    ],
    securityFeatures: {
      tamperEvidentSeal: "Intact",
      rfidStatus: "Verified",
      blockchainHash: "0x1234...5678",
      lastVerified: "2 mins ago"
    },
    anomalyDetection: {
      status: "Normal",
      lastCheck: "1 min ago",
      confidence: "99.8%"
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Anti-Counterfeit Verification</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <QrCode className="h-5 w-5 mr-2 text-blue-500" />
              Product Authentication
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Unit ID:</span> {verificationData.productId}
              </p>
              <p className="text-sm">
                <span className="font-medium">Status:</span>
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  Verified Authentic
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Shield className="h-5 w-5 mr-2 text-purple-500" />
              Security Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(verificationData.securityFeatures).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertOctagon className="h-5 w-5 mr-2 text-orange-500" />
              Fraud Detection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Detection Status</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  verificationData.anomalyDetection.status === 'Normal' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {verificationData.anomalyDetection.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Confidence</span>
                <span className="text-sm font-medium">{verificationData.anomalyDetection.confidence}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Last Check</span>
                <span className="text-sm font-medium">{verificationData.anomalyDetection.lastCheck}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <History className="h-5 w-5 mr-2 text-green-500" />
              Verification History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {verificationData.verificationHistory.map((record, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="h-2 w-2 mt-2 rounded-full bg-green-500" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{record.verifier}</span>
                      <span className="text-xs text-gray-500">{record.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Location: {record.location}</p>
                    <p className="text-sm text-gray-600">
                      Status: 
                      <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        {record.status}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AntiCounterfeit;