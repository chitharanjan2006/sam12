import React, { useEffect, useRef } from 'react';
import './Surprise.css';

const Surprise = () => {
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
    <section className="surprise" ref={sectionRef}>
      <div className="section-divider">
        <span className="divider-heart">🎁</span>
      </div>

      <h2 className="section-title serif-font">
        A Special Surprise <span className="title-emoji">🎁</span>
      </h2>

      <div className="surprise-container">
        <p className="surprise-text">
          I have something special for you...
        </p>
      </div>
    </section>
  );
};

export default Surprise;
