/**
 * Auth Service
 * Business logic layer for authentication
 * Handles login, logout, token storage
 */

import { loginApi, registerApi } from '@/api/auth.api';
import { getStaffMeApi } from '@/api/staff.api';
import type { RegisterRequest, Staff, StaffRole } from '@/types/staff.types';
import { getDefaultRouteForRole } from '@/types/staff.types';

// Storage keys
const TOKEN_KEY = 'acwms_token';
const USER_KEY = 'acwms_user';

// ============= TOKEN MANAGEMENT =============

/** Store token in localStorage */
export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

/** Get token from localStorage */
export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

/** Remove token from localStorage */
export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

// ============= USER MANAGEMENT =============

/** Store user in localStorage */
export const setStoredUser = (user: Staff): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

/** Get user from localStorage */
export const getStoredUser = (): Staff | null => {
  const stored = localStorage.getItem(USER_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as Staff;
    } catch {
      return null;
    }
  }
  return null;
};

/** Remove user from localStorage */
export const removeStoredUser = (): void => {
  localStorage.removeItem(USER_KEY);
};

// ============= AUTH OPERATIONS =============

/**
 * Login user and fetch their profile
 * @param username - Username (email)
 * @param password - Password
 * @returns User data and redirect path
 */
export const login = async (
  username: string,
  password: string
): Promise<{ user: Staff; redirectTo: string }> => {
  // Step 1: Get access token
  const tokenResponse = await loginApi(username, password);

  // Step 2: Store token
  setToken(tokenResponse.access_token);

  // Step 3: Fetch user profile with new token
  const user = await getStaffMeApi();

  // Step 4: Store user data
  setStoredUser(user);

  // Step 5: Return user and redirect path
  const redirectTo = getDefaultRouteForRole(user.role as StaffRole);

  return { user, redirectTo };
};

/**
 * Register new user
 * @param data - Registration data
 * @returns Created user
 */
export const register = async (data: RegisterRequest): Promise<Staff> => {
  const user = await registerApi(data);
  return user;
};

/**
 * Logout user - clear all stored data
 */
export const logout = (): void => {
  removeToken();
  removeStoredUser();
};

/**
 * Check if user is authenticated
 * @returns Boolean indicating auth status
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};

/**
 * Get current user from API (validates token)
 * @returns Current user or null if not authenticated
 */
export const getCurrentUser = async (): Promise<Staff | null> => {
  try {
    const user = await getStaffMeApi();
    setStoredUser(user);
    return user;
  } catch {
    // Token invalid or expired
    logout();
    return null;
  }
};
