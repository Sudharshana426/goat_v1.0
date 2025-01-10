import React from 'react';
import { FileCheck, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ComplianceMonitor = () => {
  const complianceData = {
    overallScore: 95,
    lastAudit: "2025-01-09",
    nextAudit: "2025-02-09",
    regulations: [
      {
        name: "Temperature Control",
        status: "Compliant",
        lastChecked: "5 mins ago",
        requirement: "2°C - 8°C",
        current: "4°C"
      },
      {
        name: "Humidity Control",
        status: "Warning",
        lastChecked: "10 mins ago",
        requirement: "60% - 75%",
        current: "78%"
      },
      {
        name: "Documentation",
        status: "Compliant",
        lastChecked: "1 hour ago",
        requirement: "Complete",
        current: "Up to date"
      }
    ],
    certifications: [
      {
        name: "ISO 22000",
        status: "Active",
        expiryDate: "2025-12-31"
      },
      {
        name: "HACCP",
        status: "Active",
        expiryDate: "2025-12-31"
      },
      {
        name: "FDA Approval",
        status: "Pending Review",
        expiryDate: "2025-06-30"
      }
    ]
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Compliance Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <FileCheck className="h-5 w-5 mr-2 text-blue-500" />
              Compliance Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">
              {complianceData.overallScore}%
            </div>
            <p className="text-sm text-gray-600">Overall Compliance Rating</p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              Regulatory Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {complianceData.regulations.map((reg, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{reg.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      reg.status === 'Compliant' ? 'bg-green-100 text-green-800' :
                      reg.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {reg.status}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Required: {reg.requirement}</p>
                    <p className="text-sm text-gray-600">Current: {reg.current}</p>
                    <p className="text-xs text-gray-500">Last checked: {reg.lastChecked}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-gray-500">Expires: {cert.expiryDate}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    cert.status === 'Active' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <XCircle className="h-5 w-5 mr-2 text-red-500" />
              Audit Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Last Audit</p>
                <p className="text-lg">{complianceData.lastAudit}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Next Scheduled Audit</p>
                <p className="text-lg">{complianceData.nextAudit}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComplianceMonitor;