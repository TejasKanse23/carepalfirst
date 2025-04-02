// src/components/ProgressBar.jsx

import React from 'react';

const ProgressBar = ({ progress }) => {
  const validProgress = Math.min(Math.max(progress, 0), 100);
  const progressWidth = `${validProgress}%`;

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: progressWidth }}
        data-progress={validProgress} 
      />
    </div>
  );
};

export default ProgressBar;
