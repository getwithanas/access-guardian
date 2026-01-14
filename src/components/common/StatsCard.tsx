import { ReactNode } from 'react';

interface StatsCardProps {
  label: string;
  value: number | string;
  variant?: 'primary' | 'success' | 'warning' | 'destructive';
  icon?: ReactNode;
}

const StatsCard = ({ label, value, variant = 'primary', icon }: StatsCardProps) => {
  const variantClasses = {
    primary: 'stat-number-primary',
    success: 'stat-number-success',
    warning: 'stat-number-warning',
    destructive: 'stat-number-destructive'
  };

  return (
    <div className="acwms-card text-center">
      {icon && <div className="mb-2">{icon}</div>}
      <div className={`stat-number ${variantClasses[variant]}`}>{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1 font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;
