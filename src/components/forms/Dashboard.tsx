import React from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Thermometer,
  Package,
  TruckIcon,
  Calendar,
  DollarSign,
  ShieldCheck,
  FileCheck,
  Clock,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Dashboard = () => {
  // Sample data
  const metrics = {
    productsTracked: 1234,
    securityAlerts: 5,
    temperatureAlerts: 2,
    verifiedTransfers: 89,
    totalBatches: 156,
    activeShipments: 23
  };

  const products = [
    {
  batchNumber: "RAJ-MAN-2025-003",
  name: "Alphonso Mangoes",
  quantity: "500 kg",
  manufacturingDate: "2025-01-08",
  price: "₹150/kg",
  status: "Quality Checked",
  location: "Jaipur Warehouse",
  qualityGrade: "A+",
  temperature: "8°C",
  humidity: "90%",
  lastVerified: "15 mins ago"
},
{
  batchNumber: "KER-BAN-2025-004",
  name: "Cavendish Bananas",
  quantity: "1200 kg",
  manufacturingDate: "2025-01-07",
  price: "₹20/kg",
  status: "In Transit",
  location: "Kochi Port",
  qualityGrade: "B+",
  temperature: "10°C",
  humidity: "80%",
  lastVerified: "30 mins ago"
},
{
  batchNumber: "PUN-APP-2025-005",
  name: "Kashmiri Apples",
  quantity: "1500 kg",
  manufacturingDate: "2025-01-06",
  price: "₹60/kg",
  status: "Quality Checked",
  location: "Chandigarh Warehouse",
  qualityGrade: "A",
  temperature: "5°C",
  humidity: "75%",
  lastVerified: "5 mins ago"
},
{
  batchNumber: "HAR-CAR-2025-006",
  name: "Organic Carrots",
  quantity: "800 kg",
  manufacturingDate: "2025-01-05",
  price: "₹30/kg",
  status: "Stored",
  location: "Gurgaon Storage Facility",
  qualityGrade: "A",
  temperature: "4°C",
  humidity: "85%",
  lastVerified: "20 mins ago"
},
{
  batchNumber: "UP-ONI-2025-007",
  name: "Fresh Onions",
  quantity: "2500 kg",
  manufacturingDate: "2025-01-04",
  price: "₹15/kg",
  status: "In Transit",
  location: "Lucknow DC",
  qualityGrade: "B",
  temperature: "10°C",
  humidity: "70%",
  lastVerified: "40 mins ago"
}

  ];

  const qualityChecks = [
    {
      id: 1,
      batchNumber: "MAH-TOM-2025-001",
      checkType: "Temperature",
      status: "Critical",
      reading: "8°C",
      threshold: "5°C",
      timestamp: "10 minutes ago",
      location: "Mumbai Warehouse"
    },
    {
      id: 2,
      batchNumber: "GUJ-POT-2025-002",
      checkType: "Humidity",
      status: "Warning",
      reading: "80%",
      threshold: "75%",
      timestamp: "1 hour ago",
      location: "Transit Vehicle TN-01-AB-1234"
    }
  ];

  const blockchainLogs = [
    {
      txHash: "0x1234...5678",
      event: "Product Verified",
      timestamp: "2025-01-10 14:30",
      details: "Batch MAH-TOM-2025-001 verified at Mumbai checkpoint"
    },
    {
      txHash: "0x5678...9012",
      event: "Transfer Completed",
      timestamp: "2025-01-10 13:15",
      details: "Batch GUJ-POT-2025-002 transferred to Retailer ID #123"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Supply Chain Command Center</h1>
        <p className="text-gray-600">Blockchain-Powered Supply Chain Management System</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Products Tracked</CardTitle>
            <Package className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.productsTracked}</div>
            <p className="text-xs text-gray-600">Active in blockchain</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">{metrics.securityAlerts}</div>
            <p className="text-xs text-gray-600">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Temperature Alerts</CardTitle>
            <Thermometer className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">{metrics.temperatureAlerts}</div>
            <p className="text-xs text-gray-600">Environmental</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Verified Transfers</CardTitle>
            <ShieldCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{metrics.verifiedTransfers}</div>
            <p className="text-xs text-gray-600">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Batches</CardTitle>
            <Package className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-500">{metrics.totalBatches}</div>
            <p className="text-xs text-gray-600">In system</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
            <TruckIcon className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">{metrics.activeShipments}</div>
            <p className="text-xs text-gray-600">In transit</p>
          </CardContent>
        </Card>
      </div>

      {/* Product Tracking Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Product Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Batch No.</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Product</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Quantity</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Price</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Quality</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Temp/Humidity</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Location</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Last Verified</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.batchNumber} className="border-b hover:bg-gray-50">
                    <td className="p-4 text-sm font-medium">{product.batchNumber}</td>
                    <td className="p-4 text-sm">{product.name}</td>
                    <td className="p-4 text-sm">{product.quantity}</td>
                    <td className="p-4 text-sm">{product.price}</td>
                    <td className="p-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.status === 'Quality Checked' ? 'bg-green-100 text-green-800' :
                        product.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                        Grade {product.qualityGrade}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      {product.temperature} / {product.humidity}
                    </td>
                    <td className="p-4 text-sm">{product.location}</td>
                    <td className="p-4 text-sm">{product.lastVerified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Quality Checks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileCheck className="h-5 w-5 mr-2" />
              Quality Control Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {qualityChecks.map((check) => (
                <div key={check.id} className="flex items-start p-4 bg-white rounded-lg border">
                  <div className={`h-2 w-2 mt-2 rounded-full ${
                    check.status === 'Critical' ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div className="ml-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">{check.checkType} Alert</h4>
                      <span className="text-xs text-gray-500">{check.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Batch: {check.batchNumber}<br />
                      Reading: {check.reading} (Threshold: {check.threshold})<br />
                      Location: {check.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blockchain Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Blockchain Activity Log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blockchainLogs.map((log) => (
                <div key={log.txHash} className="p-4 bg-white rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{log.event}</span>
                    <span className="text-xs text-gray-500">{log.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{log.details}</p>
                  <p className="text-xs text-gray-500 font-mono">TX: {log.txHash}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;