import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/LearnPage.css";

const words = [
  { word: "Chair", phonetic: "/ʧɛər/", synonym: "Seat", antonym: "Stand" },
  { word: "Table", phonetic: "/ˈteɪ.bəl/", synonym: "Desk", antonym: "Floor" },
  { word: "Lamp", phonetic: "/læmp/", synonym: "Light", antonym: "Dark" },
  { word: "Sofa", phonetic: "/ˈsəʊ.fə/", synonym: "Couch", antonym: "Stool" },
  { word: "Curtain", phonetic: "/ˈkɜː.tən/", synonym: "Drape", antonym: "Window" },
  { word: "Carpet", phonetic: "/ˈkɑː.pɪt/", synonym: "Rug", antonym: "Floor" },
  { word: "Drawer", phonetic: "/drɔːr/", synonym: "Cabinet", antonym: "Shelf" },
  { word: "Mirror", phonetic: "/ˈmɪr.ər/", synonym: "Glass", antonym: "Wall" },
  { word: "Clock", phonetic: "/klɒk/", synonym: "Timer", antonym: "Timeless" },
  { word: "Bed", phonetic: "/bed/", synonym: "Mattress", antonym: "Floor" },
];

export default function LearnPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="page learn">
      <h2>Category: {categoryId}</h2>
      <div className="words">
        {words.map((w, i) => (
          <div key={i} className="word">
            <h3>{w.word}</h3>
            <p>{w.phonetic}</p>
            <p>Synonym: {w.synonym}</p>
            <p>Antonym: {w.antonym}</p>
          </div>
        ))}
      </div>
      <div className="actions">
        <button onClick={() => navigate(`/flashcard/${categoryId}`)}>Flashcards</button>
        <button onClick={() => navigate(`/result/${categoryId}`)}>Done</button>
        <button onClick={() => navigate(`/test/${categoryId}`)}>Take Test</button>
      </div>
    </div>
  );
}
