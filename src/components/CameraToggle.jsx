const CameraToggle = () => {
  return (
    <label className="swap swap-active text-6xl">
      {/* Camera On */}
      <div className="swap-on">
        <i className="bi bi-camera-video"></i>
      </div>
      {/* Camera Off */}
      <div className="swap-off">
        <i className="bi bi-camera-video-off"></i>
      </div>
    </label>
  );
};

export default CameraToggle;
