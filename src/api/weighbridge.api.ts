import api from './api';

export const getVehicleQueueApi = () => 
  api.get('/weighbridge/queue');

export const getCurrentWeighingApi = () => 
  api.get('/weighbridge/current');

export const captureWeightApi = (vehicleId: string) => 
  api.post(`/weighbridge/capture/${vehicleId}`);

export const passVehicleApi = (vehicleId: string) => 
  api.post(`/weighbridge/pass/${vehicleId}`);

export const failVehicleApi = (vehicleId: string, reason: string) => 
  api.post(`/weighbridge/fail/${vehicleId}`, { reason });

export const holdVehicleApi = (vehicleId: string) => 
  api.post(`/weighbridge/hold/${vehicleId}`);

export const getCaptureHistoryApi = () => 
  api.get('/weighbridge/history');

export const getCCTVStatusApi = () => 
  api.get('/weighbridge/cctv-status');
