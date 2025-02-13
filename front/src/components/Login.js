import React, { useState } from "react";
import "./Login.css"; // Import du fichier CSS

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      {/* Section gauche - Formulaire de connexion */}
      <div className="login-section">
        <div className="login-box">
          <h1>login</h1>
          
          {/* Formulaire */}
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />


          <button className="signin-btn">login</button>

        </div>
      </div>

      {/* Section droite - Présentation */}
      <div className="info-section">
        <h2>Welcome to MatDash</h2>
        <p>
          MatDash helps developers build organized and well-coded dashboards
          full of beautiful and rich modules.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
}
