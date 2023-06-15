import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Screens/Home/home";
import Skills from "./Screens/Skills/skills";
import Contact from "./Screens/ContactMe/contact";
import LatestProjects from "./Screens/LatestProjects/LatestProjects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/ContactMe" element={<Contact />} />
        <Route path="/LatestProjects" element={<LatestProjects />} />
      </Routes>
    </div>
  );
}

export default App;
