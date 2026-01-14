import Header from '@/components/common/Header';
import PurchaseStats from '@/components/purchase/PurchaseStats';
import PurchaseOrders from '@/components/purchase/PurchaseOrders';
import MaterialApprovals from '@/components/purchase/MaterialApprovals';

const PurchaseDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="ACWMS - Purchase Department" subtitle="Purchase Manager" />

      <div className="p-4">
        <div className="grid grid-cols-12 gap-4 max-w-[2000px] mx-auto" style={{ height: 'calc(100vh - 80px)' }}>
          {/* Left Column - Quick Actions & Stats */}
          <div className="col-span-12 lg:col-span-3 overflow-y-auto">
            <PurchaseStats />
          </div>

          {/* Center Column - Purchase Orders */}
          <div className="col-span-12 lg:col-span-5">
            <PurchaseOrders />
          </div>

          {/* Right Column - Material Approvals & Activity */}
          <div className="col-span-12 lg:col-span-4 overflow-y-auto">
            <MaterialApprovals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDashboard;
