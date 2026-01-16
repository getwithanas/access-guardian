/**
 * Staff Types
 * TypeScript interfaces for staff management API
 */

// ============= ENUMS =============

/** Staff roles matching backend enum */
export type StaffRole = 
  | 'security'
  | 'purchase'
  | 'weighbridge'
  | 'dept admin'
  | 'super admin';

/** Staff departments matching backend enum */
export type StaffDepartment = 
  | 'Security'
  | 'Purchase'
  | 'Operations'
  | 'Administration'
  | 'IT';

// ============= AUTH TYPES =============

/** Login request payload */
export interface LoginRequest {
  username: string;  // OAuth2 uses 'username' field
  password: string;
}

/** Login response from /auth/login */
export interface TokenResponse {
  access_token: string;
  token_type: string;
}

/** Register request payload */
export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  full_name: string;
  role?: StaffRole;
  department?: StaffDepartment;
}

// ============= STAFF TYPES =============

/** Staff model from API */
export interface Staff {
  id: number;
  email: string;
  username: string;
  full_name: string;
  /** Display name - alias for full_name */
  name?: string;
  role: StaffRole;
  department: StaffDepartment;
  is_active: boolean;
  is_superuser: boolean;
  created_at: string;
  updated_at: string;
}

/** Staff update request payload */
export interface StaffUpdate {
  email?: string;
  username?: string;
  full_name?: string;
  password?: string;
  role?: StaffRole;
  department?: StaffDepartment;
  is_active?: boolean;
  is_superuser?: boolean;
}

// ============= ROLE CONFIG =============

/** Role display configuration */
export const roleConfig: Record<StaffRole, { 
  label: string; 
  description: string; 
  defaultRoute: string 
}> = {
  'security': {
    label: 'Security Staff',
    description: 'Gate operations and vehicle verification',
    defaultRoute: '/security',
  },
  'purchase': {
    label: 'Purchase Staff',
    description: 'PO management, registration, material approval',
    defaultRoute: '/purchase',
  },
  'weighbridge': {
    label: 'Weighbridge Operator',
    description: 'Weight capture and validation',
    defaultRoute: '/weighbridge',
  },
  'dept admin': {
    label: 'Department Admin',
    description: 'Manage users in a department',
    defaultRoute: '/admin/department',
  },
  'super admin': {
    label: 'Super Admin',
    description: 'Overall system administration',
    defaultRoute: '/admin',
  },
};

/** Get default route for a role */
export const getDefaultRouteForRole = (role: StaffRole): string => {
  return roleConfig[role]?.defaultRoute || '/';
};
