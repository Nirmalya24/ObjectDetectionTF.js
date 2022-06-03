import { useState, useRef, useEffect } from "react";
import Alert from "./Alert";
import CameraControls from "./CameraControls";

const CameraRender = () => {
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(() => {
        setStreamAvailable(true);
      })
      .catch((err) => {
        setStreamAvailable(false);
      });
  }, []);

  const [streamAvailable, setStreamAvailable] = useState(false);
  const videoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.play();
        setStreamAvailable(true);
      })
      .catch((err) => {
        console.log(err);
        setStreamAvailable(false);
      });
  };

  return (
    <>
      {streamAvailable ? (
        <>
          <div className="border-4 border-sky-500 rounded-lg">
            <video ref={videoRef} className="w-4/5 h-3/5" autoPlay />
          </div>

          <CameraControls />
        </>
      ) : (
        <Alert message="No camera detected" type="error" />
      )}
    </>
  );
};

export default CameraRender;
