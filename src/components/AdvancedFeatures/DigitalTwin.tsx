import React from 'react';
import { Box, RefreshCw, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DigitalTwin = () => {
  const productData = {
    id: "DT-2025-001",
    name: "Premium Tomatoes",
    location: {
      current: "Mumbai Warehouse",
      coordinates: "19.0760° N, 72.8777° E",
      status: "Within Geofence",
      lastUpdated: "2 mins ago"
    },
    conditions: {
      temperature: "4°C",
      humidity: "85%",
      light: "150 lux",
      shock: "0.2G"
    },
    security: {
      sealStatus: "Intact",
      lastVerified: "5 mins ago",
      verificationMethod: "IoT Sensor + Blockchain"
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Digital Twin Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Box className="h-5 w-5 mr-2 text-blue-500" />
              Product Identity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">ID:</span> {productData.id}</p>
              <p className="text-sm"><span className="font-medium">Name:</span> {productData.name}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <RefreshCw className="h-5 w-5 mr-2 text-green-500" />
              Real-time Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">Current:</span> {productData.location.current}</p>
              <p className="text-sm"><span className="font-medium">Coordinates:</span> {productData.location.coordinates}</p>
              <p className="text-sm">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  productData.location.status === 'Within Geofence' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {productData.location.status}
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Shield className="h-5 w-5 mr-2 text-purple-500" />
              Security Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Seal Status:</span>
                <span className={`ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  productData.security.sealStatus === 'Intact' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {productData.security.sealStatus}
                </span>
              </p>
              <p className="text-sm"><span className="font-medium">Last Verified:</span> {productData.security.lastVerified}</p>
              <p className="text-sm"><span className="font-medium">Method:</span> {productData.security.verificationMethod}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              Environmental Conditions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(productData.conditions).map(([key, value]) => (
                <div key={key} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium capitalize">{key}</p>
                  <p className="text-lg font-bold">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DigitalTwin;