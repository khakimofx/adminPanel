
// import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        background: "#282c34",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2>Admin Panel</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/" style={{ color: "#61dafb", textDecoration: "none" }}>
              Main
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: "#61dafb", textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/data" style={{ color: "#61dafb", textDecoration: "none" }}>
              Data
            </Link>
          </li>
          <li>
            <Link to="/skills" style={{ color: "#61dafb", textDecoration: "none" }}>
              Basic skills
            </Link>
          </li>
          <li>
            <Link to="/news" style={{ color: "#61dafb", textDecoration: "none" }}>
              News
            </Link>
          </li>
          <li>
            <Link to="/team" style={{ color: "#61dafb", textDecoration: "none" }}>
              Our team
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "#61dafb", textDecoration: "none" }}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
