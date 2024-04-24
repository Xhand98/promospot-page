import React, { useState } from 'react';
import './ToggleButton.css';
import Chatbot from './Chatbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className='button'>
    <div className="toggle-container">
      <button className={`toggle-button ${isToggled ? 'active' : ''}`} onClick={toggleHandler}>
        {isToggled ? 'No' : 'Si'}
      </button>
      {isToggled && <div className='chatbotcontainer'><Chatbot /></div>}
    </div>
    <FontAwesomeIcon icon={ faBars } />
    </div>
  );
};

export default ToggleButton;
