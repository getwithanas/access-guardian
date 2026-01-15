import { Truck, Clock } from 'lucide-react';
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
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              vehicle.status === 'Entered' 
                ? 'bg-success/10 text-success' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {vehicle.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentVehicles;
