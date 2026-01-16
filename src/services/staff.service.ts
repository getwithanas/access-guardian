/**
 * Staff Service
 * Business logic layer for staff management
 * Used by admin dashboards
 */

import {
  getAllStaffApi,
  getStaffByDepartmentApi,
  getStaffByRoleApi,
  getStaffByIdApi,
  updateStaffByIdApi,
  deleteStaffByIdApi,
  updateStaffMeApi,
} from '@/api/staff.api';
import type { Staff, StaffUpdate, StaffDepartment, StaffRole } from '@/types/staff.types';

// ============= STAFF LISTING =============

/**
 * Get all staff members
 * @param skip - Pagination offset
 * @param limit - Pagination limit
 */
export const getAllStaff = async (
  skip: number = 0,
  limit: number = 100
): Promise<Staff[]> => {
  return getAllStaffApi(skip, limit);
};

/**
 * Get staff filtered by department
 * @param department - Department to filter by
 */
export const getStaffByDepartment = async (
  department: StaffDepartment
): Promise<Staff[]> => {
  return getStaffByDepartmentApi(department);
};

/**
 * Get staff filtered by role
 * @param role - Role to filter by
 */
export const getStaffByRole = async (role: StaffRole): Promise<Staff[]> => {
  return getStaffByRoleApi(role);
};

// ============= STAFF CRUD =============

/**
 * Get a single staff member by ID
 * @param staffId - Staff ID
 */
export const getStaffById = async (staffId: number): Promise<Staff> => {
  return getStaffByIdApi(staffId);
};

/**
 * Update a staff member (superuser only)
 * @param staffId - Staff ID to update
 * @param data - Update payload
 */
export const updateStaff = async (
  staffId: number,
  data: StaffUpdate
): Promise<Staff> => {
  return updateStaffByIdApi(staffId, data);
};

/**
 * Delete a staff member (superuser only)
 * @param staffId - Staff ID to delete
 */
export const deleteStaff = async (staffId: number): Promise<void> => {
  return deleteStaffByIdApi(staffId);
};

/**
 * Update current user's profile
 * @param data - Update payload
 */
export const updateMyProfile = async (data: StaffUpdate): Promise<Staff> => {
  return updateStaffMeApi(data);
};

// ============= HELPERS =============

/**
 * Toggle staff active status
 * @param staffId - Staff ID
 * @param isActive - New active status
 */
export const toggleStaffStatus = async (
  staffId: number,
  isActive: boolean
): Promise<Staff> => {
  return updateStaffByIdApi(staffId, { is_active: isActive });
};
