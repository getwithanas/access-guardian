import { Scale, ArrowDown, ArrowUp, Target } from 'lucide-react';
import { currentWeighingMock } from '@/mocks/weighbridge.mock';

const WeightDisplay = () => {
  const data = currentWeighingMock;

  return (
    <div className="acwms-card">
      <div className="section-header">
        <Scale className="w-5 h-5" />
        <span>Live Weight Reading</span>
      </div>

      <div className="weight-display mb-6">
        {data.grossWeight.toLocaleString()} {data.unit}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-2">
            <ArrowDown className="w-4 h-4" />
            <span className="text-xs uppercase">Gross</span>
          </div>
          <div className="font-bold text-lg">{data.grossWeight.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">{data.unit}</div>
        </div>

        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-2">
            <ArrowUp className="w-4 h-4" />
            <span className="text-xs uppercase">Tare</span>
          </div>
          <div className="font-bold text-lg">{data.tareWeight.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">{data.unit}</div>
        </div>

        <div className="text-center p-4 bg-success/10 rounded-lg border-2 border-success">
          <div className="flex items-center justify-center gap-1 text-success mb-2">
            <Target className="w-4 h-4" />
            <span className="text-xs uppercase">Net</span>
          </div>
          <div className="font-bold text-lg text-success">{data.netWeight.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">{data.unit}</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm p-3 bg-muted/50 rounded-lg">
        <span className="text-muted-foreground">Expected Weight:</span>
        <span className="font-bold">{data.expectedWeight.toLocaleString()} {data.unit}</span>
      </div>

      <div className="mt-4 p-3 bg-primary/5 rounded-lg">
        <div className="text-sm font-medium text-primary mb-1">Current Vehicle</div>
        <div className="flex items-center justify-between">
          <span className="font-bold">{data.vehicleNumber}</span>
          <span className="text-sm text-muted-foreground">PO: {data.poNumber}</span>
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {data.material} • {data.vendor}
        </div>
      </div>
    </div>
  );
};

export default WeightDisplay;
