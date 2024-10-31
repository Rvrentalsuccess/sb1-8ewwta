export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  currentMileage: number;
  purchaseDate: string;
}

export interface MaintenanceRecord {
  id: string;
  vehicleId: string;
  date: string;
  type: MaintenanceType;
  cost: number;
  mileageAtService: number;
  description: string;
}

export enum MaintenanceType {
  OIL_CHANGE = 'Oil Change',
  TIRES = 'Tires',
  BRAKES = 'Brakes',
  ENGINE = 'Engine',
  TRANSMISSION = 'Transmission',
  ELECTRICAL = 'Electrical',
  GENERAL = 'General'
}

export interface RentalRecord {
  id: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  startMileage: number;
  endMileage: number;
}

export interface MaintenancePrediction {
  vehicleId: string;
  maintenanceType: MaintenanceType;
  predictedDate: string;
  confidence: number;
  estimatedCost: number;
}