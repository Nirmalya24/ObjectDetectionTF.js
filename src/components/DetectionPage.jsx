import Navbar from "./Navbar";
import Alert from "./Alert";
import CameraRender from "./CameraRenderer";

const DetectionPage = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto px-4">
        <Navbar AppName="FindThatObject" />
        <Alert message="Detection stuff to be shown here" type="info" />
        <Alert message="No camera detected" type="error" />
        <CameraRender />
      </div>
    </div>
  );
};

export default DetectionPage;
