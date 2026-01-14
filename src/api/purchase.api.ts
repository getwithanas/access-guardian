import api from './api';

export const getPurchaseStatsApi = () => 
  api.get('/purchase/stats');

export const getPurchaseOrdersApi = (filter?: string) => 
  api.get('/purchase/orders', { params: { filter } });

export const getPurchaseOrderApi = (poId: string) => 
  api.get(`/purchase/orders/${poId}`);

export const createPurchaseOrderApi = (data: Record<string, unknown>) => 
  api.post('/purchase/orders', data);

export const approvePurchaseOrderApi = (poId: string) => 
  api.post(`/purchase/orders/${poId}/approve`);

export const rejectPurchaseOrderApi = (poId: string, reason: string) => 
  api.post(`/purchase/orders/${poId}/reject`, { reason });

export const getMaterialApprovalsApi = () => 
  api.get('/purchase/material-approvals');

export const approveMaterialApi = (materialId: string) => 
  api.post(`/purchase/materials/${materialId}/approve`);

export const rejectMaterialApi = (materialId: string, reason: string) => 
  api.post(`/purchase/materials/${materialId}/reject`, { reason });

export const getRecentActivityApi = () => 
  api.get('/purchase/activity');
