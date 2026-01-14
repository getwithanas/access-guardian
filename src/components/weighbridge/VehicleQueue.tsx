import { Truck, Clock, Package } from 'lucide-react';
import { vehicleQueueMock } from '@/mocks/weighbridge.mock';

interface VehicleQueueProps {
  onSelectVehicle?: (vehicleId: string) => void;
  selectedId?: string;
}

const VehicleQueue = ({ onSelectVehicle, selectedId }: VehicleQueueProps) => {
  const queue = vehicleQueueMock;

  return (
    <div className="acwms-card h-full flex flex-col">
      <div className="section-header">
        <Truck className="w-5 h-5" />
        <span>Vehicle Queue</span>
        <span className="ml-auto text-sm font-normal text-muted-foreground">
          {queue.length} waiting
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {queue.map((vehicle, index) => (
          <div
            key={vehicle.id}
            onClick={() => onSelectVehicle?.(vehicle.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedId === vehicle.id
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50 bg-muted/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-primary">{vehicle.vehicleNumber}</span>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                #{index + 1}
              </span>
            </div>

            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Package className="w-3 h-3" />
                <span>{vehicle.material}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {vehicle.vendor}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {vehicle.arrivalTime}
              </div>
            </div>

            <div className="mt-2 text-xs font-medium text-primary/70">
              PO: {vehicle.poNumber}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleQueue;
