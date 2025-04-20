import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CategoryPage.css";

export default function CategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="page category">
      <h2>Category: {id}</h2>
      <div className="lesson-buttons">
        {[...Array(8)].map((_, i) => (
          <button key={i} onClick={() => navigate(`/learn/${id}`)}>
            Lesson {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}