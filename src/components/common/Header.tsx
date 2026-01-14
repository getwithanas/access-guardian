import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showLive?: boolean;
}

const Header = ({ title, subtitle, showLive = false }: HeaderProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header-gradient text-primary-foreground px-8 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🛡️</span>
        <div>
          <h1 className="text-xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="text-xs opacity-80">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-6">
        {user && (
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
            <User className="w-4 h-4" />
            <div className="flex flex-col">
              <span className="text-xs opacity-80">Logged in as</span>
              <span className="text-sm font-semibold">{user.name}</span>
            </div>
          </div>
        )}

        <div className="time-badge">
          {formatTime(currentTime)}
        </div>

        {showLive && (
          <div className="flex items-center gap-2">
            <div className="live-pulse" />
            <span className="text-sm font-medium">LIVE</span>
          </div>
        )}

        {user && (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
