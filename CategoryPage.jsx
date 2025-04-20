import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CategoryPage.css";

export default function CategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const iconPath = `/icons/${id.toLowerCase()}.png`;

  return (
    <div className="page category">
      <h2>
        Category: {id} <img src={iconPath} alt={id} />
      </h2>
      <div className="lesson-buttons">
        {[...Array(8)].map((_, i) => (
          <button key={i} onClick={() => navigate(`/learn/${id}`)}>
            Lesson {i + 1}
          </button>
        ))}
      </div>
      <div className="footer-icons">
        <img src="/icons/char1.png" alt="char1" />
        <img src="/icons/char2.png" alt="char2" />
        <img src="/icons/char3.png" alt="char3" />
        <img src="/icons/char4.png" alt="char4" />
        <img src="/icons/char5.png" alt="char5" />
      </div>
    </div>
  );
}