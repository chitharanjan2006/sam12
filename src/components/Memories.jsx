import React, { useEffect, useRef, useState } from 'react';
import './Memories.css';

const loveQuotes = [
  { emoji: '🌹', title: 'First Moment', text: 'The moment I saw you, my heart knew you were the one.', color: '#ff1493' },
  { emoji: '💫', title: 'Your Smile', text: 'Your smile is my favorite sight in this entire universe.', color: '#ff69b4' },
  { emoji: '🦋', title: 'Butterflies', text: 'Even now, you give me butterflies every single time.', color: '#da70d6' },
  { emoji: '🌙', title: 'Late Night Talks', text: 'Our late night conversations are my most precious treasure.', color: '#ba55d3' },
  { emoji: '💖', title: 'My Safe Place', text: 'You are my home, my comfort, my everything.', color: '#ff1493' },
  { emoji: '✨', title: 'Forever & Always', text: 'I choose you today, tomorrow, and every day after.', color: '#ff69b4' },
];

const sparkles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${2 + Math.random() * 3}s`,
  size: `${3 + Math.random() * 5}px`,
}));

const Memories = () => {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="memories" ref={sectionRef}>
      {/* Sparkle background */}
      <div className="sparkle-field">
        {sparkles.map(s => (
          <div
            key={s.id}
            className="sparkle"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
              animationDuration: s.duration,
              width: s.size,
              height: s.size,
            }}
          />
        ))}
      </div>

      <div className="section-divider">
        <span className="divider-heart">💕</span>
      </div>

      <h2 className="section-title serif-font">
        Love Notes For You <span className="title-emoji">💌</span>
      </h2>

      <p className="memories-subtitle">Every word is a heartbeat meant only for you 💗</p>

      {/* Animated love timeline */}
      <div className="love-timeline">
        <div className="timeline-line" />
        {loveQuotes.map((q, i) => (
          <div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} ${activeCard === i ? 'active' : ''}`}
            style={{ animationDelay: `${i * 0.2}s` }}
            onMouseEnter={() => setActiveCard(i)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="timeline-dot" style={{ background: q.color, boxShadow: `0 0 20px ${q.color}80` }}>
              <span className="dot-emoji">{q.emoji}</span>
            </div>
            <div className="timeline-card">
              <div className="card-glow" style={{ background: `radial-gradient(circle, ${q.color}20 0%, transparent 70%)` }} />
              <h3 className="timeline-card-title">{q.title}</h3>
              <p className="timeline-card-text serif-font">{q.text}</p>
              <div className="card-sparkle-row">
                <span>✦</span><span>✦</span><span>✦</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating love counter */}
      <div className="love-infinity">
        <div className="infinity-ring" />
        <div className="infinity-content">
          <span className="infinity-symbol">∞</span>
          <p className="infinity-text">My love for you has no end</p>
        </div>
      </div>

      {/* Beating heart row */}
      <div className="heart-pulse-row">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="pulse-heart" style={{ animationDelay: `${i * 0.3}s` }}>
            ❤️
          </span>
        ))}
      </div>
    </section>
  );
};

export default Memories;
