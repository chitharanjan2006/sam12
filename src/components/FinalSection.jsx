import React, { useEffect, useRef } from 'react';
import './FinalSection.css';

const FinalSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="final-section" ref={sectionRef}>
      <div className="final-glow-orb" />

      <div className="final-content">
        <div className="final-stars">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="final-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <p className="final-line-1 serif-font">
          One name, a million feelings.
        </p>

        <p className="final-line-2 serif-font">
          One heart, and it beats for <span className="final-name script-font">SAMRA</span>
        </p>

        <div className="final-heart-container">
          <div className="final-heart-ring ring-1" />
          <div className="final-heart-ring ring-2" />
          <div className="final-heart-ring ring-3" />
          <div className="final-heart">❤️</div>
        </div>

        <div className="final-roses">
          🌹 🌹 🌹 🌹 🌹
        </div>

        <p className="final-made-with">
          Made with all my love, just for you ❤️
        </p>
      </div>
    </section>
  );
};

export default FinalSection;
