// Format weight with proper units
export const formatWeight = (weight: number, unit = 'kg'): string => {
  return `${weight.toLocaleString()} ${unit}`;
};

// Format date to readable string
export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Format time to readable string
export const formatTime = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

// Format vehicle number (add spaces for readability)
export const formatVehicleNumber = (number: string): string => {
  // Format: XX00XX0000 -> XX 00 XX 0000
  const match = number.match(/^([A-Z]{2})(\d{2})([A-Z]{1,3})(\d{4})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
  }
  return number;
};

// Format currency (INR)
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount);
};

// Format PO number
export const formatPONumber = (poNumber: string): string => {
  return poNumber.toUpperCase();
};

// Get status color class
export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    pending: 'warning',
    approved: 'success',
    active: 'info',
    completed: 'success',
    rejected: 'destructive',
    failed: 'destructive',
    passed: 'success',
    waiting: 'muted',
  };
  return colors[status.toLowerCase()] || 'muted';
};
