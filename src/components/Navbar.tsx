import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="side-navbar show">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/stickerwall" className="nav-link">
            Leave your Mark!
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
