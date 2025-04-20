import React from "react";
import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="page login">
      <h2>Log in</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
      <p>Don't have an account? Sign up!</p>
    </div>
  );
}