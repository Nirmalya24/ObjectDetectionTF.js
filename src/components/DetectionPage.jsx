import Navbar from "./Navbar";
import CameraRender from "./CameraRenderer";

const DetectionPage = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto px-4">
        <Navbar AppName="FindThatObject" />
        <CameraRender />
      </div>
    </div>
  );
};

export default DetectionPage;
