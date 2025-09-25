import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css";

// NOTE: update the filename if your logo is named differently.
// Example valid paths:
//   ../assets/navbar/logo.png
//   ../assets/navbar/brand.svg
import Logo from "../assets/navbar/logo.svg";

export default function Footer() {
  return (
    <footer className="bp-footer p-5" role="contentinfo" aria-label="Site footer">
      <div className="container-fluid bp-footer__container">
        {/* Left: Logo + Blurb */}
        <div className="bp-footer__left">
          <div className="bp-footer__brand">
            <img
              src={Logo}
              alt="BrightPoint Wellness"
              className="bp-footer__logo"
              loading="lazy"
              decoding="async"
            />
          </div>

          <p className="bp-footer__desc">
            Welcome to BrightPoint Wellness, your trusted destination for
            professional mental health counseling services. Our team of
            experienced counselors is committed to giving you the help and
            direction you need to deal with life’s difficulties.
          </p>
        </div>

        {/* Right: Quick Access */}
        <nav className="bp-footer__right align-items-end" aria-label="Quick access">
          <h4 className="bp-footer__heading mt-2">Quick Access</h4>
          <ul className="bp-footer__links">
            <li><Link to="/" className="bp-footer__link">Home</Link></li>
            <li><Link to="/about" className="bp-footer__link">About</Link></li>
            <li><Link to="/services" className="bp-footer__link">Services</Link></li>
            <li><Link to="/contact" className="bp-footer__link">Contact</Link></li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="bp-footer__bottom">
        <div className="bp-footer__divider mb-5" />
        <div className="bp-footer__bottomContent">
          {/* Left side - Copy */}
          <p className="bp-footer__copy">
            © 2023 Copyright BrightPoint. All Rights Reserved – Developed by HMS USA Inc.
          </p>

          {/* Right side - Social Icons */}
          <div className="bp-footer__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
