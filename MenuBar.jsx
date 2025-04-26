import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/MenuBar.css";

export default function MenuBar() {
  const navigate = useNavigate();
  const { categoryId } = useParams(); // ✅ Lấy categoryId từ URL nếu cần
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Thêm useState để toggle menu

  return (
    <>
      {/* ☰ Toggle menu icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu Overlay */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="menu-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="menu-bar">
              <ul>
                <li onClick={() => { navigate("/"); setMenuOpen(false); }}>🏠 Home</li>
                <li onClick={() => { navigate("/library"); setMenuOpen(false); }}>📚 Your library</li>
                <li onClick={() => { navigate(`/category/${categoryId}`); setMenuOpen(false); }}>📂 Categories</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
