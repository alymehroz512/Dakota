import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/navbar/logo.svg";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavClick = (key) => {
    setActive(key);
    setIsOpen(false); // Close menu on link click (mobile)
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fp-navbar">
      <div className="container-fluid d-flex align-items-center position-relative">
        {/* Left: Logo */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={() => handleNavClick("home")}
        >
          <img src={logo} alt="Logo" className="fp-logo" />
        </Link>
        {/* Right: Custom Toggler (mobile) */}
        <button
          className="navbar-toggler fp-toggler ms-auto order-2 order-lg-2 mt-3"
          type="button"
          onClick={toggleMenu}
          aria-controls="fpNavbar"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? (
            <HiX className="fp-icon" aria-hidden="true" />
          ) : (
            <HiMenuAlt3 className="fp-icon" aria-hidden="true" />
          )}
        </button>
        {/* Right: Nav links */}
        <div
          className={`collapse navbar-collapse ms-auto order-3 order-lg-1 fp-collapse-panel ${isOpen ? "show" : ""}`}
          id="fpNavbar"
        >
          <ul className="navbar-nav fp-nav ms-auto gap-4 text-center">
            <li className="nav-item fw-bold">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
                aria-current={active === "home" ? "page" : undefined}
                onClick={() => handleNavClick("home")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
                aria-current={active === "about" ? "page" : undefined}
                onClick={() => handleNavClick("about")}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/services"
                aria-current={active === "services" ? "page" : undefined}
                onClick={() => handleNavClick("services")}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/contact"
                aria-current={active === "contact" ? "page" : undefined}
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}