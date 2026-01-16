/**
 * Auth API Layer
 * Handles all authentication-related API calls
 * Endpoints: /api/auth/login, /api/auth/register
 */

import api from './api';
import type { TokenResponse, RegisterRequest, Staff } from '@/types/staff.types';

/**
 * Login with username and password
 * POST /api/auth/login
 * Uses OAuth2 password flow (form-urlencoded)
 * @param username - Username (email)
 * @param password - Password
 * @returns Token response with access_token
 */
export const loginApi = async (
  username: string,
  password: string
): Promise<TokenResponse> => {
  // OAuth2 expects form-urlencoded data
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  const response = await api.post<TokenResponse>('/auth/login', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
};

/**
 * Register a new staff member
 * POST /api/auth/register
 * @param data - Registration data
 * @returns Created staff member
 */
export const registerApi = async (data: RegisterRequest): Promise<Staff> => {
  const response = await api.post<Staff>('/auth/register', data);
  return response.data;
};
