import React, { useEffect, useRef, useState } from 'react';
import './ReasonsLove.css';

const reasons = [
  { emoji: '😊', text: 'Your beautiful smile', detail: 'It lights up my entire world every single time.' },
  { emoji: '💕', text: 'Your caring nature', detail: 'The way you care about everything and everyone is so beautiful.' },
  { emoji: '🌟', text: 'The happiness you bring', detail: 'You make every moment brighter just by being there.' },
  { emoji: '💬', text: 'Every little conversation', detail: 'Even the simplest talks with you become my favorite memories.' },
  { emoji: '✨', text: 'The way you make ordinary moments special', detail: 'With you, even silence feels meaningful and complete.' },
];

const ReasonsLove = () => {
  const sectionRef = useRef(null);
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFlip = (i) => {
    setFlipped(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <section className="reasons-love" ref={sectionRef}>
      <div className="section-divider">
        <span className="divider-heart">💝</span>
      </div>

      <h2 className="section-title serif-font">
        Reasons Why I Love You <span className="title-emoji">💖</span>
      </h2>

      <p className="reasons-subtitle">Tap on each heart to reveal a secret ❤️</p>

      <div className="reasons-grid">
        {reasons.map((r, i) => (
          <div
            key={i}
            className={`reason-card ${flipped[i] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(i)}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="card-heart-bg">❤</div>
                <span className="card-emoji">{r.emoji}</span>
                <p className="card-text">{r.text}</p>
              </div>
              <div className="card-back">
                <span className="card-back-emoji">{r.emoji}</span>
                <p className="card-back-text serif-font">{r.detail}</p>
                <div className="card-back-hearts">❤ ❤ ❤</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsLove;
