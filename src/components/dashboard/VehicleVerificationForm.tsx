import { useState } from 'react';
import { Search, Truck, User, Video, MapPin } from 'lucide-react';
import { currentVehicleMock } from '@/mocks/dashboard.mock';

const VehicleVerificationForm = () => {
  const currentVehicle = currentVehicleMock;
  const [formData, setFormData] = useState({
    vehicleType: '',
    tareWeight: '',
    poNumber: '',
    driverName: '',
    mobileNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="acwms-card h-full flex flex-col">
      {/* Camera View Header */}
      <div className="bg-muted rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="rec-indicator">
            REC
          </span>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Video className="w-5 h-5" />
          </div>
          <span className="badge-destructive flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Entry Gate
          </span>
        </div>
        
        {/* Placeholder for camera view */}
        <div className="cctv-placeholder h-40 mb-4 relative overflow-hidden">
          <img src="/security-camera.png" alt="CCTV Feed" className="w-full h-full object-cover rounded-lg opacity-50" />
        </div>
      </div>

      {/* Verification Section */}
      <div className="flex-1">
        <div className="section-header">
          <Search className="w-5 h-5" />
          <span>Vehicle Registration Verification</span>
        </div>

        {/* Number Plate Display */}
        <div className="text-center mb-6">
          <div className="number-plate">
            {currentVehicle.number}
          </div>
        </div>

        {/* Vehicle Details Form */}
        <form onSubmit={handleSubmit}>
          <div className="section-header text-base">
            <Truck className="w-4 h-4" />
            <span>Vehicle Details</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Vehicle Type *</label>
              <select
                value={formData.vehicleType}
                onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Type</option>
                <option value="truck">Truck</option>
                <option value="trailer">Trailer</option>
                <option value="tanker">Tanker</option>
                <option value="van">Van</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Manufacturer Tare Weight (kg) *</label>
              <input
                type="text"
                placeholder="Enter tare weight"
                value={formData.tareWeight}
                onChange={(e) => setFormData({ ...formData, tareWeight: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">PO Number *</label>
            <input
              type="text"
              placeholder="Enter PO Number (e.g., PO123456)"
              value={formData.poNumber}
              onChange={(e) => setFormData({ ...formData, poNumber: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="section-header text-base">
            <User className="w-4 h-4" />
            <span>Driver Details</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Driver Name *</label>
              <input
                type="text"
                placeholder="As per ID"
                value={formData.driverName}
                onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mobile Number *</label>
              <input
                type="text"
                placeholder="10 digit number"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="text-xs text-muted-foreground">Enter 10 digit mobile number</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-success text-success-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              ✓ Verify & Approve
            </button>
            <button
              type="button"
              className="flex-1 py-3 bg-destructive text-destructive-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              ✗ Reject
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleVerificationForm;
