import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Component 
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import './App.css';

function App() {
  return (
    <Router>

      <Routes>

        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />

      </Routes>

    </Router>
  );
}

export default App;
