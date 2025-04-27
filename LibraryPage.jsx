import React, { useState } from "react";
import "../styles/LibraryPage.css";
import BackButton from "./BackButton";

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("courses");

  const renderContent = () => {
    switch (activeTab) {
      case "courses":
        return (
          <div className="empty-state">
            <div className="empty-icon"></div>
            <p>You have not started any courses yet :(</p>
          </div>
        );
      case "tests":
        return (
          <div className="empty-state">
            <div className="empty-icon"></div>
            <p>You have not taken any tests yet :(</p>
          </div>
        );
      case "lists":
        return (
          <div className="empty-state">
            <div className="empty-icon"></div>
            <p>You have not created any lists yet :(</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="library-container">
      <div className="back-button-container">
        <BackButton />
      </div>

      <div className="library-content">
        <h2 className="library-title">Your library</h2>
        <div className="tabs">
          <button
            className={`tab ${activeTab === "courses" ? "active" : ""}`}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </button>
          <button
            className={`tab ${activeTab === "tests" ? "active" : ""}`}
            onClick={() => setActiveTab("tests")}
          >
            Tests
          </button>
          <button
            className={`tab ${activeTab === "lists" ? "active" : ""}`}
            onClick={() => setActiveTab("lists")}
          >
            Lists
          </button>
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
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
