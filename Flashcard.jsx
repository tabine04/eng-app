import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Flashcard.css";

const cards = [
  { front: "Chair", back: "A seat with a back" },
  { front: "Lamp", back: "Device to light a room" },
];

export default function Flashcard() {
  const { categoryId } = useParams();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];

  return (
    <div className="page flashcard">
      <h2>Flashcards - {categoryId}</h2>
      <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </div>
      <button onClick={() => { setFlipped(false); setIndex((index + 1) % cards.length); }}>Next</button>
    </div>
  );
}
