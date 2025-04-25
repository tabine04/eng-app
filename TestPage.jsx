import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import words from "../words";
import "../styles/TestPage.css";

export default function TestPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  const questions = useMemo(() => {
    return words.map((word) => {
      const options = shuffle([
        word.synonym,
        word.antonym,
        ...randomWrongOptions(word.synonym, word.antonym),
      ]);
      return {
        question: `What is the synonym of "${word.word}"?`,
        correct: word.synonym,
        options,
      };
    });
  }, []);

  const handleSelect = (index, selected) => {
    setAnswers((prev) => ({ ...prev, [index]: selected }));
  };

  const handleSubmit = () => {
    const correctCount = questions.reduce((acc, q, i) => {
      return acc + (answers[i] === q.correct ? 1 : 0);
    }, 0);

    navigate(`/result/${categoryId}`, {
      state: {
        total: questions.length,
        correct: correctCount,
      },
    });
  };

  return (
    <div className="page test">
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

      <h2>Test - {categoryId}</h2>

      <div className="question-grid">
        {questions.map((q, i) => (
          <div key={i} className="question-block">
            <p>{q.question}</p>
            <div className="options">
              {q.options.map((opt) => (
                <label key={opt} className="answer-option">
                  <input className="anser-option-input"
                    type="radio"
                    name={`q${i}`}
                    checked={answers[i] === opt}
                    onChange={() => handleSelect(i, opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Submit</button>

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

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function randomWrongOptions(correct, wrong) {
  const pool = words.map(w => w.synonym).filter(w => w !== correct && w !== wrong);
  const unique = [...new Set(pool)];
  return shuffle(unique).slice(0, 2);
}
