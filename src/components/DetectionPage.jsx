import Navbar from "./Navbar";
import Alert from "./Alert";

const DetectionPage = () => {
  return (
    <div className="h-screen">
      <div class="container mx-auto px-4">
        <Navbar AppName="FindThatObject" />
        <Alert message="Detection stuff to be shown here" type="info" />
      </div>
    </div>
  );
};

export default DetectionPage;
