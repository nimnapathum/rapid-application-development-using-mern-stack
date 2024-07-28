// src/Timer.js
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Timer;
