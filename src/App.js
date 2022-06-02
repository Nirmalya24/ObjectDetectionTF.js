import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WebcamComponent from "./components/WebcamComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      </header>
      <WebcamComponent />
    </div>
  );
}

export default App;
