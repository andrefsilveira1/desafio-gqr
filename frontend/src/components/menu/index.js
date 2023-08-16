import React from 'react';
import logo from "./logo.png"

export default function Menu() {
  return (
    <nav className="mb-5 navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top" style={{ height: '80px' }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img alt="This is the geowellex shape" src={logo}/>
        </a>
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
              <a className="nav-link" href="#section1">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section2">
                Cadastrar dados
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
