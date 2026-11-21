import React, { useState, useEffect } from 'react';
import { song } from '../music';
import './MusicToggle.css';

const MusicToggle = () => {
  const [playing, setPlaying] = useState(!song.paused);

  useEffect(() => {
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    song.addEventListener('play', onPlay);
    song.addEventListener('pause', onPause);
    setPlaying(!song.paused);
    return () => {
      song.removeEventListener('play', onPlay);
      song.removeEventListener('pause', onPause);
    };
  }, []);

  const toggleMusic = () => {
    if (song.paused) song.play().catch(() => {});
    else song.pause();
  };

  return (
    <button
      className={`music-toggle ${playing ? 'playing' : ''}`}
      onClick={toggleMusic}
      title={playing ? 'Pause Music' : 'Play Music'}
    >
      <span className="music-icon">{playing ? '♫' : '♪'}</span>
      <span className="music-label">{playing ? 'Music On' : 'Music Off'}</span>
      {playing && (
        <div className="music-bars">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      )}
    </button>
  );
};

export default MusicToggle;
