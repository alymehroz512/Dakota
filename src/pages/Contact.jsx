// Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { FiSend, FiUser, FiMail, FiTag, FiMessageSquare, FiCalendar, FiHelpCircle, FiPhone, FiMapPin } from "react-icons/fi";
import ContactHeroImage from "../assets/home/Doctor.gif";
import FormImage from "../assets/home/Form.gif";
import "../styles/Contact.css";

function Contact() {
  // Refs for hero section
  const heroTextRef = useRef(null);
  const heroImgWrapRef = useRef(null);
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  // Sync image column height with text content (lg+ only)
  useEffect(() => {
    const syncHeights = () => {
      if (heroTextRef.current && heroImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        heroImgWrapRef.current.style.minHeight = isLgUp
          ? `${heroTextRef.current.offsetHeight}px`
          : "unset";
      }
    };
    const ro = new ResizeObserver(syncHeights);
    if (heroTextRef.current) ro.observe(heroTextRef.current);
    syncHeights();
    window.addEventListener("resize", syncHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section
        className="contact-hero-section px-lg-5 px-sm-0"
        aria-labelledby="contact-hero-title"
        itemScope
        itemType="https://schema.org/ContactPoint"
      >
        <meta itemProp="name" content="Dakota Contact" />
        <div className="container-fluid mt-3 mb-5">
          <div className="row contact-hero-row mt-5 mb-5 align-items-center g-1 px-3 px-lg-4">
            <article
              ref={heroTextRef}
              className="col-12 col-lg-6 contact-hero-copy my-3 order-2 order-lg-1 text-start"
              itemProp="description"
            >
              <header>
                <h1 id="contact-hero-title" className="contact-hero-heading mb-3">
                  Get in Touch with <span className="contact-highlight-words">Dakota Psychiatrists</span>
                </h1>
              </header>
              <p className="contact-hero-taglines mb-4">
                Reach out for online psychiatric consultations, therapy sessions, or general inquiries. Our team is here to support your mental health journey.
              </p>
              <ul className="contact-benefits mb-4">
                <li>Confidential and secure communications.</li>
                <li>Quick response times.</li>
                <li>Easy scheduling for virtual appointments.</li>
                <li>Support for insurance and payment queries.</li>
              </ul>
              <div className="contact-cta-wrap">
                <a
                  href="#form"
                  className="btn contact-cta-btn btn-sm text-uppercase"
                  aria-label="Schedule an online appointment"
                >
                  <span>Schedule Now</span>
                  <FiCalendar className="contact-cta-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
            <figure
              ref={heroImgWrapRef}
              className="col-12 col-lg-6 contact-hero-visual m-0 position-relative order-1 order-lg-2"
              itemProp="image"
            >
              <img
                src={ContactHeroImage}
                alt="Contact Dakota for online psychiatric support"
                className="contact-image"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>
      <hr className="mx-auto custom-hr" />
      {/* Contact Info Section */}
      <section
        className="contact-info-section mt-5 mb-5 px-lg-5 px-sm-0"
        aria-labelledby="contact-info-title"
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <h2 id="contact-info-title" className="contact-info-heading text-center mb-5">
              Our Contact Details
            </h2>
          </div>
          <div className="row contact-info-grid justify-content-center">
            <div className="col-12 col-md-4 text-center mb-4">
              <FiPhone className="contact-info-icon" />
              <p className="contact-info-text">+1-800-555-1234</p>
            </div>
            <div className="col-12 col-md-4 text-center mb-4">
              <FiMail className="contact-info-icon" />
              <p className="contact-info-text">support@dakota.com</p>
            </div>
            <div className="col-12 col-md-4 text-center mb-4">
              <FiMapPin className="contact-info-icon" />
              <p className="contact-info-text">Virtual Services Nationwide</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-auto custom-hr" />
      {/* Form Section */}
      <section
        id="form"
        className="contact-form-section mt-5 mb-5 px-lg-5 px-sm-0"
        aria-labelledby="form-title"
      >
        <div className="container-fluid mb-5">
          <div className="row contact-form-row g-1 px-3 px-lg-4">
            <figure className="col-12 col-lg-6 contact-form-visual m-0 order-1">
              <img
                src={FormImage}
                alt="Inquiry form for Dakota services"
                className="contact-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="col-12 col-lg-6 contact-form-col order-2">
              <h2 className="contact-form-heading mb-4" id="form-title">Send Your Inquiry</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label">
                    <FiUser className="form-icon" aria-hidden="true" />
                    Your Name <span className="text-danger">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    <FiMail className="form-icon" aria-hidden="true" />
                    Your Email <span className="text-danger">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="subject" className="form-label">
                    <FiTag className="form-icon" aria-hidden="true" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message" className="form-label">
                    <FiMessageSquare className="form-icon" aria-hidden="true" />
                    Your Message <span className="text-danger">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control contact-textarea"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <div className="contact-cta-wrap">
                  <button
                    type="submit"
                    className="btn contact-cta-btn text-uppercase btn-sm"
                    aria-label="Submit inquiry"
                  >
                    <span>Submit</span>
                    <FiSend className="contact-cta-icon" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;