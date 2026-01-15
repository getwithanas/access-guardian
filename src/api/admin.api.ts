import api from './api';

// System Stats
export const getSystemStatsApi = () => api.get('/admin/stats');

// Department Stats
export const getDepartmentStatsApi = () => api.get('/admin/departments');

// User Management
export const getUsersListApi = () => api.get('/admin/users');

export const getUserByIdApi = (userId: string) => api.get(`/admin/users/${userId}`);

export const createUserApi = (userData: Record<string, unknown>) =>
  api.post('/admin/users', userData);

export const updateUserApi = (userId: string, userData: Record<string, unknown>) =>
  api.put(`/admin/users/${userId}`, userData);

export const deleteUserApi = (userId: string) => api.delete(`/admin/users/${userId}`);

export const toggleUserStatusApi = (userId: string, status: string) =>
  api.patch(`/admin/users/${userId}/status`, { status });

// Activity Logs
export const getActivityLogsApi = () => api.get('/admin/logs');

// Department specific
export const getDepartmentUsersApi = (department: string) =>
  api.get(`/admin/departments/${department}/users`);
