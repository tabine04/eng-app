import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/TestPage.css";

const questions = [
  {
    question: "What is the synonym of 'Chair'?",
    options: ["Seat", "Floor", "Wall", "Window"],
    answer: "Seat",
  },
];

export default function TestPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="page test">
      <h2>Test - {categoryId}</h2>
      {questions.map((q, i) => (
        <div key={i} className="question-block">
          <p>{q.question}</p>
          {q.options.map((opt) => (
            <label key={opt}><input type="radio" name={`q${i}`} /> {opt}</label>
          ))}
        </div>
      ))}
      <button onClick={() => navigate(`/result/${categoryId}`)}>Submit</button>
    </div>
  );
}