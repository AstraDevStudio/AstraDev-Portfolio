import { Routes, Route } from "react-router-dom";
// import Astradev from "./pages/Astradev";
import './index.css'
// import ProjectPage from "./pages/ProjectPage";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
    </Routes>
  );
}

export default App;
