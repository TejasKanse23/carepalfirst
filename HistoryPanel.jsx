// src/components/HistoryPanel.jsx

import React from 'react';

const HistoryPanel = ({ history, showHistory, toggleHistory, clearHistory, formatTime }) => {
  return (
    showHistory && (
      <div id="historyPanel" className="show">
        <div className="history-header">
          <h4 className="fw-bold mb-0">History</h4>
          <span className="close-btn" onClick={toggleHistory}>&times;</span>
        </div>
        <div id="historyList">
          {history.length ? history.map((entry, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div>
                <strong>{entry.page}</strong><br />
                <span className="history-time">{formatTime(entry.timestamp)}</span>
              </div>
            </div>
          )) : <p className="text-muted">No history found</p>}
        </div>
        <button className="btn btn-danger mt-3" onClick={clearHistory}>Clear History</button>
      </div>
    )
  );
};

export default HistoryPanel;