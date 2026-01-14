import {
  getPurchaseStatsApi,
  getPurchaseOrdersApi,
  approvePurchaseOrderApi,
  rejectPurchaseOrderApi,
  getMaterialApprovalsApi,
  approveMaterialApi,
  rejectMaterialApi,
  getRecentActivityApi
} from '@/api/purchase.api';
import {
  purchaseStatsMock,
  purchaseOrdersMock,
  materialApprovalsMock,
  recentActivityMock
} from '@/mocks/purchase.mock';

const useMock = import.meta.env.VITE_USE_MOCK === 'true';

export const getPurchaseStats = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: purchaseStatsMock };
  }
  return getPurchaseStatsApi();
};

export const getPurchaseOrders = async (filter?: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const filtered = filter && filter !== 'all' 
      ? purchaseOrdersMock.filter(o => o.status === filter)
      : purchaseOrdersMock;
    return { data: filtered };
  }
  return getPurchaseOrdersApi(filter);
};

export const approvePurchaseOrder = async (poId: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: { success: true } };
  }
  return approvePurchaseOrderApi(poId);
};

export const rejectPurchaseOrder = async (poId: string, reason: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: { success: true } };
  }
  return rejectPurchaseOrderApi(poId, reason);
};

export const getMaterialApprovals = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: materialApprovalsMock };
  }
  return getMaterialApprovalsApi();
};

export const approveMaterial = async (materialId: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: { success: true } };
  }
  return approveMaterialApi(materialId);
};

export const rejectMaterial = async (materialId: string, reason: string) => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: { success: true } };
  }
  return rejectMaterialApi(materialId, reason);
};

export const getRecentActivity = async () => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: recentActivityMock };
  }
  return getRecentActivityApi();
};
