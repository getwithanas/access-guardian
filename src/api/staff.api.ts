/**
 * Staff API Layer
 * Handles all staff management API calls
 * Endpoints: /api/staff/*
 */

import api from './api';
import type { Staff, StaffUpdate, StaffDepartment, StaffRole } from '@/types/staff.types';

// ============= CURRENT USER =============

/**
 * Get current logged-in staff member
 * GET /api/staff/me
 * @returns Current staff data
 */
export const getStaffMeApi = async (): Promise<Staff> => {
  const response = await api.get<Staff>('/staff/me');
  return response.data;
};

/**
 * Update current logged-in staff member
 * PUT /api/staff/me
 * @param data - Update payload
 * @returns Updated staff data
 */
export const updateStaffMeApi = async (data: StaffUpdate): Promise<Staff> => {
  const response = await api.put<Staff>('/staff/me', data);
  return response.data;
};

// ============= STAFF LISTING (ADMIN ONLY) =============

/**
 * Get all staff members
 * GET /api/staff/
 * @param skip - Pagination offset
 * @param limit - Pagination limit
 * @returns List of staff
 */
export const getAllStaffApi = async (
  skip: number = 0, 
  limit: number = 100
): Promise<Staff[]> => {
  const response = await api.get<Staff[]>('/staff/', {
    params: { skip, limit },
  });
  return response.data;
};

/**
 * Get staff members by department
 * GET /api/staff/by-department/{department}
 * @param department - Department filter
 * @param skip - Pagination offset
 * @param limit - Pagination limit
 * @returns Filtered list of staff
 */
export const getStaffByDepartmentApi = async (
  department: StaffDepartment,
  skip: number = 0,
  limit: number = 100
): Promise<Staff[]> => {
  const response = await api.get<Staff[]>(`/staff/by-department/${department}`, {
    params: { skip, limit },
  });
  return response.data;
};

/**
 * Get staff members by role
 * GET /api/staff/by-role/{role}
 * @param role - Role filter
 * @param skip - Pagination offset
 * @param limit - Pagination limit
 * @returns Filtered list of staff
 */
export const getStaffByRoleApi = async (
  role: StaffRole,
  skip: number = 0,
  limit: number = 100
): Promise<Staff[]> => {
  const response = await api.get<Staff[]>(`/staff/by-role/${role}`, {
    params: { skip, limit },
  });
  return response.data;
};

// ============= STAFF CRUD (ADMIN ONLY) =============

/**
 * Get staff member by ID
 * GET /api/staff/{staff_id}
 * @param staffId - Staff ID
 * @returns Staff data
 */
export const getStaffByIdApi = async (staffId: number): Promise<Staff> => {
  const response = await api.get<Staff>(`/staff/${staffId}`);
  return response.data;
};

/**
 * Update staff member by ID (Superuser only)
 * PUT /api/staff/{staff_id}
 * @param staffId - Staff ID
 * @param data - Update payload
 * @returns Updated staff data
 */
export const updateStaffByIdApi = async (
  staffId: number, 
  data: StaffUpdate
): Promise<Staff> => {
  const response = await api.put<Staff>(`/staff/${staffId}`, data);
  return response.data;
};

/**
 * Delete staff member by ID (Superuser only)
 * DELETE /api/staff/{staff_id}
 * @param staffId - Staff ID to delete
 */
export const deleteStaffByIdApi = async (staffId: number): Promise<void> => {
  await api.delete(`/staff/${staffId}`);
};
