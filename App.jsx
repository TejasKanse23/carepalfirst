// src/App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QECEligibility from './components/QECEligibility.jsx';
import Lenders from './components/Lenders.jsx';
import FibeBill from './components/FibeBill.jsx';
import Invoice from './components/Invoice.jsx';
import Bureau from './components/Bureau.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<QECEligibility />} />
        <Route path="/lenders" element={<Lenders />} />
        <Route path="/fibebill" element={<FibeBill />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/bureau" element={<Bureau />} />
      </Routes>
    </div>
  );
}

export default App;