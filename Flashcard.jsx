import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import words from "../words";
import "../styles/Flashcard.css";
import TopBar from "./TopBar"; // 🌟 Thêm TopBar

export default function Flashcard() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const word = words[index];

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
    <div className="page flashcard">
      <TopBar /> {/* 🌟 Thêm TopBar lên đầu */}

      <h2>Flashcards - {categoryId}</h2>

      <div
        className={`card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {!flipped ? (
          <div>
            <h3>{word.word}</h3>
            <p>{word.phonetic}</p>
          </div>
        ) : (
          <div>
            <p><strong>Synonym:</strong> {word.synonym}</p>
            <p><strong>Antonym:</strong> {word.antonym}</p>
          </div>
        )}
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((index + 1) / words.length) * 100}%` }}
        ></div>
      </div>

      <div className="navigation-buttons">
        {index > 0 && (
          <button onClick={() => { setFlipped(false); setIndex(index - 1); }}>
            Previous
          </button>
        )}
        {index < words.length - 1 ? (
          <button onClick={() => { setFlipped(false); setIndex(index + 1); }}>
            Next
          </button>
        ) : (
          <button className="finish-button" onClick={showNotification}>
            Finish
          </button>
        )}
      </div>

      {isNotificationVisible && (
        <div className="notification-overlay" onClick={hideNotification}>
          <div className="notification-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={hideNotification}>x</button>
            <div className="notification-content">
              <p>Congratulations! You have finished this lesson.</p>
              <img src="/images/smiskithanhcong.png" alt="Success" />
              <button 
                className="try-test-button" 
                onClick={() => navigate(`/test/${categoryId}`)}
              >
                Take a test
              </button>
            </div>
          </div>
        </div>
      )}

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
