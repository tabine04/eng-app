import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import words from "../words";
import "../styles/TestPage.css";
import TopBar from "./TopBar"; // 🌟 Thêm TopBar

export default function TestPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

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

    const details = questions.map((q, i) => ({
      question: q.question,
      selectedAnswer: answers[i] || "No answer",
      correctAnswer: q.correct,
      isCorrect: answers[i] === q.correct,
    }));

    navigate(`/result/${categoryId}`, {
      state: {
        total: questions.length,
        correct: correctCount,
        details: details,
      },
    });
  };

  return (
    <div className="test-page">
      <TopBar /> {/* 🌟 Thêm TopBar lên đầu */}

      <h2>Test - {categoryId}</h2>

      <div className="test-question-grid">
        {questions.map((q, i) => (
          <div key={i} className="test-question-block">
            <p>{q.question}</p>
            <div className="test-options">
              {q.options.map((opt) => (
                <label key={opt} className="test-answer-option">
                  <input
                    className="test-answer-option-input"
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

      <button className="test-submit-button" onClick={handleSubmit}>Submit</button>

      <div className="test-footer-icons">
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
