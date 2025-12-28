import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Build from "./pages/Build";
import Grow from "./pages/Grow";
import Umich from "./pages/Umich";
import Recap2025 from "./pages/written/2025";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/build" element={<Build />} />
      <Route path="/grow" element={<Grow />} />
      <Route path="/umich" element={<Umich />} />
      <Route path="/recap/2025" element={<Recap2025 />} />
    </Routes>
  );
}

