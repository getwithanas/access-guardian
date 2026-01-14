import {
  getVehicleQueueApi,
  getCurrentWeighingApi,
  captureWeightApi,
  passVehicleApi,
  failVehicleApi,
  holdVehicleApi,
  getCaptureHistoryApi
} from '@/api/weighbridge.api';
import {
  vehicleQueueMock,
  currentWeighingMock,
  captureHistoryMock
} from '@/mocks/weighbridge.mock';

const useMock = import.meta.env.VITE_USE_MOCK === 'true';

export const getVehicleQueue = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: vehicleQueueMock };
  }
  return getVehicleQueueApi();
};

export const getCurrentWeighing = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: currentWeighingMock };
  }
  return getCurrentWeighingApi();
};

export const captureWeight = async (vehicleId: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: { success: true, weight: 28450 } };
  }
  return captureWeightApi(vehicleId);
};

export const passVehicle = async (vehicleId: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: { success: true } };
  }
  return passVehicleApi(vehicleId);
};

export const failVehicle = async (vehicleId: string, reason: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: { success: true } };
  }
  return failVehicleApi(vehicleId, reason);
};

export const holdVehicle = async (vehicleId: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: { success: true } };
  }
  return holdVehicleApi(vehicleId);
};

export const getCaptureHistory = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: captureHistoryMock };
  }
  return getCaptureHistoryApi();
};
