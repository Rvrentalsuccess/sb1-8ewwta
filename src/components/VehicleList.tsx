import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function VehicleList() {
  const vehicles = [
    {
      id: '1',
      name: '2023 Winnebago Vista',
      status: 'healthy',
      mileage: '24,521',
      nextService: '2024-04-15',
      costPerMile: '0.38',
    },
    {
      id: '2',
      name: '2022 Thor Motor Coach',
      status: 'attention',
      mileage: '35,892',
      nextService: '2024-03-28',
      costPerMile: '0.45',
    },
    // Add more vehicles as needed
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Fleet Overview</h2>
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vehicle
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mileage
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Service
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost/Mile
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{vehicle.name}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {vehicle.status === 'healthy' ? (
                    <div className="flex items-center text-green-600">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      <span className="text-sm">Healthy</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-yellow-600">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Needs Attention</span>
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {vehicle.mileage}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {vehicle.nextService}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  ${vehicle.costPerMile}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}