// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-final.png';
import QECEligibility  from './QECEligibility';
import Lenders from './Lenders';
import FibeBill from './FibeBill';
import Invoice from './Invoice';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="40" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">
                Quick Eligibility Check
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/lenders">
                Lenders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/fibebill">
                Fibe Bill Upload
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/invoice">
                Invoice
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/bureau">
                Bureau Report
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;