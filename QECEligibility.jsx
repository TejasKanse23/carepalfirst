// src/components/QECEligibility.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx'; // Ensure .jsx extension
import EligibilityForm from './EligibilityForm.jsx'; // Ensure .jsx extension
import EligibilityContent from './EligibilityContent.jsx'; // Ensure .jsx extension
import HistoryPanel from './HistoryPanel.jsx'; // Ensure .jsx extension

const QECEligibility = () => {
  const [status, setStatus] = useState('upload kyc docs');
  const [sanctionedAmount, setSanctionedAmount] = useState('');
  const [progressValue, setProgressValue] = useState('');
  const [showEligibilityContent, setShowEligibilityContent] = useState(false);
  const [loanStatusText, setLoanStatusText] = useState('GREEN');
  const [loanStatusClass, setLoanStatusClass] = useState('text-success');
  const [statusBoxClass, setStatusBoxClass] = useState('border border-warning rounded p-2 text-center mt-3');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    loadHistory();
    recordPageVisit('QEC Eligibility');
  }, []);

  const handleFormSubmit = (status, sanctionedAmount, progressValue) => {
    if (sanctionedAmount.trim() === '') {
      alert('Please enter a sanctioned amount.');
      return;
    }

    if (progressValue.trim() === '') {
      alert('Please enter a percentage.');
      return;
    }

    const progressInt = parseInt(progressValue, 10);
    if (isNaN(progressInt) || progressInt < 0 || progressInt > 100) {
      alert('Please enter a valid percentage between 0 and 100.');
      return;
    }

    setStatus(status);
    setSanctionedAmount(sanctionedAmount);
    setProgressValue(progressInt);
    setShowEligibilityContent(true);

    if (status === 'upload kyc docs' || status === 'NACH Pending' || status.includes('Rejected') || status === 'disbursed') {
      setStatusBoxClass('border border-warning rounded p-2 text-center mt-3');
      setLoanStatusText('GREEN');
      setLoanStatusClass('text-success');
    } else if (status === 'upload Bank Statement') {
      setStatusBoxClass('border border-warning rounded p-2 text-center mt-3');
      setLoanStatusText('AMBER');
      setLoanStatusClass('text-warning');
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const loadHistory = () => {
    const storedHistory = JSON.parse(localStorage.getItem('pageHistory')) || [];
    setHistory(storedHistory);
  };

  const recordPageVisit = (pageName) => {
    const timestamp = new Date().toLocaleString();
    const newHistory = [{ page: pageName, timestamp }, ...history];
    localStorage.setItem('pageHistory', JSON.stringify(newHistory));
    setHistory(newHistory);
  };

  const clearHistory = () => {
    localStorage.removeItem('pageHistory');
    setHistory([]);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="bg-light">
      <Navbar />
      <div className="container mt-5">
        {showEligibilityContent ? (
          <EligibilityContent
            status={status}
            sanctionedAmount={sanctionedAmount}
            progressValue={progressValue}
            loanStatusText={loanStatusText}
            loanStatusClass={loanStatusClass}
            statusBoxClass={statusBoxClass}
            toggleHistory={toggleHistory}
          />
        ) : (
          <EligibilityForm onFormSubmit={handleFormSubmit} />
        )}
        <HistoryPanel
          history={history}
          showHistory={showHistory}
          toggleHistory={toggleHistory}
          clearHistory={clearHistory}
          formatTime={formatTime}
        />
      </div>
    </div>
  );
};

export default QECEligibility;