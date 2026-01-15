import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Building2,
  Truck,
  FileText,
  ClipboardCheck,
  Activity,
  UserPlus,
  Settings,
  Shield,
} from 'lucide-react';
import { getSystemStats, getDepartmentStats, getUsersList, getActivityLogs } from '@/services/admin.service';
import type { SystemStats, DepartmentStats, UserManagement, ActivityLog } from '@/mocks/admin.mock';

const AdminDashboard = () => {
  const [systemStats, setSystemStats] = useState<SystemStats | null>(null);
  const [departments, setDepartments] = useState<DepartmentStats[]>([]);
  const [users, setUsers] = useState<UserManagement[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, deptRes, usersRes, logsRes] = await Promise.all([
          getSystemStats(),
          getDepartmentStats(),
          getUsersList(),
          getActivityLogs(),
        ]);
        setSystemStats(statsRes.data);
        setDepartments(deptRes.data);
        setUsers(usersRes.data);
        setLogs(logsRes.data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: 'bg-status-active/10 text-status-active border-status-active/30',
      inactive: 'bg-muted text-muted-foreground border-muted',
      pending: 'bg-status-warning/10 text-status-warning border-status-warning/30',
    };
    return styles[status] || styles.pending;
  };

  const getLogTypeStyle = (type: string) => {
    const styles: Record<string, string> = {
      success: 'bg-status-active/10 text-status-active',
      info: 'bg-primary/10 text-primary',
      warning: 'bg-status-warning/10 text-status-warning',
      error: 'bg-status-failed/10 text-status-failed',
    };
    return styles[type] || styles.info;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header title="Super Admin Dashboard" subtitle="System Administration" />

      <div className="p-4">
        <div className="max-w-[2000px] mx-auto space-y-6">
          {/* System Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{systemStats?.totalUsers}</p>
                    <p className="text-xs text-muted-foreground">Total Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-status-active/10 rounded-lg">
                    <Activity className="w-5 h-5 text-status-active" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-status-active">{systemStats?.activeUsers}</p>
                    <p className="text-xs text-muted-foreground">Active Now</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/50 rounded-lg">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{systemStats?.totalVehicles}</p>
                    <p className="text-xs text-muted-foreground">Vehicles</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/50 rounded-lg">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{systemStats?.totalPOs}</p>
                    <p className="text-xs text-muted-foreground">Total POs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-status-warning/10 rounded-lg">
                    <ClipboardCheck className="w-5 h-5 text-status-warning" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-status-warning">{systemStats?.pendingApprovals}</p>
                    <p className="text-xs text-muted-foreground">Pending</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-status-active/10 rounded-lg">
                    <Shield className="w-5 h-5 text-status-active" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-status-active capitalize">{systemStats?.systemHealth}</p>
                    <p className="text-xs text-muted-foreground">System Health</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Departments */}
            <div className="col-span-12 lg:col-span-4">
              <Card className="h-full border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Departments
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {departments.map((dept) => (
                    <div
                      key={dept.name}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="font-medium text-foreground">{dept.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {dept.userCount} users • {dept.activeToday} active
                        </p>
                      </div>
                      {dept.pendingTasks > 0 && (
                        <Badge variant="secondary" className="bg-status-warning/10 text-status-warning">
                          {dept.pendingTasks} pending
                        </Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Users List */}
            <div className="col-span-12 lg:col-span-4">
              <Card className="h-full border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Users
                    </CardTitle>
                    <Button size="sm" className="gap-1">
                      <UserPlus className="w-4 h-4" />
                      Add User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 max-h-[400px] overflow-y-auto">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground truncate">{user.name}</p>
                          <Badge className={`text-xs ${getStatusBadge(user.status)}`}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.role} • {user.department}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon" className="shrink-0">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Activity Log */}
            <div className="col-span-12 lg:col-span-4">
              <Card className="h-full border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-[400px] overflow-y-auto">
                  {logs.map((log) => (
                    <div key={log.id} className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${getLogTypeStyle(log.type)}`}></span>
                            <p className="font-medium text-sm text-foreground">{log.action}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 truncate">{log.details}</p>
                          <p className="text-xs text-muted-foreground">
                            by {log.userName} • {log.timestamp.split(' ')[1]}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
