import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WebcamComponent from "./components/WebcamComponent";
import Navbar from "./components/Navbar";
import DaisyCard from "./components/DaisyCard";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <WebcamComponent />
      {/* <DaisyCard /> */}
    </div>
  );
}

export default App;
