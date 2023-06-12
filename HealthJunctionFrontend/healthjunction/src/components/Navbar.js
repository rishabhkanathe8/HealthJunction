import React from "react";
import "../cssfile/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="background-images"></div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-box">
                  <Link className="nav-link active" aria-current="page" to="/">
                    HOME
                  </Link>
                </div>
              </li>
            </ul>
            <h1 className="navbar-heading">Health Junction</h1>
            <div className="navbar-nav ml-auto">
              <div className="nav-box">
              <Link className="nav-link active" aria-current="page" to="/login">
                  LOGIN
                </Link>
              </div>
              <div className="nav-box">
              <Link className="nav-link active" aria-current="page" to="/signup">
                  SIGNUP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
