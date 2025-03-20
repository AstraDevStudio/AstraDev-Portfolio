import { Routes, Route } from "react-router-dom";
import Astradev from "./pages/Astradev";
import './index.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Astradev />} />
    </Routes>
  );
}

export default App;
