// Single shared audio element so the song can be started from the
// welcome-page click (browsers only allow audio after a user gesture).
export const SONG_URL = `${import.meta.env.BASE_URL}music/magaleee.mp3`;

export const song = new Audio(SONG_URL);
song.loop = true;
song.preload = 'auto';
song.volume = 0.8;

export const startSong = () => song.play().catch(() => {});
