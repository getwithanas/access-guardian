import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import {
  Users,
  UserPlus,
  Settings,
  Activity,
  Mail,
  Calendar,
  MoreVertical,
} from 'lucide-react';
import { getDepartmentUsers, getActivityLogs } from '@/services/admin.service';
import type { UserManagement, ActivityLog } from '@/mocks/admin.mock';

const DeptAdminDashboard = () => {
  const { user } = useAuth();
  const [deptUsers, setDeptUsers] = useState<UserManagement[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, logsRes] = await Promise.all([
          getDepartmentUsers(user?.department || 'Administration'),
          getActivityLogs(),
        ]);
        setDeptUsers(usersRes.data);
        setLogs(logsRes.data.slice(0, 5)); // Show only recent 5 logs
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user?.department]);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: 'bg-success/10 text-success border-success/30',
      inactive: 'bg-muted text-muted-foreground border-muted',
      pending: 'bg-warning/10 text-warning border-warning/30',
    };
    return styles[status] || styles.pending;
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
      <Header title="Department Admin" subtitle={`${user?.department || 'Department'} Management`} />

      <div className="p-4">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{deptUsers.length}</p>
                    <p className="text-xs text-muted-foreground">Total Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Activity className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-success">
                      {deptUsers.filter((u) => u.status === 'active').length}
                    </p>
                    <p className="text-xs text-muted-foreground">Active Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Users className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-warning">
                      {deptUsers.filter((u) => u.status === 'pending').length}
                    </p>
                    <p className="text-xs text-muted-foreground">Pending</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <Users className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-muted-foreground">
                      {deptUsers.filter((u) => u.status === 'inactive').length}
                    </p>
                    <p className="text-xs text-muted-foreground">Inactive</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Users List */}
            <div className="col-span-12 lg:col-span-8">
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Department Users
                    </CardTitle>
                    <Button size="sm" className="gap-1">
                      <UserPlus className="w-4 h-4" />
                      Add User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {deptUsers.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        No users found in this department
                      </p>
                    ) : (
                      deptUsers.map((deptUser) => (
                        <div
                          key={deptUser.id}
                          className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-primary font-semibold">
                                {deptUser.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-foreground">{deptUser.name}</p>
                                <Badge className={`text-xs ${getStatusBadge(deptUser.status)}`}>
                                  {deptUser.status}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 mt-1">
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Mail className="w-3 h-3" />
                                  {deptUser.email}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  Last login: {deptUser.lastLogin}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Settings className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Activity */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Quick Actions */}
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <UserPlus className="w-4 h-4" />
                    Add New User
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    Send Announcement
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Settings className="w-4 h-4" />
                    Department Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {logs.map((log) => (
                    <div key={log.id} className="p-3 bg-muted/30 rounded-lg">
                      <p className="font-medium text-sm text-foreground">{log.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{log.details}</p>
                      <p className="text-xs text-muted-foreground">
                        {log.timestamp.split(' ')[1]}
                      </p>
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

export default DeptAdminDashboard;
