import React, { Fragment } from "react";
import { Link } from "react-router-dom";

let Nav = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* ✅ Brand */}
          <Link to="/" className="navbar-brand fw-bold text-white">
            Grandios
          </Link>

          {/* ✅ Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link to="/Homepage" className="nav-link text-white">
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Menu" className="nav-link text-white">
                  MENU
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/MyCart" className="nav-link text-white">
                  CART
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Contact" className="nav-link text-white">
                  CONTACT / HELP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
