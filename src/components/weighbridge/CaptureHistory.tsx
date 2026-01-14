import { History, CheckCircle, XCircle, Clock } from 'lucide-react';
import { captureHistoryMock } from '@/mocks/weighbridge.mock';

const CaptureHistory = () => {
  const history = captureHistoryMock;

  return (
    <div className="acwms-card h-full flex flex-col">
      <div className="section-header">
        <History className="w-5 h-5" />
        <span>Capture History</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {history.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-lg border-l-4 bg-muted/30 ${
              item.status === 'passed' ? 'border-l-success' : 'border-l-destructive'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-primary">{item.vehicleNumber}</span>
              {item.status === 'passed' ? (
                <span className="badge-approved flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Passed
                </span>
              ) : (
                <span className="badge-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  Failed
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mb-2">
              <div>
                <span className="text-muted-foreground">Gross: </span>
                <span className="font-medium">{item.grossWeight.toLocaleString()} kg</span>
              </div>
              <div>
                <span className="text-muted-foreground">Net: </span>
                <span className="font-medium">{item.netWeight.toLocaleString()} kg</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>PO: {item.poNumber}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.captureTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaptureHistory;
