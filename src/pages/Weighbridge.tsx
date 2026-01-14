import { useState } from 'react';
import Header from '@/components/common/Header';
import VehicleQueue from '@/components/weighbridge/VehicleQueue';
import CCTVGrid from '@/components/weighbridge/CCTVGrid';
import WeightDisplay from '@/components/weighbridge/WeightDisplay';
import ActionButtons from '@/components/weighbridge/ActionButtons';
import CaptureHistory from '@/components/weighbridge/CaptureHistory';
import { toast } from 'sonner';

const Weighbridge = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>();

  const handleCapture = () => {
    toast.success('Weight captured successfully!');
  };

  const handlePass = () => {
    toast.success('Vehicle passed!');
  };

  const handleFail = () => {
    toast.error('Vehicle failed verification');
  };

  const handleReset = () => {
    toast.info('Weight reset');
  };

  const handleHold = () => {
    toast.warning('Vehicle on hold');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Weighbridge Operator" subtitle="ACWMS" showLive />

      <div className="p-4">
        <div className="grid grid-cols-12 gap-4 max-w-[2000px] mx-auto" style={{ height: 'calc(100vh - 80px)' }}>
          {/* Left Column - Vehicle Queue */}
          <div className="col-span-12 lg:col-span-3 overflow-y-auto">
            <VehicleQueue
              onSelectVehicle={setSelectedVehicle}
              selectedId={selectedVehicle}
            />
          </div>

          {/* Center Column - CCTV, Weight Display, Actions */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 overflow-y-auto">
            <CCTVGrid />
            <WeightDisplay />
            <ActionButtons
              onCapture={handleCapture}
              onPass={handlePass}
              onFail={handleFail}
              onReset={handleReset}
              onHold={handleHold}
            />
          </div>

          {/* Right Column - Capture History */}
          <div className="col-span-12 lg:col-span-4 overflow-y-auto">
            <CaptureHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weighbridge;
