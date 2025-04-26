import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import MenuBar from "./MenuBar";

export default function HomePage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="homepage-container">
      {/* ☰ Toggle menu icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu Overlay */}
      {menuOpen && <MenuBar />}
      
      <div className="main-content">
        <div className="topbar">
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="avatar" onClick={() => navigate("/login")}></div>
          </div>

        <div className="hero-section">
          <div className="hero-big-box"></div>
          <div className="hero-small-boxes">
            <div className="small-box"></div>
            <div className="small-box"></div>
            <div className="small-box"></div>
          </div>
        </div>

        <h2 className="section-title">Continue your sessions</h2>
        <div className="sessions">
          <div className="session-box"></div>
          <div className="session-box"></div>
          <div className="session-box"></div>
          <div className="session-box"></div>
        </div>
      </div>

      <div className="footer-icons">
        <img src="/images/smiski fitness.jpeg" alt="char1" />
        <img src="/images/smiski icon.jpeg" alt="char2" />
        <img src="/images/smiski resting.jpeg" alt="char3" />
        <img src="/images/smiski trumpet.jpeg" alt="char4" />
        <img src="/images/smiski laptop.jpeg" alt="char5" />
      </div>
    </div>
  );
}
