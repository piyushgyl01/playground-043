import React from "react";
import { Link } from "react-router-dom";
import { FaPenSquare, FaUserCircle, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success fs-2" to="/">
          Blogify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/editor">
                <FaPenSquare className="me-1" /> New Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to="/settings"
              >
                <FaCog className="me-1" /> Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to="/profile/username"
              >
                <FaUserCircle className="me-1" /> username
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-secondary btn-sm ms-2">
                Logout
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
