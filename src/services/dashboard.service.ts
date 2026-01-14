import {
  getDashboardStatsApi,
  getRecentVehiclesApi,
  getRecentAlertsApi,
  getCurrentVehicleApi,
  verifyVehicleApi
} from '@/api/dashboard.api';
import {
  dashboardStatsMock,
  recentVehiclesMock,
  recentAlertsMock,
  currentVehicleMock
} from '@/mocks/dashboard.mock';

const useMock = import.meta.env.VITE_USE_MOCK === 'true';

export const getDashboardStats = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: dashboardStatsMock };
  }
  return getDashboardStatsApi();
};

export const getRecentVehicles = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: recentVehiclesMock };
  }
  return getRecentVehiclesApi();
};

export const getRecentAlerts = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: recentAlertsMock };
  }
  return getRecentAlertsApi();
};

export const getCurrentVehicle = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: currentVehicleMock };
  }
  return getCurrentVehicleApi();
};

export const verifyVehicle = async (vehicleNumber: string, data: Record<string, unknown>) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: { success: true, message: 'Vehicle verified successfully' } };
  }
  return verifyVehicleApi(vehicleNumber, data);
};
