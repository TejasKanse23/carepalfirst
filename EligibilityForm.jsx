// src/components/EligibilityForm.js

import React, { useState } from 'react';

const EligibilityForm = ({ onFormSubmit }) => {
  const [status, setStatus] = useState('upload kyc docs');
  const [sanctionedAmount, setSanctionedAmount] = useState('');
  const [progressValue, setProgressValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(status, sanctionedAmount, progressValue);
  };

  return (
    <div id="eligibilityForm">
      <h2 className="text-center">Quick Eligibility Check</h2>
      <div className="mb-3">
        <label htmlFor="status" className="form-label">Loan Status</label>
        <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="upload kyc docs">Upload KYC Docs</option>
          <option value="NACH Pending">NACH Pending</option>
          <option value="Rejected">Rejected</option>
          <option value="Rejected2">Rejected2</option>
          <option value="disbursed">Disbursed</option>
          <option value="upload Bank Statement">Upload Bank Statement</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="sanctionedAmount" className="form-label">Sanctioned Amount</label>
        <input type="number" id="sanctionedAmount" className="form-control" value={sanctionedAmount} onChange={(e) => setSanctionedAmount(e.target.value)} />
      </div>
      <label htmlFor="progressInput">Enter Progress (%):</label>
      <input type="number" id="progressInput" className="form-control" value={progressValue} onChange={(e) => setProgressValue(e.target.value)} required /><br />
      <button className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EligibilityForm;