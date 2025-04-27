import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CategoriesPage.css";
import BackButton from "./BackButton"; // Import BackButton

export default function CategoriesPage() {
  const navigate = useNavigate();

  const handleLearnClick = (category, e) => {
    // Ngăn sự kiện click lan truyền đến button cha
    e.stopPropagation();
    navigate(`/learn/${category}`);
  };

  return (
    <div className="categories-container">
      {/* Add BackButton under TopBar */}
      <div className="back-button-container">
        <BackButton />
      </div>

      <section className="categories-section">
        <h2>Categories</h2>

        <div className="category-buttons">
          <button className="category-button">
            <div className="category-image">
              <img src="/images/smiski furniture.jpeg" alt="Furniture" />
            </div>
            <span>Furniture</span>
            <button
              className="learn-button"
              onClick={(e) => handleLearnClick("Furniture", e)}
            >
              Learn
            </button>
          </button>

          <button className="category-button">
            <div className="category-image">
              <img src="/images/smiski toys.jpeg" alt="Toys" />
            </div>
            <span>Toys</span>
            <button
              className="learn-button"
              onClick={(e) => handleLearnClick("Toys", e)}
            >
              Learn
            </button>
          </button>

          <button className="category-button">
            <div className="category-image">
              <img src="/images/smiski clothes.jpeg" alt="Clothes" />
            </div>
            <span>Clothes</span>
            <button
              className="learn-button"
              onClick={(e) => handleLearnClick("Clothes", e)}
            >
              Learn
            </button>
          </button>

          <button className="category-button">
            <div className="category-image">
              <img src="/images/smiski fitness.jpeg" alt="Exercise" />
            </div>
            <span>Exercise</span>
            <button
              className="learn-button"
              onClick={(e) => handleLearnClick("Exercise", e)}
            >
              Learn
            </button>
          </button>

          <button className="category-button">
            <div className="category-image">
              <img src="/images/smiski jobs.jpeg" alt="Jobs" />
            </div>
            <span>Jobs</span>
            <button
              className="learn-button"
              onClick={(e) => handleLearnClick("Jobs", e)}
            >
              Learn
            </button>
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
