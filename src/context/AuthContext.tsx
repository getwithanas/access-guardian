import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { findUserByCredentials, getDefaultRouteForRole, UserRole, roleConfig } from '@/mocks/users.mock';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  department?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; redirectTo: string }>;
  logout: () => void;
  getRoleLabel: () => string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored auth on mount
    const storedUser = localStorage.getItem('acwms_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; redirectTo: string }> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = findUserByCredentials(email, password);
    
    if (foundUser) {
      const authUser: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        department: foundUser.department,
      };
      
      setUser(authUser);
      localStorage.setItem('acwms_user', JSON.stringify(authUser));
      localStorage.setItem('acwms_token', `mock_jwt_token_${foundUser.id}`);
      
      return {
        success: true,
        redirectTo: getDefaultRouteForRole(foundUser.role),
      };
    }
    
    return { success: false, redirectTo: '/login' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('acwms_user');
    localStorage.removeItem('acwms_token');
  };

  const getRoleLabel = (): string => {
    if (!user) return '';
    return roleConfig[user.role]?.label || user.role;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, getRoleLabel }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
