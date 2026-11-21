import React from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 10 + Math.random() * 15,
    size: 10 + Math.random() * 20,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <div className="floating-hearts">
      {hearts.map(h => (
        <div
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
