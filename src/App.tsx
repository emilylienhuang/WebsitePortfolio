import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming Navbar exists
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import StickerWall from "./pages/StickerWall";
import "./App.css"; // Ensure global styles are loaded

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add the Navbar */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/portfolio" element={<Portfolio />} />{" "}
          {/* Portfolio page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/stickerwall" element={<StickerWall />} />{" "}
          {/* Sticker wall page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
