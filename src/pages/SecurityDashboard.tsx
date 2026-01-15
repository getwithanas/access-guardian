import Header from '@/components/common/Header';
import TodayStats from '@/components/dashboard/TodayStats';
import RecentVehicles from '@/components/dashboard/RecentVehicles';
import VehicleVerificationForm from '@/components/dashboard/VehicleVerificationForm';
import RecentAlerts from '@/components/dashboard/RecentAlerts';

const SecurityDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Security Dashboard" showLive />

      <div className="p-4">
        <div className="grid grid-cols-12 gap-4 max-w-[2000px] mx-auto" style={{ height: 'calc(100vh - 80px)' }}>
          {/* Left Column - Stats & Recent Vehicles */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 overflow-y-auto">
            <TodayStats />
            <RecentVehicles />
          </div>

          {/* Center Column - Verification Form */}
          <div className="col-span-12 lg:col-span-6">
            <VehicleVerificationForm />
          </div>

          {/* Right Column - Alerts */}
          <div className="col-span-12 lg:col-span-3">
            <RecentAlerts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
