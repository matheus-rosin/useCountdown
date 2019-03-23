import { useState, useEffect, useRef } from 'react';

export default function useCountdown(seconds, startRunning = true) {
  if (!Number.isSafeInteger(seconds)) throw Error('Value provided isn\'t valid.');
  
  let secs = Math.abs(seconds);
  const [secondsLeft, setSecondsLeft] = useState(secs);
  const [running, setRunning] = useState(!!startRunning);
  const countdown = useRef();
  const cleaner = useRef();

  useEffect(() => {
    if (!!startRunning) startCountdown();
    return stopCountdown;
  }, []);

  function tick() {
    setSecondsLeft((prevTime) => prevTime - 1);
  }

  function resumeCountdown() {
    setRunning(true);
    countdown.current = setInterval(tick, 1000);
    cleaner.current = setTimeout(stopCountdown, secondsLeft * 1000);
  }
  
  function startCountdown() {
    setSecondsLeft(secs);
    setRunning(true);
    countdown.current = setInterval(tick, 1000);
    cleaner.current = setTimeout(stopCountdown, secs * 1000);
  }

  function stopCountdown() {
    setRunning(false);
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
    running,
    startCountdown,
    stopCountdown,
    resumeCountdown,
    restartCountdown,
  };
}
