export const purchaseStatsMock = {
  activePOs: 28,
  pendingApproval: 12,
  approvedToday: 45,
  rejected: 3
};

export const purchaseOrdersMock = [
  {
    id: 'PO123456',
    vendor: 'ABC Steel Corp',
    material: 'Steel Rods',
    quantity: '50 Tons',
    deliveryDate: '2026-01-15',
    status: 'pending'
  },
  {
    id: 'PO789012',
    vendor: 'XYZ Cement Ltd',
    material: 'Cement',
    quantity: '100 Tons',
    deliveryDate: '2026-01-14',
    status: 'approved'
  },
  {
    id: 'PO345678',
    vendor: 'LMN Sand Suppliers',
    material: 'Sand',
    quantity: '75 Tons',
    deliveryDate: '2026-01-13',
    status: 'active'
  },
  {
    id: 'PO901234',
    vendor: 'PQR Bricks',
    material: 'Bricks',
    quantity: '5000 Units',
    deliveryDate: '2026-01-16',
    status: 'pending'
  },
  {
    id: 'PO567890',
    vendor: 'Rocky Materials',
    material: 'Aggregates',
    quantity: '80 Tons',
    deliveryDate: '2026-01-17',
    status: 'pending'
  }
];

export const materialApprovalsMock = [
  {
    id: '1',
    name: 'Steel Rods - Grade A',
    supplier: 'ABC Steel Corp',
    quantity: '50 Tons',
    status: 'pending'
  },
  {
    id: '2',
    name: 'Cement - Portland',
    supplier: 'XYZ Cement Ltd',
    quantity: '100 Bags',
    status: 'pending'
  },
  {
    id: '3',
    name: 'Sand - River Sand',
    supplier: 'LMN Sand Suppliers',
    quantity: '75 Cubic Meters',
    status: 'pending'
  },
  {
    id: '4',
    name: 'Bricks - Red Clay',
    supplier: 'PQR Bricks',
    quantity: '5000 Units',
    status: 'pending'
  }
];

export const recentActivityMock = [
  {
    id: '1',
    action: 'PO123456 created by John Doe',
    time: '03:45 PM'
  },
  {
    id: '2',
    action: 'Material approved for PO789012',
    time: '03:20 PM'
  },
  {
    id: '3',
    action: 'Vendor XYZ Cement Ltd verified',
    time: '02:55 PM'
  },
  {
    id: '4',
    action: 'PO345678 status updated to Active',
    time: '02:30 PM'
  }
];
