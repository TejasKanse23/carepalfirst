// src/components/EligibilityContent.jsx

import React from 'react';
import fibeLogo from '../assets/fibe.png';
import ProgressBar from './ProgressBar.jsx';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const EligibilityContent = ({ status, sanctionedAmount, progressValue, loanStatusText, loanStatusClass, statusBoxClass }) => {
  const navigate = useNavigate();

  const handleResendSMS = () => {
    console.log('Resending SMS...');
    navigate('/sms-resent'); // Example navigation
  };

  const handleViewHistory = () => {
    navigate('/loan-history'); // Navigate to history page
  };

  return (
    <div id="eligibilityContent">
      <div className="eligibility-box d-flex align-items-center jussstify-content-center p-3 rounded shadow-sm bg-white">
        <div className="profile-icon d-flex justify-content-center align-items-center fw-bold">ML</div>
        <div className="ms-3 text-center">
          <Link to="/loan-details" className="loan-id text-primary fw-bold text-decoration-none">
            CPC-12wqQ
          </Link>
          <p className="loan-details text-muted mb-0">Apollo Hospital, Chennai</p>
        </div>
        <div className="ms-auto text-muted fw-semibold">5-Aug-2024</div>
      </div>
      <ProgressBar progress={progressValue} />
      <h3 className="text-center mt-3">The customer has a <span id="loanType">0%</span> loan offer</h3>
      <div className="text-center mt-4">
        <img src={fibeLogo} alt="Fibe Logo" className="img-fluid" style={{ maxWidth: '120px' }} />
        <h2 id="loanStatus" className={loanStatusClass}>{loanStatusText}</h2>
        <p className="fw-bold">Sanctioned Amount</p>
        <h1 id="sanctionedAmountDisplay" className="fw-bold">{sanctionedAmount ? `₹${sanctionedAmount}` : ''}</h1>
        <p className="text-muted">Please ask the borrower to check their SMS</p>
      </div>
      <div id="statusBox" className={statusBoxClass}>
        <span className="fw-bold">Current Status</span>
        <span className="divider">|</span>
        <Link to="/loan-status" id="statusLink" className="text-decoration-none">
          {status}
        </Link>
        <span className="loader"></span>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handleResendSMS}>
          Resend SMS Link
        </button>
        <div className="text-center mt-3">
          <button className="btn btn-secondary" onClick={handleViewHistory}>
            View History
          </button>
        </div>
      </div>
    </div>
  );
};

export default EligibilityContent;