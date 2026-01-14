import { BarChart3 } from 'lucide-react';
import StatsCard from '@/components/common/StatsCard';
import { dashboardStatsMock } from '@/mocks/dashboard.mock';

const TodayStats = () => {
  const stats = dashboardStatsMock;

  return (
    <div className="acwms-card">
      <div className="section-header">
        <BarChart3 className="w-5 h-5" />
        <span>Today's Statistics</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatsCard
          label="Active Trips"
          value={stats.activeTrips}
          variant="primary"
        />
        <StatsCard
          label="Completed"
          value={stats.completed}
          variant="success"
        />
        <StatsCard
          label="Failed"
          value={stats.failed}
          variant="destructive"
        />
        <StatsCard
          label="On Hold"
          value={stats.onHold}
          variant="primary"
        />
      </div>

      <button className="w-full mt-4 py-2.5 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        View Active Trips
      </button>
    </div>
  );
};

export default TodayStats;
