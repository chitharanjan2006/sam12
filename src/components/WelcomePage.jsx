import React, { useState } from 'react';
import { startSong } from '../music';
import './WelcomePage.css';

const WelcomePage = ({ onEnter }) => {
  const [exiting, setExiting] = useState(false);

  const handleClick = () => {
    startSong(); // user click = allowed to start audio
    setExiting(true);
    setTimeout(() => onEnter(), 1200);
  };

  return (
    <div className={`welcome-page ${exiting ? 'exiting' : ''}`}>
      <div className="welcome-glow-orb orb-1" />
      <div className="welcome-glow-orb orb-2" />
      <div className="welcome-glow-orb orb-3" />

      <div className="welcome-content">
        <div className="welcome-hearts-ring">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="ring-heart"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-120px)`,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              ❤
            </span>
          ))}
        </div>

        <h1 className="welcome-title">
          <span className="welcome-hey">Hey,</span>
          <span className="welcome-my">My Beautiful</span>
          <span className="welcome-name script-font">SAMRA</span>
          <span className="welcome-heart-icon">❤️</span>
        </h1>

        <p className="welcome-subtitle serif-font">
          I made something special for you. Every little detail here comes straight from my heart.
        </p>

        <button className="welcome-btn" onClick={handleClick}>
          <span className="btn-glow" />
          <span className="btn-text">Open My Heart ❤️</span>
        </button>

        <div className="welcome-roses">
          🌹 🌹 🌹
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
