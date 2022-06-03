import React from "react";
import WebcamComponent from "./WebcamComponent";

const CameraBox = () => {
  return (
    <div 
        style = {{
            width: 64, height:48
        }}
    >
    <WebcamComponent />
    </div>
  );
};

export default CameraBox;