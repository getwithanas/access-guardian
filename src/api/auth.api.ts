import api from './api';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

export const loginApi = (payload: LoginPayload) => 
  api.post<LoginResponse>('/auth/login', payload);

export const logoutApi = () => 
  api.post('/auth/logout');

export const getCurrentUserApi = () => 
  api.get('/auth/me');

export const refreshTokenApi = () => 
  api.post('/auth/refresh');
