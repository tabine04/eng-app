import React from "react";
import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="page login">
      <div className="header">
      <a href="/" className="back-button">← Back to Home</a>
        <h1><b>Log in</b></h1>
        <img src="/image/A.png" alt="Logo" className="logoo" />
      </div>
      <div className="login-box">
        <input type="text" placeholder="Username / Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-button"><b>Log in</b></button>
        <a href="/signup" className="signup-link">
        Don't have an account? Sign up!
        </a>
      </div>
    </div>
  );
}
