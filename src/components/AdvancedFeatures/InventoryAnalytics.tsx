import React from 'react';
import { BarChart, TrendingUp, Package, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const InventoryAnalytics = () => {
  const analyticsData = {
    inventoryMetrics: {
      totalStock: "15,000 kg",
      lowStockItems: 3,
      expiringItems: 2,
      turnoverRate: "85%"
    },
    demandForecast: {
      nextWeek: "+12%",
      nextMonth: "+8%",
      seasonal: "Peak",
      confidence: "92%"
    },
    pricingAnalysis: {
      currentPrice: "₹40/kg",
      marketAverage: "₹38/kg",
      suggestedPrice: "₹42/kg",
      priceChange: "+5%"
    },
    alerts: [
      {
        type: "Low Stock",
        item: "Premium Tomatoes",
        threshold: "1000 kg",
        current: "800 kg"
      },
      {
        type: "Expiring Soon",
        item: "Grade A Potatoes",
        daysLeft: 5,
        quantity: "500 kg"
      }
    ]
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Inventory Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Package className="h-5 w-5 mr-2 text-blue-500" />
              Current Inventory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <p className="text-3xl font-bold text-blue-600">{analyticsData.inventoryMetrics.totalStock}</p>
                <p className="text-sm text-gray-600">Total Stock</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <p className="text-xl font-bold text-orange-500">{analyticsData.inventoryMetrics.lowStockItems}</p>
                  <p className="text-xs text-gray-600">Low Stock Items</p>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <p className="text-xl font-bold text-red-500">{analyticsData.inventoryMetrics.expiringItems}</p>
                  <p className="text-xs text-gray-600">Expiring Soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
              Demand Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(analyticsData.demandForecast).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    value.includes('+') ? 'bg-green-100 text-green-800' :
                    value.includes('-') ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-purple-500" />
              Price Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(analyticsData.pricingAnalysis).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className={`text-sm font-medium ${
                    value.includes('+') ? 'text-green-600' :
                    value.includes('-') ? 'text-red-600' :
                    'text-gray-900'
                  }`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
              Inventory Alerts
            </CardTitle>

          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.alerts.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      alert.type === 'Low Stock' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      Alert
                    </span>
                  </div>
                  <p className="text-sm">{alert.item}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    {alert.type === 'Low Stock' 
                      ? `${alert.current} / ${alert.threshold}`
                      : `${alert.daysLeft} days left - ${alert.quantity}`
                    }
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default InventoryAnalytics;