import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import LearnPage from "./components/LearnPage";
import TestPage from "./components/TestPage";
import Flashcard from "./components/Flashcard";
import ResultPage from "./components/ResultPage";
import LibraryPage from "./components/LibraryPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ProfilePage from "./components/ProfilePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/learn/:categoryId" element={<LearnPage />} />
        <Route path="/flashcard/:categoryId" element={<Flashcard />} />
        <Route path="/test/:categoryId" element={<TestPage />} />
        <Route path="/result/:categoryId" element={<ResultPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
