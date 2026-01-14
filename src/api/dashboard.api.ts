import api from './api';

export const getDashboardStatsApi = () => 
  api.get('/dashboard/stats');

export const getRecentVehiclesApi = () => 
  api.get('/dashboard/recent-vehicles');

export const getRecentAlertsApi = () => 
  api.get('/dashboard/recent-alerts');

export const getCurrentVehicleApi = () => 
  api.get('/dashboard/current-vehicle');

export const verifyVehicleApi = (vehicleNumber: string, data: Record<string, unknown>) => 
  api.post(`/dashboard/verify/${vehicleNumber}`, data);
