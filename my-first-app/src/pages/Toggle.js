// src/Toggle.js
import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Toggle;
