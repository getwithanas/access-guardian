// Admin dashboard mock data

export interface SystemStats {
  totalUsers: number;
  activeUsers: number;
  totalVehicles: number;
  totalPOs: number;
  pendingApprovals: number;
  systemHealth: 'healthy' | 'warning' | 'critical';
}

export interface DepartmentStats {
  name: string;
  userCount: number;
  activeToday: number;
  pendingTasks: number;
}

export interface UserManagement {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  details: string;
  timestamp: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export const systemStatsMock: SystemStats = {
  totalUsers: 156,
  activeUsers: 42,
  totalVehicles: 2847,
  totalPOs: 1234,
  pendingApprovals: 18,
  systemHealth: 'healthy',
};

export const departmentStatsMock: DepartmentStats[] = [
  { name: 'Security', userCount: 24, activeToday: 8, pendingTasks: 3 },
  { name: 'Purchase', userCount: 18, activeToday: 12, pendingTasks: 7 },
  { name: 'Operations', userCount: 32, activeToday: 15, pendingTasks: 5 },
  { name: 'Administration', userCount: 12, activeToday: 6, pendingTasks: 2 },
  { name: 'IT', userCount: 8, activeToday: 5, pendingTasks: 1 },
];

export const usersListMock: UserManagement[] = [
  {
    id: 'usr_001',
    name: 'Rajan Kumar',
    email: 'security@acwms.com',
    role: 'Security Staff',
    department: 'Security',
    status: 'active',
    lastLogin: '2026-01-15 09:30',
    createdAt: '2025-06-15',
  },
  {
    id: 'usr_002',
    name: 'Priya Sharma',
    email: 'purchase@acwms.com',
    role: 'Purchase Staff',
    department: 'Purchase',
    status: 'active',
    lastLogin: '2026-01-15 08:45',
    createdAt: '2025-07-20',
  },
  {
    id: 'usr_003',
    name: 'Mohan Das',
    email: 'weighbridge@acwms.com',
    role: 'Weighbridge Operator',
    department: 'Operations',
    status: 'active',
    lastLogin: '2026-01-15 07:00',
    createdAt: '2025-05-10',
  },
  {
    id: 'usr_004',
    name: 'Sunita Reddy',
    email: 'deptadmin@acwms.com',
    role: 'Dept Admin',
    department: 'Administration',
    status: 'active',
    lastLogin: '2026-01-14 16:30',
    createdAt: '2025-08-01',
  },
  {
    id: 'usr_006',
    name: 'Arjun Mehta',
    email: 'arjun@acwms.com',
    role: 'Security Staff',
    department: 'Security',
    status: 'inactive',
    lastLogin: '2026-01-10 11:00',
    createdAt: '2025-09-15',
  },
  {
    id: 'usr_007',
    name: 'Kavitha Nair',
    email: 'kavitha@acwms.com',
    role: 'Purchase Staff',
    department: 'Purchase',
    status: 'pending',
    lastLogin: '-',
    createdAt: '2026-01-14',
  },
];

export const activityLogsMock: ActivityLog[] = [
  {
    id: 'log_001',
    userId: 'usr_001',
    userName: 'Rajan Kumar',
    action: 'Vehicle Verified',
    details: 'Verified vehicle TN-01-AB-1234 at Gate 1',
    timestamp: '2026-01-15 09:45:00',
    type: 'success',
  },
  {
    id: 'log_002',
    userId: 'usr_003',
    userName: 'Mohan Das',
    action: 'Weight Captured',
    details: 'Captured weight 28,450 kg for TN-01-CD-5678',
    timestamp: '2026-01-15 09:42:00',
    type: 'info',
  },
  {
    id: 'log_003',
    userId: 'usr_002',
    userName: 'Priya Sharma',
    action: 'PO Approved',
    details: 'Approved PO #PO-2026-0089 for ₹2,45,000',
    timestamp: '2026-01-15 09:38:00',
    type: 'success',
  },
  {
    id: 'log_004',
    userId: 'system',
    userName: 'System',
    action: 'Alert Generated',
    details: 'Unregistered vehicle detected at Gate 2',
    timestamp: '2026-01-15 09:35:00',
    type: 'warning',
  },
  {
    id: 'log_005',
    userId: 'usr_004',
    userName: 'Sunita Reddy',
    action: 'User Created',
    details: 'Created new user account for kavitha@acwms.com',
    timestamp: '2026-01-14 16:30:00',
    type: 'info',
  },
  {
    id: 'log_006',
    userId: 'system',
    userName: 'System',
    action: 'Backup Completed',
    details: 'Daily database backup completed successfully',
    timestamp: '2026-01-15 02:00:00',
    type: 'success',
  },
];

// Department admin specific mock data
export const departmentUsersMock = (department: string): UserManagement[] => {
  return usersListMock.filter((user) => user.department === department);
};
