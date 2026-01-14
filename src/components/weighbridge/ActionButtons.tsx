import { Camera, CheckCircle, XCircle, RotateCcw, Pause } from 'lucide-react';

interface ActionButtonsProps {
  onCapture?: () => void;
  onPass?: () => void;
  onFail?: () => void;
  onReset?: () => void;
  onHold?: () => void;
}

const ActionButtons = ({ onCapture, onPass, onFail, onReset, onHold }: ActionButtonsProps) => {
  return (
    <div className="acwms-card">
      <div className="section-header">
        <span>Actions</span>
      </div>

      <div className="space-y-3">
        <button
          onClick={onCapture}
          className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Camera className="w-6 h-6" />
          CAPTURE WEIGHT
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onPass}
            className="py-4 bg-success text-success-foreground rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <CheckCircle className="w-5 h-5" />
            PASS
          </button>
          <button
            onClick={onFail}
            className="py-4 bg-destructive text-destructive-foreground rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <XCircle className="w-5 h-5" />
            FAIL
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onReset}
            className="py-3 border-2 border-border text-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-muted transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={onHold}
            className="py-3 border-2 border-warning text-warning rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-warning/10 transition-colors"
          >
            <Pause className="w-4 h-4" />
            Hold
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
