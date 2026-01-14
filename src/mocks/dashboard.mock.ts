export const dashboardStatsMock = {
  activeTrips: 8,
  completed: 127,
  failed: 3,
  onHold: 2
};

export const recentVehiclesMock = [
  { id: '1', number: 'KL01AB1234', time: '02:30 PM', status: 'Entered' },
  { id: '2', number: 'TN09GH3456', time: '02:15 PM', status: 'Exited' },
  { id: '3', number: 'KL02CD5678', time: '01:45 PM', status: 'Entered' },
  { id: '4', number: 'MH12KL1122', time: '01:30 PM', status: 'Exited' },
  { id: '5', number: 'AP41UT6370', time: '01:15 PM', status: 'Entered' }
];

export const recentAlertsMock = [
  {
    id: '1',
    time: '04:01 PM',
    message: 'Unregistered vehicle AP41UT6370 detected',
    type: 'warning'
  },
  {
    id: '2',
    time: '02:35 PM',
    message: 'Vehicle KL01AB1234 trip started - Driver: Rajesh Kumar',
    type: 'success'
  },
  {
    id: '3',
    time: '02:20 PM',
    message: 'Unregistered vehicle KL99XY9999 sent for verification',
    type: 'warning'
  },
  {
    id: '4',
    time: '01:50 PM',
    message: 'System health check completed - All systems operational',
    type: 'info'
  },
  {
    id: '5',
    time: '01:35 PM',
    message: 'Vehicle MH12KL1122 approved after verification',
    type: 'success'
  }
];

export const currentVehicleMock = {
  number: 'AP41UT6370',
  isRegistered: false
};
