import React from "react";
import "../styles/SignUpPage.css";

export default function SignUpPage() {
  return (
    <div className="page signup">
      <h2>Sign in</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
      <p>Already have an account? Log in!</p>
    </div>
  );
}
