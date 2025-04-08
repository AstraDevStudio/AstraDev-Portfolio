import { Routes, Route } from "react-router-dom";
import Astradev from "./pages/Astradev";
import './index.css'
import ProjectPage from "./pages/ProjectPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Astradev />} />
      <Route path="/projects" element={<ProjectPage/>}/>
    </Routes>
  );
}

export default App;
