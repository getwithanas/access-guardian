import { Search, Check, X } from 'lucide-react';
import { materialApprovalsMock, recentActivityMock } from '@/mocks/purchase.mock';

const MaterialApprovals = () => {
  const materials = materialApprovalsMock;
  const activities = recentActivityMock;

  return (
    <div className="space-y-4">
      {/* Material Approvals */}
      <div className="acwms-card">
        <div className="flex items-center justify-between mb-4">
          <div className="section-header mb-0">
            <Search className="w-5 h-5" />
            <span>Material Approvals</span>
          </div>
          <span className="text-sm text-warning font-medium">{materials.length} Pending</span>
        </div>

        <div className="space-y-4">
          {materials.map((material) => (
            <div key={material.id} className="p-4 bg-muted/30 rounded-lg">
              <div className="font-bold text-foreground mb-2">{material.name}</div>
              <div className="text-sm text-muted-foreground mb-1">
                Supplier: {material.supplier}
              </div>
              <div className="text-sm text-muted-foreground mb-3">
                Quantity: {material.quantity}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-success text-success-foreground rounded-lg font-medium text-sm flex items-center justify-center gap-1 hover:opacity-90 transition-opacity">
                  <Check className="w-4 h-4" />
                  Approve
                </button>
                <button className="flex-1 py-2 bg-destructive text-destructive-foreground rounded-lg font-medium text-sm flex items-center justify-center gap-1 hover:opacity-90 transition-opacity">
                  <X className="w-4 h-4" />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="acwms-card">
        <div className="section-header">
          <span className="text-lg">📋</span>
          <span>Recent Activity</span>
        </div>

        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="p-3 bg-muted/30 rounded-lg border-l-4 border-l-primary"
            >
              <div className="text-sm">{activity.action}</div>
              <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaterialApprovals;
