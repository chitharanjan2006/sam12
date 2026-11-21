import React, { useState, useEffect, useRef } from 'react';
import WelcomePage from './components/WelcomePage';
import ParticleBackground from './components/ParticleBackground';
import LoveLetter from './components/LoveLetter';
import ReasonsLove from './components/ReasonsLove';
import Memories from './components/Memories';
import Surprise from './components/Surprise';
import FinalSection from './components/FinalSection';
import MusicToggle from './components/MusicToggle';
import FloatingHearts from './components/FloatingHearts';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import './App.css';

function App() {
  const [entered, setEntered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const mainRef = useRef(null);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => {
      setShowContent(true);
    }, 800);
  };

  useEffect(() => {
    if (showContent && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showContent]);

  return (
    <div className="app">
      <BackgroundSlideshow />
      <ParticleBackground />
      <FloatingHearts />

      {!entered && <WelcomePage onEnter={handleEnter} />}

      <div className={`main-content ${entered ? 'entering' : ''} ${showContent ? 'visible' : ''}`} ref={mainRef}>
        {showContent && (
          <>
            <MusicToggle />
            <LoveLetter />
            <ReasonsLove />
            <Memories />
            <Surprise />
            <FinalSection />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
