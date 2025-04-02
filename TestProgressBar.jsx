// src/components/TestProgressBar.jsx

import React from 'react';
import './../index.css';

const TestProgressBar = () => {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: '75%' }}
      >
        75% Completed
      </div>
    </div>
  );
};

export default TestProgressBar;