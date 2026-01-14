import { loginApi, LoginPayload } from '@/api/auth.api';

// Mock data for development
const mockLoginResponse = {
  token: 'mock_jwt_token_12345',
  user: {
    id: '1',
    email: 'test@acwms.com',
    name: 'Test User',
    role: 'security'
  }
};

// Check if mock mode is enabled
const useMock = import.meta.env.VITE_USE_MOCK === 'true';

export const login = async (payload: LoginPayload) => {
  if (useMock) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: mockLoginResponse };
  }
  return loginApi(payload);
};

export const logout = async () => {
  // Clear local storage
  localStorage.removeItem('acwms_token');
  localStorage.removeItem('acwms_user');
};
