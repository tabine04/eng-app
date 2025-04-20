import React from "react";
import "../styles/ProfilePage.css";

export default function ProfilePage() {
  return (
    <div className="page profile">
      <h2>Your Profile</h2>
      <input type="text" placeholder="User name" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="✎Bio" />
    </div>
  );
}
