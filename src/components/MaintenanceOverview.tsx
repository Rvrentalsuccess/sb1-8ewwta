import React from 'react';
import { BarChart } from 'lucide-react';

export default function MaintenanceOverview() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Maintenance Overview</h2>
        <select className="text-sm border-gray-300 rounded-md">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Engine Maintenance</p>
            <div className="flex items-center mt-1">
              <div className="w-48 h-2 bg-gray-200 rounded-full">
                <div className="w-3/4 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">75%</span>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-900">$12,450</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Tire Replacement</p>
            <div className="flex items-center mt-1">
              <div className="w-48 h-2 bg-gray-200 rounded-full">
                <div className="w-1/2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">50%</span>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-900">$8,320</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Brake Service</p>
            <div className="flex items-center mt-1">
              <div className="w-48 h-2 bg-gray-200 rounded-full">
                <div className="w-1/4 h-2 bg-yellow-500 rounded-full"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">25%</span>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-900">$4,150</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-900">Total Maintenance Cost</span>
          <span className="font-bold text-gray-900">$24,920</span>
        </div>
      </div>
    </div>
  );
}