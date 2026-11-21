import React, { useEffect, useState } from 'react';
import './BackgroundSlideshow.css';

const base = import.meta.env.BASE_URL;
const IMAGES = [1, 2, 3, 4, 5, 6, 7].map((n) => `${base}bg/${n}.jpg`);

const BackgroundSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-slideshow" aria-hidden="true">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className={`bg-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="bg-slideshow-overlay" />
    </div>
  );
};

export default BackgroundSlideshow;
