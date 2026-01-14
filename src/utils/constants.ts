// API Base URL - will be loaded from environment
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Use mock data flag
export const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

// Vehicle types
export const VEHICLE_TYPES = [
  { value: 'truck', label: 'Truck' },
  { value: 'trailer', label: 'Trailer' },
  { value: 'tanker', label: 'Tanker' },
  { value: 'van', label: 'Van' },
  { value: 'tipper', label: 'Tipper' },
];

// PO Statuses
export const PO_STATUSES = {
  PENDING: 'pending',
  APPROVED: 'approved',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  REJECTED: 'rejected',
};

// Vehicle statuses
export const VEHICLE_STATUSES = {
  WAITING: 'waiting',
  WEIGHING: 'weighing',
  PASSED: 'passed',
  FAILED: 'failed',
  ON_HOLD: 'on_hold',
};

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  SECURITY: 'security',
  WEIGHBRIDGE: 'weighbridge',
  PURCHASE: 'purchase',
};
