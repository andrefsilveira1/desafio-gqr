import React from 'react';
import logo from "./logo.png";
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="mb-5 navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top" style={{ height: '80px' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img alt="This is the geowellex shape" src={logo}/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registrar">
                Cadastrar dados
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
