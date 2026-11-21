import React, { useEffect, useRef } from 'react';
import './LoveLetter.css';

const LoveLetter = () => {
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
    <section className="love-letter" ref={sectionRef}>
      <div className="section-divider">
        <span className="divider-heart">💌</span>
      </div>

      <h2 className="section-title serif-font">
        A Letter From My Heart <span className="title-emoji">💌</span>
      </h2>

      <div className="letter-container">
        <div className="letter-seal">❤</div>
        <div className="letter-paper">
          <div className="letter-decoration top-left">❦</div>
          <div className="letter-decoration top-right">❦</div>

          <p className="letter-greeting script-font">Dear SAMRA,</p>

          <p className="letter-body">
            You are not just a person in my life; you are someone who makes my ordinary days feel special. Your smile brings happiness, your presence gives me peace, and every conversation with you becomes a beautiful memory.
          </p>

          <p className="letter-body">
            I may not always have the perfect words to express my feelings, but one thing is certain: you are truly special to me.
          </p>

          <p className="letter-closing">
            Thank you for being you. <span className="heart-glow">❤️</span>
          </p>

          <div className="letter-decoration bottom-left">❦</div>
          <div className="letter-decoration bottom-right">❦</div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
