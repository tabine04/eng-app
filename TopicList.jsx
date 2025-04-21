import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/TopicList.css";

// Mapping đúng ảnh theo tên category
const categoryIcons = {
  Furniture: "/images/smiski furniture.jpeg",
  Toys: "/images/smiski toys.jpeg",
  Clothes: "/images/smiski clothes.jpeg",
  Exercise: "/images/smiski fitness.jpeg",
  Jobs: "/images/smiski jobs.jpeg"
};

export default function CategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const iconPath = categoryIcons[id] || "/images/default.jpeg";

  return (
    <div className="page category">
      <h2>
        <span>Category: {id}</span>
        <img src={iconPath} alt={id} />
      </h2>

      <div className="lesson-buttons">
        {[...Array(8)].map((_, i) => (
          <button key={i} onClick={() => navigate(`/learn/${id}`)}>
            Lesson {i + 1}
          </button>
        ))}
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
