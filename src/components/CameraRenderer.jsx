import { useRecoilValue } from "recoil";
import CameraControls, { isCameraOpenState } from "./CameraControls";
import Camera from "./Camera";

const CameraRenderer = () => {
  const isCameraOpen = useRecoilValue(isCameraOpenState);
  return (
    <div>
      <div className="flex">{isCameraOpen && <Camera />}</div>

      <CameraControls />
    </div>
  );
};

export default CameraRenderer;
