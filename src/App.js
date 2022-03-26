import { Routes, Route } from "react-router-dom";
import Toolbar from "./component/Toolbar";
import About from "./pages/About";
import Home from "./pages/Home";



function App() {
  return (
    <>
    <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </>
  );
}

export default App;
