import CameraToggle from "./CameraToggle";
import PhoneToggle from "./PhoneToggle";
import { isMobile } from "react-device-detect";
import { atom, useRecoilState } from "recoil";

export const isCameraOpenState = atom({
  key: "isCameraOpen",
  default: false,
});

const CameraControls = () => {
  const [isCameraOpen, setIsCameraOpen] = useRecoilState(isCameraOpenState);

  const cameraOpenToggle = () => {
    setIsCameraOpen(!isCameraOpen);
    // TODO: Delete for production
    console.log("Camera toggle clicked. Current state: ", isCameraOpen);
  };
  return (
    <div className="flex w-2/4 mx-auto">
      <div
        className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
        onClick={() => setIsCameraOpen(!isCameraOpen)}
      >
        <CameraToggle />
      </div>
      {isMobile && (
        <>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <PhoneToggle />
          </div>
        </>
      )}
    </div>
  );
};

export default CameraControls;
