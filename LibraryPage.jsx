import React from "react";
import "../styles/LibraryPage.css";

export default function LibraryPage() {
  return (
    <div className="page library">
      <h2>Your library</h2>
      <div className="tabs">
        <button>Courses</button>
        <button>Tests</button>
        <button>Lists</button>
      </div>
      <p>You have not started any course yet :(</p>
    </div>
  );
}