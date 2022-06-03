import CameraToggle from "./CameraToggle";
import PhoneToggle from "./PhoneToggle";
import { isMobile } from "react-device-detect";

const CameraControls = () => {
  return (
    <div className="flex w-2/4 mx-auto">
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
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
