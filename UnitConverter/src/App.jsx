// Router
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Length from "./pages/Length";
import Weight from "./pages/Weight";
import Temperature from "./pages/Temperature";

// Css
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <h1>Unit Converter</h1>

        <Routes>
          <Route path="/" element={<Navigate to="/length" replace />} />
          <Route path="/length" element={<Length />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="*" element={<Navigate to="/length" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
