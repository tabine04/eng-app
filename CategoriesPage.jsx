import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CategoriesPage.css";
import TopBar from "./TopBar"; // Import TopBar
import BackButton from "./BackButton"; // Import BackButton

export default function CategoriesPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="categories-container">
      {/* Use TopBar instead of custom header */}
      <TopBar />

      {/* Add BackButton under TopBar */}
      <div className="back-button-container">
        <BackButton />
      </div>

      <section className="categories-section">
        <h2>Categories</h2>

        <div className="category-buttons">
          <button
            className="category-button"
            onClick={() => handleCategoryClick("Furniture")}
          >
            <div className="category-image">
              <img src="/images/smiski furniture.jpeg" alt="Furniture" />
            </div>
            <span>Furniture</span>
          </button>

          <button
            className="category-button"
            onClick={() => handleCategoryClick("Toys")}
          >
            <div className="category-image">
              <img src="/images/smiski toys.jpeg" alt="Toys" />
            </div>
            <span>Toys</span>
          </button>

          <button
            className="category-button"
            onClick={() => handleCategoryClick("Clothes")}
          >
            <div className="category-image">
              <img src="/images/smiski clothes.jpeg" alt="Clothes" />
            </div>
            <span>Clothes</span>
          </button>

          <button
            className="category-button"
            onClick={() => handleCategoryClick("Exercise")}
          >
            <div className="category-image">
              <img src="/images/smiski fitness.jpeg" alt="Exercise" />
            </div>
            <span>Exercise</span>
          </button>

          <button
            className="category-button"
            onClick={() => handleCategoryClick("Jobs")}
          >
            <div className="category-image">
              <img src="/images/smiski jobs.jpeg" alt="Jobs" />
            </div>
            <span>Jobs</span>
          </button>
        </div>
      </section>

      <footer className="characters-footer">
        <img
          src="/images/smiski fitness.jpeg"
          alt="character1"
          className="character"
        />
        <img
          src="/images/smiski icon.jpeg"
          alt="character2"
          className="character"
        />
        <img
          src="/images/smiski resting.jpeg"
          alt="character3"
          className="character"
        />
        <img
          src="/images/smiski trumpet.jpeg"
          alt="character4"
          className="character"
        />
        <img
          src="/images/smiski laptop.jpeg"
          alt="character5"
          className="character"
        />
      </footer>
    </div>
  );
}
