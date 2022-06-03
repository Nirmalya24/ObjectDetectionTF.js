import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import DetectionPage from "./components/DetectionPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detect" element={<DetectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
