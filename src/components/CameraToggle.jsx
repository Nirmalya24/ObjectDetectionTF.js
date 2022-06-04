import { useRecoilValue } from "recoil";
import { isCameraOpenState } from "./CameraControls";

const CameraToggle = () => {
  const isCameraOpen = useRecoilValue(isCameraOpenState);

  return (
    <label className="swap swap-active text-6xl">
      {/* Camera On */}
      <div className={isCameraOpen ? "swap-on" : "swap-off"}>
        <i className="bi bi-camera-video"></i>
      </div>
      {/* Camera Off */}
      <div className={isCameraOpen ? "swap-off" : "swap-on"}>
        <i className="bi bi-camera-video-off"></i>
      </div>
    </label>
  );
};

export default CameraToggle;
