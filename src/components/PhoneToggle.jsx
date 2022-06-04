import { useRecoilValue } from "recoil";
import { facingModeState } from "./CameraControls";

const PhoneToggle = () => {
  const facingMode = useRecoilValue(facingModeState);

  return (
    <label className="swap swap-active text-6xl">
      {/* Front Facing Camera */}
      <div className={facingMode === "user" ? "swap-on" : "swap-off"}>
        <i className="bi bi-phone"></i>
      </div>
      {/* Rear facing camera */}
      <div className={facingMode === "environment" ? "swap-on" : "swap-off"}>
        <i className="bi bi-phone-flip"></i>
      </div>
    </label>
  );
};

export default PhoneToggle;
