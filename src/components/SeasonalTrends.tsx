import React from 'react';
import { Calendar } from 'lucide-react';

export default function SeasonalTrends() {
  const seasons = [
    {
      name: 'Spring',
      maintenanceCost: 15200,
      trend: 'up',
      commonIssues: ['AC System', 'Tire Rotation'],
    },
    {
      name: 'Summer',
      maintenanceCost: 18500,
      trend: 'up',
      commonIssues: ['Engine Cooling', 'Brake Service'],
    },
    {
      name: 'Fall',
      maintenanceCost: 12300,
      trend: 'down',
      commonIssues: ['Heating System', 'Battery Check'],
    },
    {
      name: 'Winter',
      maintenanceCost: 9800,
      trend: 'down',
      commonIssues: ['Winterization', 'Electrical System'],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Seasonal Analysis</h2>
          <p className="text-sm text-gray-500">Maintenance patterns by season</p>
        </div>
        <Calendar className="h-6 w-6 text-blue-600" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {seasons.map((season) => (
          <div
            key={season.name}
            className="p-4 rounded-lg bg-gray-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-900">{season.name}</h3>
              <span className={`text-sm ${
                season.trend === 'up' ? 'text-red-600' : 'text-green-600'
              }`}>
                {season.trend === 'up' ? '↑' : '↓'}
              </span>
            </div>
            
            <p className="text-lg font-semibold text-gray-900 mb-2">
              ${season.maintenanceCost.toLocaleString()}
            </p>
            
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Common Issues:</p>
              {season.commonIssues.map((issue, index) => (
                <p key={index} className="text-sm text-gray-900">• {issue}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}