import { BarChart3, Plus, Truck } from 'lucide-react';
import StatsCard from '@/components/common/StatsCard';
import { purchaseStatsMock } from '@/mocks/purchase.mock';

const PurchaseStats = () => {
  const stats = purchaseStatsMock;

  return (
    <div className="space-y-4">
      {/* Quick Actions */}
      <div className="acwms-card">
        <div className="section-header">
          <span className="text-warning">⚡</span>
          <span>Quick Actions</span>
        </div>

        <div className="space-y-3">
          <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <Plus className="w-5 h-5" />
            Create New PO
          </button>
          <button className="w-full py-3 border-2 border-primary text-primary rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
            <Truck className="w-5 h-5" />
            Register Vehicle
          </button>
        </div>
      </div>

      {/* Today's Stats */}
      <div className="acwms-card">
        <div className="section-header">
          <BarChart3 className="w-5 h-5" />
          <span>Today's Stats</span>
        </div>

        <div className="space-y-3">
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Active POs</div>
            <div className="stat-number stat-number-primary">{stats.activePOs}</div>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Pending Approval</div>
            <div className="stat-number stat-number-warning">{stats.pendingApproval}</div>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Approved Today</div>
            <div className="stat-number stat-number-success">{stats.approvedToday}</div>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Rejected</div>
            <div className="stat-number stat-number-destructive">{stats.rejected}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseStats;
