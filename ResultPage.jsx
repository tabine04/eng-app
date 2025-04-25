import React, { useState }  from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../styles/ResultPage.css";

export default function ResultPage() {
  const { categoryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const { correct = 0, total = 10 } = location.state || {};

  return (
    <div className="page result">
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

      <h2>Results - {categoryId}</h2>

      <div className="result-box">
        <div className="result-header">
          <span>Your score</span>
        </div>

        <div className="score-text">
          <span className="score-number">{correct}/{total}</span>
        </div>

        <p className="result-message">
          {correct === total
            ? "Perfect score! You're unstoppable 🎉"
            : correct >= 7
            ? "Great job! Keep going 💪"
            : correct >= 4
            ? "Not bad! Keep practicing 🔁"
            : "Don't give up! Try again 💡"}
        </p>

        <div className="result-actions">
          <button
            className="retry-button"
            onClick={() => navigate(`/test/${categoryId}`)}
          >
            START AGAIN
          </button>
        </div>
      </div>

      {/* Footer giống các trang khác */}
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
