export const vehicleQueueMock = [
  {
    id: '1',
    vehicleNumber: 'KL01AB1234',
    poNumber: 'PO123456',
    material: 'Steel Rods',
    vendor: 'ABC Steel Corp',
    status: 'waiting',
    arrivalTime: '02:30 PM'
  },
  {
    id: '2',
    vehicleNumber: 'TN09GH3456',
    poNumber: 'PO789012',
    material: 'Cement',
    vendor: 'XYZ Cement Ltd',
    status: 'waiting',
    arrivalTime: '02:15 PM'
  },
  {
    id: '3',
    vehicleNumber: 'KL02CD5678',
    poNumber: 'PO345678',
    material: 'Sand',
    vendor: 'LMN Sand Suppliers',
    status: 'waiting',
    arrivalTime: '01:45 PM'
  },
  {
    id: '4',
    vehicleNumber: 'MH12KL1122',
    poNumber: 'PO901234',
    material: 'Bricks',
    vendor: 'PQR Bricks',
    status: 'waiting',
    arrivalTime: '01:30 PM'
  }
];

export const currentWeighingMock = {
  vehicleNumber: 'AP15XY7890',
  poNumber: 'PO567890',
  material: 'Aggregates',
  vendor: 'Rocky Materials',
  grossWeight: 28450,
  tareWeight: 12500,
  netWeight: 15950,
  expectedWeight: 16000,
  unit: 'kg'
};

export const captureHistoryMock = [
  {
    id: '1',
    vehicleNumber: 'KL07MN4567',
    captureTime: '02:45 PM',
    grossWeight: 32100,
    netWeight: 18500,
    status: 'passed',
    poNumber: 'PO111222'
  },
  {
    id: '2',
    vehicleNumber: 'TN11PQ8901',
    captureTime: '02:20 PM',
    grossWeight: 29800,
    netWeight: 16300,
    status: 'passed',
    poNumber: 'PO333444'
  },
  {
    id: '3',
    vehicleNumber: 'AP22RS3456',
    captureTime: '01:55 PM',
    grossWeight: 27500,
    netWeight: 14000,
    status: 'failed',
    poNumber: 'PO555666'
  },
  {
    id: '4',
    vehicleNumber: 'MH33TU7890',
    captureTime: '01:30 PM',
    grossWeight: 31200,
    netWeight: 17800,
    status: 'passed',
    poNumber: 'PO777888'
  }
];

export const cctvCamerasMock = [
  { id: '1', name: 'Entry Gate', status: 'online' },
  { id: '2', name: 'Weighbridge Front', status: 'online' },
  { id: '3', name: 'Weighbridge Rear', status: 'online' },
  { id: '4', name: 'Exit Gate', status: 'online' }
];
