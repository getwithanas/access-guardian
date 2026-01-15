import {
  getSystemStatsApi,
  getDepartmentStatsApi,
  getUsersListApi,
  getActivityLogsApi,
  getDepartmentUsersApi,
  createUserApi,
  updateUserApi,
  deleteUserApi,
  toggleUserStatusApi,
} from '@/api/admin.api';
import {
  systemStatsMock,
  departmentStatsMock,
  usersListMock,
  activityLogsMock,
  departmentUsersMock,
} from '@/mocks/admin.mock';

const useMock = import.meta.env.VITE_USE_MOCK === 'true';

export const getSystemStats = async () => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { data: systemStatsMock };
  }
  return getSystemStatsApi();
};

export const getDepartmentStats = async () => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { data: departmentStatsMock };
  }
  return getDepartmentStatsApi();
};

export const getUsersList = async () => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { data: usersListMock };
  }
  return getUsersListApi();
};

export const getActivityLogs = async () => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { data: activityLogsMock };
  }
  return getActivityLogsApi();
};

export const getDepartmentUsers = async (department: string) => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { data: departmentUsersMock(department) };
  }
  return getDepartmentUsersApi(department);
};

export const createUser = async (userData: Record<string, unknown>) => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { data: { success: true, message: 'User created successfully' } };
  }
  return createUserApi(userData);
};

export const updateUser = async (userId: string, userData: Record<string, unknown>) => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { data: { success: true, message: 'User updated successfully' } };
  }
  return updateUserApi(userId, userData);
};

export const deleteUser = async (userId: string) => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { data: { success: true, message: 'User deleted successfully' } };
  }
  return deleteUserApi(userId);
};

export const toggleUserStatus = async (userId: string, status: string) => {
  if (useMock) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { data: { success: true, message: `User status changed to ${status}` } };
  }
  return toggleUserStatusApi(userId, status);
};
