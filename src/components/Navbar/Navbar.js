import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light p-0"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Greenbord Logo" height="80" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-fill w-100 mr-auto">
              <li class="nav-item active">
                <NavLink to="/" className="nav-link" activeClassName="selected">
                  HOME <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link"
                  href="https://google.com"
                  target="_blank"
                >
                  FOR INSTITUTE
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link"
                  href="https://youtube.com"
                  target="_blank"
                >
                  FOR TEACHERS
                </a>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/about-us"
                  className="nav-link"
                  activeClassName="selected"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/career"
                  className="nav-link"
                  activeClassName="selected"
                >
                  CAREER
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
