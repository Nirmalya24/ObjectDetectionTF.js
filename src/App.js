import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Homepage from "./components/Homepage";
import DetectionPage from "./components/DetectionPage";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detect" element={<DetectionPage />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
