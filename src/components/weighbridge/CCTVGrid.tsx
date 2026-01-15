import { Video, Maximize2 } from 'lucide-react';
import { cctvCamerasMock } from '@/mocks/weighbridge.mock';

const CCTVGrid = () => {
  const cameras = cctvCamerasMock;

  return (
    <div className="acwms-card">
      <div className="section-header">
        <Video className="w-5 h-5" />
        <span>Live CCTV Feeds</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {cameras.map((camera) => (
          <div key={camera.id} className="relative">
            <div className="cctv-placeholder">
              <img src="/security-camera.png" alt="CCTV Feed" className="w-full h-full object-cover rounded-lg opacity-50" />
            </div>
            
            <div className="absolute top-2 left-2 flex items-center gap-2">
              <span className="rec-indicator text-[10px] py-0.5 px-2">
                REC
              </span>
              <span className="text-xs text-white bg-black/50 px-2 py-0.5 rounded">
                {camera.name}
              </span>
            </div>

            <button className="absolute top-2 right-2 p-1.5 bg-black/50 rounded hover:bg-black/70 transition-colors">
              <Maximize2 className="w-4 h-4 text-white" />
            </button>

            <div className="absolute bottom-2 right-2 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-white bg-black/50 px-1.5 py-0.5 rounded">
                {camera.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CCTVGrid;
