import { Truck, Clock, MapPin } from 'lucide-react';
import { recentVehiclesMock } from '@/mocks/dashboard.mock';

const RecentVehicles = () => {
  const vehicles = recentVehiclesMock;

  return (
    <div className="acwms-card">
      <div className="section-header">
        <Truck className="w-5 h-5" />
        <span>Recent Vehicles</span>
      </div>

      <div className="space-y-3">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
          >
            <div>
              <div className="font-bold text-primary">{vehicle.number}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Clock className="w-3 h-3" />
                {vehicle.time}
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="w-4 h-4 text-destructive" />
              <span className={vehicle.status === 'Entered' ? 'text-success' : 'text-muted-foreground'}>
                {vehicle.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentVehicles;
