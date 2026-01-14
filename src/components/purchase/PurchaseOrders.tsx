import { useState } from 'react';
import { FileText, Eye, Check, X } from 'lucide-react';
import { purchaseOrdersMock } from '@/mocks/purchase.mock';

const PurchaseOrders = () => {
  const [filter, setFilter] = useState('all');
  const orders = purchaseOrdersMock;

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    return order.status === filter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="badge-pending">PENDING</span>;
      case 'approved':
        return <span className="badge-approved">APPROVED</span>;
      case 'active':
        return <span className="badge-active">ACTIVE</span>;
      default:
        return null;
    }
  };

  return (
    <div className="acwms-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="section-header mb-0">
          <FileText className="w-5 h-5" />
          <span>Purchase Orders</span>
        </div>
        <span className="text-sm text-muted-foreground">{orders.length} Total</span>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4">
        {['all', 'pending', 'approved', 'active'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === tab
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {tab === 'all' ? 'All POs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="p-5 border border-border rounded-lg hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-primary text-lg">{order.id}</span>
              {getStatusBadge(order.status)}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <div className="text-xs uppercase text-muted-foreground mb-1">Vendor</div>
                <div className="font-medium">{order.vendor}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-muted-foreground mb-1">Material</div>
                <div className="font-medium">{order.material}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-muted-foreground mb-1">Quantity</div>
                <div className="font-medium">{order.quantity}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-muted-foreground mb-1">Delivery Date</div>
                <div className="font-medium">{order.deliveryDate}</div>
              </div>
            </div>

            {order.status === 'pending' ? (
              <div className="flex gap-3">
                <button className="flex-1 py-2.5 bg-success text-success-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Check className="w-4 h-4" />
                  Approve
                </button>
                <button className="flex-1 py-2.5 bg-destructive text-destructive-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <X className="w-4 h-4" />
                  Reject
                </button>
                <button className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            ) : (
              <button className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseOrders;
