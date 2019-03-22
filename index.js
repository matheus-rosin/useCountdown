import { useState, useEffect, useRef } from 'react';

export default function useCountdown(seconds) {
  if (!Number.isSafeInteger(seconds)) throw Error('Value provided isn\'t valid.');
  
  let secs = Math.abs(seconds);
  const [secondsLeft, setSecondsLeft] = useState(secs);
  const countdown = useRef();
  const cleaner = useRef();

  useEffect(() => {
    startCountdown();
    return stopCountdown;
  }, []);

  function tick() {
    setSecondsLeft((prevTime) => prevTime - 1);
  }

  function resumeCountdown() {
    countdown.current = setInterval(tick, 1000);
    cleaner.current = setTimeout(stopCountdown, secondsLeft * 1000);
  }
  
  function startCountdown() {
    setSecondsLeft(secs);
    resumeCountdown();
  }

  function stopCountdown() {
    clearInterval(countdown.current);
    clearTimeout(cleaner.current);
  }

  function restartCountdown() {
    stopCountdown();
    startCountdown();
  }

  let formatted = [
    Math.floor(secondsLeft / 3600),
    Math.floor(secondsLeft / 60 % 60),
    secondsLeft % 60,
  ].map((v) => String(v).padStart(2, '0'));

  return {
    countdown: formatted,
    secondsLeft,
    startCountdown,
    stopCountdown,
    resumeCountdown,
    restartCountdown,
  };
}
