import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TopBar.css";
import MenuBar from "./MenuBar";

export default function TopBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const shouldShowFurniture = searchTerm.toLowerCase().includes("furn");
  const showNotification = () => {
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 15000);
  };

  const hideNotification = () => {
    setNotificationVisible(false);
  };

  return (
    <>
      {/* Nếu mở menu */}
      {menuOpen && <MenuBar closeMenu={() => setMenuOpen(false)} />}

      {/* Thanh TopBar */}
      <div className="top-bar">
        <div className="topbar-left" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className="search-area">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="logout" onClick={showNotification}>
          <p>Log out</p>
          <img src="/image/smiskileaving.png" alt="Log out" className="leaving" />
        </button>

        {isNotificationVisible && (
          <div className="hpnotification-box">
            <button className="hpclose-button" onClick={hideNotification}>X</button>
            <div className="hpnotification-content">
              <p>Do you really want to logout?</p>
              <a href="/" className="logout-button">Log out</a>
            </div>
          </div>
        )}

         {/* 🌟 Suggestion Box */}
         {shouldShowFurniture && (
          <div className="search-result-box">
            <span className="search-category-name">Furniture</span>
            <button
              className="search-learn-button"
              onClick={() => navigate(`/category/furniture`)}
            >
              Learn
            </button>
          </div>
        )}
      </div>
    </>
  );
}
