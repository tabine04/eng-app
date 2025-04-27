import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../styles/ResultPage.css";
import TopBar from "./TopBar"; // 🌟 Thêm TopBar

export default function ResultPage() {
  const { categoryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { correct = 0, total = 10, details = [] } = location.state || {};

  const correctAnswers = details.filter((d) => d.isCorrect);
  const wrongAnswers = details.filter((d) => !d.isCorrect);

  return (
    <div className="page result">
      <TopBar /> {/* 🌟 Thêm TopBar lên đầu */}

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
            Start Again
          </button>
          <button
            className="retry-button"
            onClick={() => navigate(`/category/${categoryId}`)}
          >
            Back to Categories
          </button>
        </div>
      </div>

      <div className="answer-summary">
        <div className="answer-column correct-column">
          <h3>Correct Answers</h3>
          {correctAnswers.map((item, idx) => (
            <div key={idx} className="answer-card correct">
              <p><strong>Q:</strong> {item.question}</p>
              <p><strong>Your Answer:</strong> {item.selectedAnswer}</p>
            </div>
          ))}
        </div>

        <div className="answer-column wrong-column">
          <h3>Wrong Answers</h3>
          {wrongAnswers.map((item, idx) => (
            <div key={idx} className="answer-card wrong">
              <p><strong>Q:</strong> {item.question}</p>
              <p><strong>Your Answer:</strong> {item.selectedAnswer}</p>
              <p><strong>Correct Answer:</strong> {item.correctAnswer}</p>
            </div>
          ))}
        </div>
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
