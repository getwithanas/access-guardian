/**
 * Auth Context
 * Provides authentication state and methods throughout the app
 * Uses auth.service for API communication
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  login as authLogin, 
  logout as authLogout, 
  getStoredUser,
  getCurrentUser,
  isAuthenticated as checkAuth
} from '@/services/auth.service';
import type { Staff, StaffRole } from '@/types/staff.types';
import { roleConfig } from '@/types/staff.types';

// ============= TYPES =============

interface AuthContextType {
  /** Current authenticated user */
  user: Staff | null;
  /** Whether user is authenticated */
  isAuthenticated: boolean;
  /** Loading state during auth check */
  isLoading: boolean;
  /** Login with username/password */
  login: (username: string, password: string) => Promise<{ success: boolean; redirectTo: string; error?: string }>;
  /** Logout and clear session */
  logout: () => void;
  /** Get display label for current role */
  getRoleLabel: () => string;
  /** Refresh user data from API */
  refreshUser: () => Promise<void>;
}

// ============= CONTEXT =============

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============= PROVIDER =============

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Staff | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const initAuth = async () => {
      // First check localStorage for cached user
      const storedUser = getStoredUser();
      
      if (storedUser && checkAuth()) {
        setUser(storedUser);
        
        // Validate token by fetching fresh user data
        try {
          const freshUser = await getCurrentUser();
          if (freshUser) {
            setUser(freshUser);
          }
        } catch {
          // Token invalid, user will be logged out by service
          setUser(null);
        }
      }
      
      setIsLoading(false);
    };

    initAuth();
  }, []);

  /**
   * Login handler
   * @param username - User's email/username
   * @param password - User's password
   */
  const login = async (
    username: string, 
    password: string
  ): Promise<{ success: boolean; redirectTo: string; error?: string }> => {
    try {
      const { user: loggedInUser, redirectTo } = await authLogin(username, password);
      setUser(loggedInUser);
      
      return { success: true, redirectTo };
    } catch (error: unknown) {
      // Handle specific error cases
      const err = error as { response?: { status: number; data?: { detail?: string } } };
      
      if (err.response?.status === 401) {
        return { 
          success: false, 
          redirectTo: '/login', 
          error: 'Invalid username or password' 
        };
      }
      
      if (err.response?.status === 400) {
        return { 
          success: false, 
          redirectTo: '/login', 
          error: err.response.data?.detail || 'Account inactive' 
        };
      }
      
      return { 
        success: false, 
        redirectTo: '/login', 
        error: 'Login failed. Please try again.' 
      };
    }
  };

  /**
   * Logout handler
   */
  const logout = () => {
    authLogout();
    setUser(null);
  };

  /**
   * Get human-readable role label
   */
  const getRoleLabel = (): string => {
    if (!user) return '';
    return roleConfig[user.role as StaffRole]?.label || user.role;
  };

  /**
   * Refresh user data from API
   */
  const refreshUser = async (): Promise<void> => {
    const freshUser = await getCurrentUser();
    if (freshUser) {
      setUser(freshUser);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading,
        login, 
        logout, 
        getRoleLabel,
        refreshUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ============= HOOK =============

/**
 * Hook to access auth context
 * Must be used within AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
