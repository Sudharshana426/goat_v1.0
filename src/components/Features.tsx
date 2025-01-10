import React from 'react';
import { Fingerprint, MapPin, Thermometer, Calendar, Shield, CheckCircle, AlertTriangle, History } from 'lucide-react';

const features = [
  {
    name: 'Digital Fingerprint',
    description: 'Unique identifier for each product ensuring authenticity',
    icon: Fingerprint,
  },
  {
    name: 'Location Tracking',
    description: 'Real-time monitoring of product movement',
    icon: MapPin,
  },
  {
    name: 'Environmental Monitoring',
    description: 'Temperature and humidity tracking',
    icon: Thermometer,
  },
  {
    name: 'Expiration Tracking',
    description: 'Automated expiration date monitoring',
    icon: Calendar,
  },
  {
    name: 'Anti-Counterfeit',
    description: 'Advanced measures to prevent counterfeiting',
    icon: Shield,
  },
  {
    name: 'Quality Control',
    description: 'Multi-point verification system',
    icon: CheckCircle,
  },
  {
    name: 'Alert System',
    description: 'Instant notifications for critical issues',
    icon: AlertTriangle,
  },
  {
    name: 'History Tracking',
    description: 'Complete chain of custody verification',
    icon: History,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Supply Chain Security
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides end-to-end supply chain visibility with advanced security features.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}