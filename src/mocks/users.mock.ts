// Mock users with different roles
export type UserRole = 'security' | 'purchase' | 'weighbridge' | 'dept_admin' | 'super_admin';

export interface MockUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
  department?: string;
  avatar?: string;
}

export const mockUsers: MockUser[] = [
  {
    id: 'usr_001',
    email: 'security@acwms.com',
    password: 'security123',
    name: 'Rajan Kumar',
    role: 'security',
    department: 'Security',
  },
  {
    id: 'usr_002',
    email: 'purchase@acwms.com',
    password: 'purchase123',
    name: 'Priya Sharma',
    role: 'purchase',
    department: 'Purchase',
  },
  {
    id: 'usr_003',
    email: 'weighbridge@acwms.com',
    password: 'weighbridge123',
    name: 'Mohan Das',
    role: 'weighbridge',
    department: 'Operations',
  },
  {
    id: 'usr_004',
    email: 'deptadmin@acwms.com',
    password: 'deptadmin123',
    name: 'Sunita Reddy',
    role: 'dept_admin',
    department: 'Administration',
  },
  {
    id: 'usr_005',
    email: 'superadmin@acwms.com',
    password: 'superadmin123',
    name: 'Vikram Singh',
    role: 'super_admin',
    department: 'IT',
  },
];

// Role display names and descriptions
export const roleConfig: Record<UserRole, { label: string; description: string; defaultRoute: string }> = {
  security: {
    label: 'Security Staff',
    description: 'Gate operations and vehicle verification',
    defaultRoute: '/security',
  },
  purchase: {
    label: 'Purchase Staff',
    description: 'PO management, registration, material approval',
    defaultRoute: '/purchase',
  },
  weighbridge: {
    label: 'Weighbridge Operator',
    description: 'Weight capture and validation',
    defaultRoute: '/weighbridge',
  },
  dept_admin: {
    label: 'Department Admin',
    description: 'Manage users in a department',
    defaultRoute: '/admin/department',
  },
  super_admin: {
    label: 'Super Admin',
    description: 'Overall system administration',
    defaultRoute: '/admin',
  },
};

// Helper to find user by credentials
export const findUserByCredentials = (email: string, password: string): MockUser | undefined => {
  return mockUsers.find(
    (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
  );
};

// Helper to get default route for a role
export const getDefaultRouteForRole = (role: UserRole): string => {
  return roleConfig[role]?.defaultRoute || '/dashboard';
};
