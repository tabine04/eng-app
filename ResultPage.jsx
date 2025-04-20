import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ResultPage.css";

export default function ResultPage() {
  const { categoryId } = useParams();
  return (
    <div className="page result">
      <h2>Results - {categoryId}</h2>
      <p>You got 8/10 correct!</p>
      <blockquote>“Great job! Keep going 💪”</blockquote>
    </div>
  );
}
