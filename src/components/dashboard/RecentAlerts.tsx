import { Bell, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { recentAlertsMock } from '@/mocks/dashboard.mock';

const RecentAlerts = () => {
  const alerts = recentAlertsMock;

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'info':
        return <Info className="w-4 h-4 text-info" />;
      default:
        return <Bell className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getAlertClass = (type: string) => {
    switch (type) {
      case 'warning':
        return 'alert-item-warning';
      case 'success':
        return 'alert-item-success';
      case 'info':
        return 'alert-item-info';
      default:
        return '';
    }
  };

  return (
    <div className="acwms-card h-full">
      <div className="section-header">
        <Bell className="w-5 h-5" />
        <span>Recent Alerts</span>
      </div>

      <div className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert-item ${getAlertClass(alert.type)}`}
          >
            <div className="flex items-start gap-2">
              {getAlertIcon(alert.type)}
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">{alert.time}</div>
                <div className="text-sm">{alert.message}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAlerts;
