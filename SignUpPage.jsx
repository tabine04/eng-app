import React from "react";
import "../styles/SignUpPage.css";

export default function SignUpPage() {
  return (
    <div className="page signup">
      <div className="header">
      <a href="/" className="back-button">← Back to Home</a>
        <h1><b>Sign up</b></h1>
        <img src="/image/A.png" alt="Logo" className="logoo" />
      </div>
      <div className="signup-box">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="signup-button"><b>Sign up</b></button>
        <a href="/login" className="login-link">
        Already have an account? Log in!
        </a>
      </div>
    </div>
  );
}
