import React from 'react';
import { Factory, Truck, Store, FileText } from 'lucide-react';

const stakeholders = [
  {
    title: 'Manufacturers',
    icon: Factory,
    benefits: [
      'Product tracking from creation',
      'Quality control documentation',
      'Automated compliance records',
      'Real-time supply chain visibility',
    ],
  },
  {
    title: 'Distributors',
    icon: Truck,
    benefits: [
      'Verify product authenticity',
      'Track handling conditions',
      'Document chain of custody',
      'Manage inventory efficiently',
    ],
  },
  {
    title: 'Retailers',
    icon: Store,
    benefits: [
      'Verify product sources',
      'Check handling history',
      'Maintain proper conditions',
      'Track expiration dates',
    ],
  },
  {
    title: 'Regulators',
    icon: FileText,
    benefits: [
      'Access complete history',
      'Monitor compliance',
      'Investigate issues',
      'Track recalls effectively',
    ],
  },
];

export default function StakeholderBenefits() {
  return (
    <div id="benefits" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Stakeholder Benefits
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Value for Every Participant
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides specific benefits for each stakeholder in the supply chain.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {stakeholders.map((stakeholder) => (
              <div key={stakeholder.title} className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <stakeholder.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                    {stakeholder.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {stakeholder.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-gray-500 flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}