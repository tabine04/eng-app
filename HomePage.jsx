import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="sidebar">
        <div className="menu-label">☰ Menu</div>
        <button className="menu-item">
          <img src="/icons/home.png" alt="Home" />
          Home
        </button>
        <button className="menu-item" onClick={() => navigate("/library")}>
  <img src="/icons/library.png" alt="Library" />
  Your library
</button>
        <button className="menu-item" onClick={() => navigate("/category/Furniture")}>
  <img src="/icons/categories.png" alt="Categories" />
  Categories
</button>
      </div>

      <div className="main-content">
        <div className="topbar">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="add-button">＋</button>
          <div className="avatar"></div>
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
