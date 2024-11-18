import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="side-navbar show">
      <ul>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
