import React from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export default function PredictiveAnalytics() {
  const predictions = [
    {
      vehicle: '2023 Winnebago Vista',
      service: 'Engine Maintenance',
      predictedDate: '2024-04-15',
      confidence: 92,
      estimatedCost: 850,
      urgent: false,
    },
    {
      vehicle: '2022 Thor Motor Coach',
      service: 'Transmission Service',
      predictedDate: '2024-03-28',
      confidence: 88,
      estimatedCost: 1200,
      urgent: true,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Predictive Maintenance</h2>
          <p className="text-sm text-gray-500">AI-powered maintenance forecasting</p>
        </div>
        <TrendingUp className="h-6 w-6 text-blue-600" />
      </div>

      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              prediction.urgent ? 'bg-red-50 border border-red-100' : 'bg-gray-50'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{prediction.vehicle}</h3>
                <p className="text-sm text-gray-600">{prediction.service}</p>
              </div>
              {prediction.urgent && (
                <AlertTriangle className="h-5 w-5 text-red-500" />
              )}
            </div>
            
            <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Due Date</p>
                <p className="font-medium text-gray-900">{prediction.predictedDate}</p>
              </div>
              <div>
                <p className="text-gray-500">Confidence</p>
                <p className="font-medium text-gray-900">{prediction.confidence}%</p>
              </div>
              <div>
                <p className="text-gray-500">Est. Cost</p>
                <p className="font-medium text-gray-900">${prediction.estimatedCost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}