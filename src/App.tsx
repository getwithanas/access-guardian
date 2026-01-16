import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { getDefaultRouteForRole, StaffRole } from "@/types/staff.types";

// Pages
import Login from "./pages/Login";
import SecurityDashboard from "./pages/SecurityDashboard";
import Weighbridge from "./pages/Weighbridge";
import PurchaseDashboard from "./pages/PurchaseDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DeptAdminDashboard from "./pages/DeptAdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route wrapper with role-based access
interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: StaffRole[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If roles are specified, check if user has permission
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Redirect to their default dashboard
    return <Navigate to={getDefaultRouteForRole(user.role)} replace />;
  }
  
  return <>{children}</>;
};

// Redirect authenticated users away from login
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAuth();
  
  if (isAuthenticated && user) {
    return <Navigate to={getDefaultRouteForRole(user.role)} replace />;
  }
  
  return <>{children}</>;
};

// Auto-redirect to user's default dashboard
const DashboardRedirect = () => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }
  
  return <Navigate to={getDefaultRouteForRole(user.role)} replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* Dashboard redirect - sends user to their role-specific dashboard */}
      <Route
        path="/dashboard"
        element={<DashboardRedirect />}
      />

      {/* Security Dashboard */}
      <Route
        path="/security"
        element={
          <ProtectedRoute allowedRoles={['security', 'super admin']}>
            <SecurityDashboard />
          </ProtectedRoute>
        }
      />

      {/* Weighbridge Dashboard */}
      <Route
        path="/weighbridge"
        element={
          <ProtectedRoute allowedRoles={['weighbridge', 'super admin']}>
            <Weighbridge />
          </ProtectedRoute>
        }
      />

      {/* Purchase Dashboard */}
      <Route
        path="/purchase"
        element={
          <ProtectedRoute allowedRoles={['purchase', 'super admin']}>
            <PurchaseDashboard />
          </ProtectedRoute>
        }
      />

      {/* Department Admin Dashboard */}
      <Route
        path="/admin/department"
        element={
          <ProtectedRoute allowedRoles={['dept admin', 'super admin']}>
            <DeptAdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Super Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['super admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
