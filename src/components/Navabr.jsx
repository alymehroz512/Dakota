import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/navbar/logo.svg";
// Social icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// Toggler icons (burger & close)
import { HiMenuAlt3, HiX } from "react-icons/hi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  // Sync toggler icon with Bootstrap collapse events
  useEffect(() => {
    const el = document.getElementById("fpNavbar");
    if (!el) return;
    setIsOpen(el.classList.contains("show"));
    const onShow = () => setIsOpen(true);
    const onHide = () => setIsOpen(false);
    el.addEventListener("show.bs.collapse", onShow);
    el.addEventListener("hide.bs.collapse", onHide);
    return () => {
      el.removeEventListener("show.bs.collapse", onShow);
      el.removeEventListener("hide.bs.collapse", onHide);
    };
  }, []);
  // Set active from hash + keep in sync on back/forward
  useEffect(() => {
    const applyFromHash = () => {
      const h = (window.location.hash || "#home").slice(1) || "home";
      setActive(h);
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);
  const handleNavClick = (key) => setActive(key);
  return (
    <nav className="navbar navbar-expand-lg navbar-light fp-navbar">
      <div className="container-fluid d-flex align-items-center position-relative">
        {/* Left: Logo */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#home"
          onClick={() => handleNavClick("home")}
        >
          <img src={logo} alt="Logo" className="fp-logo" />
        </a>
        {/* Right: Custom Toggler (mobile) */}
        <button
          className="navbar-toggler fp-toggler ms-auto order-2 order-lg-3 mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#fpNavbar"
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
        {/* Center: Nav links */}
        <div
          className="collapse navbar-collapse justify-content-center order-3 order-lg-2 fp-collapse-panel"
          id="fpNavbar"
        >
          <ul key={active} className="navbar-nav fp-nav animate mx-auto gap-4 text-center">
            <li className="nav-item fw-bold">
              <a
                className={`nav-link ${active === "home" ? "active" : ""}`}
                href="#home"
                aria-current={active === "home" ? "page" : undefined}
                onClick={() => handleNavClick("home")}
                data-bs-toggle="collapse" data-bs-target="#fpNavbar"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "about" ? "active" : ""}`}
                href="#about"
                aria-current={active === "about" ? "page" : undefined}
                onClick={() => handleNavClick("about")}
                data-bs-toggle="collapse" data-bs-target="#fpNavbar"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "services" ? "active" : ""}`}
                href="#services"
                aria-current={active === "services" ? "page" : undefined}
                onClick={() => handleNavClick("services")}
                data-bs-toggle="collapse" data-bs-target="#fpNavbar"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "contact" ? "active" : ""}`}
                href="#contact"
                aria-current={active === "contact" ? "page" : undefined}
                onClick={() => handleNavClick("contact")}
                data-bs-toggle="collapse" data-bs-target="#fpNavbar"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Right: Social icons (desktop) */}
        <div className="fp-social d-none d-lg-flex align-items-center ms-auto order-4">
          <a className="fp-social-btn" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={18} />
          </a>
          <a className="fp-social-btn" href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={18} />
          </a>
          <a className="fp-social-btn" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} />
          </a>
          <a className="fp-social-btn" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}