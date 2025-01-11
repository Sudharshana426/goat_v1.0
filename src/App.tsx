import React, { useState } from 'react';
import { Layout } from 'lucide-react';


// Form Components
import ProductRegistrationForm from './components/forms/ProductRegistrationForm';
import SupplierInformationForm from './components/forms/SupplierInformationForm';
import QualityControlForm from './components/forms/QualityControlForm';
import DigitalTwinForm from './components/forms/DigitalTwinForm';
import QualityAIAnalysisForm from './components/forms/QualityAIAnalysisForm';
import InventoryManagementForm from './components/forms/InventoryManagementForm';
import StakeholderCollaborationForm from './components/forms/StakeholderCollaborationForm';
import ComplianceMonitoringForm from './components/forms/ComplianceMonitoringForm';
import AntiCounterfeitingForm from './components/forms/AntiCounterfeitingForm';
import DashboardAnalyticsForm from './components/forms/DashboardAnalyticsForm';
import SensorsData from './components/SensorsData';

// Layout Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StakeholderBenefits from './components/StakeholderBenefits';
import ProductEntry from './components/ProductEntry';
import QualityControl from './components/QualityControl';
import Dashboard from './components/forms/Dashboard';
import DigitalTwin from './components/AdvancedFeatures/DigitalTwin';
import QualityAI from './components/AdvancedFeatures/QualityAI';
import AntiCounterfeit from './components/AdvancedFeatures/AntiCounterfeit';
import ComplianceMonitor from './components/AdvancedFeatures/ComplianceMonitor';
import InventoryAnalytics from './components/AdvancedFeatures/InventoryAnalytics';
import StakeholderCollaboration from './components/AdvancedFeatures/StakeholderCollaboration';
import Footer from './components/Footer';

function App() {
  const [activeForm, setActiveForm] = useState('product');

  const renderForm = () => {
    switch (activeForm) {
      case 'product':
        return <ProductRegistrationForm />;
      case 'supplier':
        return <SupplierInformationForm />;
      case 'quality':
        return <QualityControlForm />;
      case 'digital-twin':
        return <DigitalTwinForm />;
      case 'ai-analysis':
        return <QualityAIAnalysisForm />;
      case 'inventory':
        return <InventoryManagementForm />;
      case 'stakeholder':
        return <StakeholderCollaborationForm />;
      case 'compliance':
        return <ComplianceMonitoringForm />;
      case 'anti-counterfeit':
        return <AntiCounterfeitingForm />;
      case 'dashboard':
        return <DashboardAnalyticsForm />;
      default:
        return <ProductRegistrationForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero and Features Section */}
      <Hero />
      <Features />
      <StakeholderBenefits />

      {/* Advanced Features */}

      <Dashboard />
      <DigitalTwin />
      <QualityAI />
      <AntiCounterfeit />
      <ComplianceMonitor />
      <InventoryAnalytics />
      <StakeholderCollaboration />
      

      {/* Form Navigation */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveForm('product')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'product'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Product Registration
            </button>
            <button
              onClick={() => setActiveForm('supplier')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'supplier'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Supplier Information
            </button>
            <button
              onClick={() => setActiveForm('quality')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'quality'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Quality Control
            </button>
            <button
              onClick={() => setActiveForm('digital-twin')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'digital-twin'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Digital Twin
            </button>
            <button
              onClick={() => setActiveForm('ai-analysis')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'ai-analysis'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              AI Analysis
            </button>
            <button
              onClick={() => setActiveForm('inventory')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'inventory'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Inventory
            </button>
            <button
              onClick={() => setActiveForm('stakeholder')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'stakeholder'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Stakeholder
            </button>
            <button
              onClick={() => setActiveForm('compliance')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'compliance'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Compliance
            </button>
            <button
              onClick={() => setActiveForm('anti-counterfeit')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'anti-counterfeit'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Anti-Counterfeit
            </button>
            <button
              onClick={() => setActiveForm('dashboard')}
              className={`px-4 py-2 rounded-md ${
                activeForm === 'dashboard'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
      
      {/* Form Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{renderForm()}</div>
      </main>
       <div className="App">
      <SensorsData />
    </div>
    </div>
   
  );
}

export default App;
