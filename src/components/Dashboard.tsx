import React from 'react';
import { BarChart3, Calendar, DollarSign, Truck } from 'lucide-react';
import VehicleList from './VehicleList';
import MaintenanceOverview from './MaintenanceOverview';
import PredictiveAnalytics from './PredictiveAnalytics';
import SeasonalTrends from './SeasonalTrends';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Vehicles',
      value: '24',
      icon: Truck,
      trend: '+2 this month',
      trendUp: true,
    },
    {
      title: 'Avg Cost/Mile',
      value: '$0.42',
      icon: DollarSign,
      trend: '-$0.03 vs last month',
      trendUp: false,
    },
    {
      title: 'Scheduled Services',
      value: '8',
      icon: Calendar,
      trend: 'Next 30 days',
      trendUp: true,
    },
    {
      title: 'Fleet Health Score',
      value: '94%',
      icon: BarChart3,
      trend: '+2% vs last month',
      trendUp: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">RVitals</h1>
            <p className="text-gray-500">Fleet Management Dashboard</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add Vehicle
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-6 w-6 text-blue-600" />
                <span className={`text-sm ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <VehicleList />
          <MaintenanceOverview />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PredictiveAnalytics />
          <SeasonalTrends />
        </div>
      </div>
    </div>
  );
}