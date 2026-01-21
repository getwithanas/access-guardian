/**
 * Login Page
 * Handles user authentication with username/password
 * Shows demo credentials for testing
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Eye, EyeOff, Info } from 'lucide-react';
import { roleConfig, StaffRole } from '@/types/staff.types';

// Demo credentials for quick testing (remove in production)
// These should match your backend seeded users
const demoCredentials: Array<{
  username: string;
  password: string;
  role: StaffRole;
}> = [
  { username: 'security', password: 'security123', role: 'security' },
  { username: 'purchase', password: 'purchase123', role: 'purchase' },
  { username: 'weighbridge', password: 'weighbridge123', role: 'weighbridge' },
  { username: 'deptadmin', password: 'deptadmin123', role: 'dept admin' },
  { username: 'superadmin', password: 'superadmin123', role: 'super admin' },
];

const Login = () => {
  // Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  // UI state
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(username, password);
      if (result.success) {
        navigate(result.redirectTo);
      } else {
        setError(result.error || 'Invalid username or password');
      }
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Autofill credentials for demo purposes
   */
  const handleQuickLogin = (demoUsername: string, demoPassword: string) => {
    setUsername(demoUsername);
    setPassword(demoPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col relative overflow-hidden">
      {/* Decorative Blue Stripes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right diagonal stripes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rotate-12">
          <div className="w-full h-4 bg-primary/20 mb-6 rounded-full animate-fade-in" />
          <div className="w-3/4 h-3 bg-primary/15 mb-5 rounded-full animate-fade-in" style={{ animationDelay: '0.1s' }} />
          <div className="w-1/2 h-2 bg-primary/10 rounded-full animate-fade-in" style={{ animationDelay: '0.2s' }} />
        </div>
        
        {/* Bottom-left diagonal stripes */}
        <div className="absolute -bottom-10 -left-20 w-80 h-80 -rotate-12">
          <div className="w-full h-3 bg-primary/15 mb-5 rounded-full animate-fade-in" style={{ animationDelay: '0.3s' }} />
          <div className="w-2/3 h-2 bg-primary/10 mb-4 rounded-full animate-fade-in" style={{ animationDelay: '0.4s' }} />
          <div className="w-1/3 h-2 bg-primary/5 rounded-full animate-fade-in" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Center-right accent stripe */}
        <div className="absolute top-1/3 -right-10 w-64 h-1 bg-gradient-to-l from-primary/30 to-transparent rounded-full animate-fade-in" style={{ animationDelay: '0.6s' }} />
        
        {/* Center-left accent stripe */}
        <div className="absolute top-2/3 -left-10 w-48 h-1 bg-gradient-to-r from-primary/25 to-transparent rounded-full animate-fade-in" style={{ animationDelay: '0.7s' }} />
      </div>

      {/* Top Navbar */}
      <nav className="w-full h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center px-8 lg:px-12 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-2xl font-bold text-primary underline decoration-2 underline-offset-4">
          ACWMS
        </h1>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 pt-16 relative z-10">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20">
          <div className="max-w-md mx-auto w-full">
            {/* Title */}
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              Access Control &
            </h2>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Weighbridge Management System
            </h2>
            <p className="text-muted-foreground text-sm">
              Secure portal for monitoring vehicles, materials,
              <br />
              and weighbridge operations at the Mahabalipuram Heritage &
              <br />
              Cultural Theme Park.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
                {error}
              </div>
            )}

            {/* Username Field */}
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Username / Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:outline-none focus:border-primary text-foreground font-medium transition-all duration-300 hover:border-primary/50 focus:translate-x-1"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:outline-none focus:border-primary text-foreground transition-all duration-300 hover:border-primary/50 focus:translate-x-1"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">Remember Me</span>
              </label>
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-32 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Demo Credentials Toggle */}
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setShowCredentials(!showCredentials)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Info className="w-4 h-4" />
              {showCredentials ? 'Hide' : 'Show'} Demo Credentials
            </button>

            {/* Demo Credentials List */}
            {showCredentials && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-3">
                  Click to autofill credentials:
                </p>
                <div className="space-y-2">
                  {demoCredentials.map((cred) => (
                    <button
                      key={cred.username}
                      type="button"
                      onClick={() => handleQuickLogin(cred.username, cred.password)}
                      className="w-full text-left p-2 rounded hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-foreground group-hover:text-primary">
                            {roleConfig[cred.role].label}
                          </span>
                          <p className="text-xs text-muted-foreground">
                            {cred.username}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {cred.password}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-background p-12">
          <div className="relative">
            <img
              src="/security-camera.png"
              alt="Security camera illustration"
              className="w-[26rem] h-[26rem] xl:w-[32rem] xl:h-[32rem] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
