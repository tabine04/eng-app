import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const categories = [
  { name: "Furniture", icon: "/icons/furniture.png" },
  { name: "Toys", icon: "/icons/toys.png" },
  { name: "Clothes", icon: "/icons/clothes.png" },
  { name: "Exercise", icon: "/icons/exercise.png" },
  { name: "Jobs", icon: "/icons/jobs.png" }
];

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="page home">
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map((c) => (
          <button key={c.name} onClick={() => navigate(`/category/${c.name}`)}>
            <img src={c.icon} alt={c.name} />
            {c.name}
          </button>
        ))}
      </div>
      <div className="footer-icons">
        <img src="/images/smiski fitness.jpeg" alt="char1" />
        <img src="/images/smiski laptop.jpeg" alt="char2" />
        <img src="/images/smiski icon.jpeg" alt="char3" />
        <img src="/images/smiski resting.jpeg" alt="char4" />
        <img src="/icons/char5.png" alt="char5" />
      </div>
    </div>
  );
}
