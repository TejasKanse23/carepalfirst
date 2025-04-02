// src/components/EligibilityResult.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const EligibilityResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const status = queryParams.get('status');
  const amount = queryParams.get('amount');
  const progress = queryParams.get('progress');

  return (
    <div className="container mt-5">
      <h2>Eligibility Result</h2>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Sanctioned Amount:</strong> ₹{amount}</p>
      <p><strong>Progress:</strong> {progress}%</p>
    </div>
  );
};

export default EligibilityResult;
