import React, { useState } from 'react';
import './ToggleButton.css';
import Chatbot from './Chatbot'; // Assuming Chatbot component is in the same directory

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="toggle-container">
      <button className={`toggle-button ${isToggled ? 'active' : ''}`} onClick={toggleHandler}>
        {isToggled ? 'Close Chatbot' : 'Open Chatbot'}
      </button>
      {isToggled && <Chatbot />}
    </div>
  );
};

export default ToggleButton;
