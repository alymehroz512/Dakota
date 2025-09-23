import React, { useEffect, useRef, useState } from "react";
import { FiPlay, FiPlus, FiMinus, FiSend, FiUser, FiMail, FiTag, FiMessageSquare, FiCalendar, FiBookOpen, FiHelpCircle } from "react-icons/fi";
import HeroSectionImage from "../assets/home/Doctor.gif";
import ServicesImage from "../assets/home/Services.gif";
import EmphasizeHealthyLiving from "../assets/home/Emphasizehealthyliving.svg";
import IndividualizedCare from "../assets/home/individualized-care.svg";
import LifestyleMedicine from "../assets/home/Lifestylemedicine.svg";
import PreventiveMedicine from "../assets/home/Preventivemedicine.svg";
import ContactImage from "../assets/home/Contact.gif";
import FormImage from "../assets/home/Form.gif";
import "../styles/Home.css";

function Home() {
  // Refs for hero section
  const heroTextRef = useRef(null);
  const heroImgWrapRef = useRef(null);
  // Refs for services section
  const servicesTextRef = useRef(null);
  const servicesImgWrapRef = useRef(null);
  // Refs for contact section
  const contactTextRef = useRef(null);
  const contactImgWrapRef = useRef(null);

  // State for accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // Sync image column height with text content for hero, services, and contact (lg+ only)
  useEffect(() => {
    const syncHeights = () => {
      // Hero section
      if (heroTextRef.current && heroImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        heroImgWrapRef.current.style.minHeight = isLgUp
          ? `${heroTextRef.current.offsetHeight}px`
          : "unset";
      }
      // Services section
      if (servicesTextRef.current && servicesImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        servicesImgWrapRef.current.style.minHeight = isLgUp
          ? `${servicesTextRef.current.offsetHeight}px`
          : "unset";
      }
      // Contact section
      if (contactTextRef.current && contactImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        contactImgWrapRef.current.style.minHeight = isLgUp
          ? `${contactTextRef.current.offsetHeight}px`
          : "unset";
      }
    };
    const ro = new ResizeObserver(syncHeights);
    if (heroTextRef.current) ro.observe(heroTextRef.current);
    if (servicesTextRef.current) ro.observe(servicesTextRef.current);
    if (contactTextRef.current) ro.observe(contactTextRef.current);
    syncHeights();
    window.addEventListener("resize", syncHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, []);

  // Services data
  const Services = [
    { id: "healthy", name: "Healthy Living", icon: EmphasizeHealthyLiving },
    { id: "care", name: "Individualized Care", icon: IndividualizedCare },
    { id: "lifestyle", name: "Lifestyle Medicine", icon: LifestyleMedicine },
    { id: "preventive", name: "Preventive Medicine", icon: PreventiveMedicine },
  ];

  // FAQ data
  const FAQs = [
    {
      question: "How Do I Know If I Should Go To Counseling?",
      answer:
        "Counseling can be beneficial for individuals facing various challenges, such as stress, anxiety, depression, relationship issues, trauma, or personal growth. If you're experiencing difficulties or seeking support, counseling provides a safe, confidential space to explore your thoughts and emotions.",
    },
    {
      question: "Is Counseling Confidential?",
      answer:
        "Yes, client confidentiality is a top priority at BrightPoint Wellness. We adhere to strict ethical and legal guidelines to ensure your information remains private and secure.",
    },
    {
      question: "How Much Does Counseling Cost?",
      answer:
        "Our therapy fees vary based on the type of service and counselor chosen. We strive to keep our services accessible and affordable. Please contact our office for detailed pricing information.",
    },
    {
      question: "How Many Sessions Will I Need?",
      answer:
        "The number of sessions depends on your individual needs and goals. Some benefit from short-term counseling, while others require longer-term support. Your counselor will collaborate with you to determine the best treatment plan.",
    },
    {
      question: "How Long Is a Counseling Session?",
      answer:
        "Most sessions last approximately 50 minutes, though this can vary based on your preferences. During your first session, you and your counselor will discuss goals and create a tailored treatment plan.",
    },
  ];

  // Toggle accordion item
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section px-lg-5 px-sm-0"
        aria-labelledby="hero-title"
        itemScope
        itemType="https://schema.org/MedicalOrganization"
      >
        <meta itemProp="name" content="BrightPoint Counseling" />
        <meta
          itemProp="description"
          content="Professional mental health counseling services. Experienced counselors helping with anxiety, depression, and life challenges."
        />
        <div className="container-fluid">
          <div className="row hero-row align-items-center g-1 px-3 px-lg-4">
            <article
              ref={heroTextRef}
              className="col-12 col-lg-6 hero-copy my-3 order-2 order-lg-1 text-start"
              itemProp="department"
            >
              <header>
                <h1 id="hero-title" className="hero-section-heading mb-3">
                  Professional <span className="high-light-words">Mental Health</span> &{" "}
                  <span className="high-light-words">Counseling</span> Services
                </h1>
              </header>
              <p className="hero-section-taglines mb-4" itemProp="slogan">
                Welcome to BrightPoint Counseling, your trusted destination for professional
                mental health therapy and counseling services. Our team of experienced
                therapists is committed to providing compassionate support for anxiety, depression,
                stress, and life's challenges in a confidential environment.
              </p>
              <div className="cta-wrap">
                <a
                  href="#services"
                  className="btn cta-btn btn-sm text-uppercase"
                  aria-label="Explore mental health counseling services"
                >
                  <span>Explore Therapy Services</span>
                  <FiPlay className="cta-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
            <figure
              ref={heroImgWrapRef}
              className="col-12 col-lg-6 hero-visual m-0 position-relative order-1 order-lg-2"
              itemProp="image"
            >
              <img
                src={HeroSectionImage}
                alt="Therapist providing mental health counseling services at BrightPoint"
                className="doctor-image"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>
      <hr className="mx-auto custom-hr" />
      {/* Services Section */}
      <section
        id="services"
        className="services-section mt-5 mb-5 px-lg-5 px-sm-0"
        aria-labelledby="services-title"
        itemScope
        itemType="https://schema.org/MedicalOrganization"
      >
        <meta itemProp="name" content="BrightPoint Counseling Services" />
        <meta
          itemProp="description"
          content="Compassionate counseling services to support emotional balance and resilience."
        />
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="services-title mt-5">
              Our Key <span className="high-light-words">Therapy Services</span>
            </h2>
          </div>
          <div className="row services-grid tight-gutters justify-content-center mt-5">
            {Services.map((svc) => (
              <div
                key={svc.id}
                className="col-6 col-md-3 d-flex flex-column align-items-center mb-3"
              >
                <div className="service-icon-wrap mb-3" aria-hidden="true">
                  <img
                    src={svc.icon}
                    alt={`${svc.name} therapy service for mental health`}
                    className="service-icon"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="service-name mt-1 mb-0">{svc.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row hero-row align-items-center g-1 px-3 px-lg-4">
            <figure
              ref={servicesImgWrapRef}
              className="col-12 col-lg-6 hero-visual m-0 position-relative order-1"
              itemProp="image"
            >
              <img
                src={ServicesImage}
                alt="Mental health therapy services at BrightPoint for emotional balance"
                className="doctor-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <article
              ref={servicesTextRef}
              className="col-12 col-lg-6 hero-copy my-3 order-2 text-start"
              itemProp="department"
            >
              <header>
                <h1
                  id="services-title"
                  className="hero-section-heading mb-3"
                >
                  Discover Inner Peace with{" "}
                  <span className="high-light-words">
                    Compassionate Mental Health Counseling
                  </span>
                </h1>
              </header>
              <p
                className="hero-section-taglines mb-4"
                itemProp="slogan"
              >
                At BrightPoint Counseling, we offer compassionate mental health therapy to guide you
                toward emotional balance, resilience, and personal growth. Our dedicated therapists support you through anxiety, depression, and life's challenges with personalized counseling care.
              </p>
              <div className="cta-wrap">
                <a
                  href="#services"
                  className="btn cta-btn text-uppercase btn-sm"
                  aria-label="Discover mental health counseling services"
                >
                  <span>Discover Counseling Services</span>
                  <FiBookOpen className="cta-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <hr className="mx-auto custom-hr" />
      {/* FAQ Section */}
      <section
        id="faq"
        className="services-section mt-5 mb-5 px-lg-5 px-sm-0"
        aria-labelledby="faq-title"
      >
        <div className="container-fluid py-5">
          <div className="row hero-row align-items-center g-1 px-3 px-lg-4 text-center">
            <h1 id="faq-title" className="services-title">
              Frequently Asked{" "}
              <span className="high-light-words">Questions About Therapy</span>
            </h1>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-lg-8">
              {FAQs.map((faq, index) => (
                <div key={index} className="accordion-item">
                  <button
                    className={`accordion-header ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="accordion-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                    {activeIndex === index ? (
                      <FiMinus className="accordion-icon" />
                    ) : (
                      <FiPlus className="accordion-icon" />
                    )}
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className={`accordion-content ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-auto custom-hr" />
      {/* Contact Us Section */}
      <section
        id="contact"
        className="contact-section mt-5 mb-5 px-lg-5 px-sm-0"
        aria-labelledby="contact-title"
        itemScope
        itemType="https://schema.org/ContactPoint"
      >
        <meta itemProp="name" content="BrightPoint Wellness Contact" />
        <div className="container-fluid">
          {/* Contact Info Columns */}
          <div className="row hero-row align-items-center g-1 px-3 px-lg-4">
            <h1 id="contact-title" className="hero-section-heading mb-3 order-1 text-center">
              Contact <span className="high-light-words">Mental Health Therapists</span> Today
            </h1>
            <article
              ref={contactTextRef}
              className="col-12 col-lg-6 hero-copy my-3 order-3 order-lg-1 text-start"
              itemProp="description"
            >
              <p className="hero-section-taglines mb-4">
                Ready to take the next step toward better mental health and wellness?
                Don't wait any longer—begin your journey with BrightPoint Counseling
                today. Seeking professional therapy services can bring numerous benefits,
                including:
              </p>
              <ul className="contact-benefits mb-4">
                <li>Enhanced self-awareness and personal growth through counseling.</li>
                <li>Better coping skills and resilience for stress and anxiety.</li>
                <li>Improved communication and stronger relationships.</li>
                <li>Reduced symptoms of stress, anxiety, and depression.</li>
                <li>Greater overall mental health and life satisfaction.</li>
              </ul>
              <p className="hero-section-taglines mb-4">
                Act now and prioritize your mental well-being. Schedule a therapy appointment
                or get more information about our counseling services below.
              </p>
              <div className="cta-wrap">
                <a
                  href="#contact"
                  className="btn cta-btn text-uppercase btn-sm"
                  aria-label="Schedule mental health therapy appointment"
                >
                  <span>Schedule Therapy Appointment</span>
                  <FiCalendar className="cta-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
            <figure
              ref={contactImgWrapRef}
              className="col-12 col-lg-6 hero-visual m-0 position-relative order-2"
              itemProp="image"
            >
              <img
                src={ContactImage}
                alt="Contact BrightPoint for professional mental health counseling"
                className="doctor-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          {/* Form Columns */}
          <div className="row hero-row g-1 px-3 px-lg-4 mt-5">
            <figure className="col-12 col-lg-6 hero-visual m-0 contact-form-img-col order-1">
              <img
                src={FormImage}
                alt="Contact form for mental health therapy inquiries"
                className="doctor-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="col-12 col-lg-6 contact-form-col order-2">
              <h2 className="contact-form-heading mb-4">Send Therapy Inquiry Message</h2>
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
                    <FiHelpCircle className="form-icon" aria-hidden="true" />
                    Your Therapy Message <span className="text-danger">(required)</span>
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
                <div className="cta-wrap">
                  <button
                    type="submit"
                    className="btn cta-btn text-uppercase btn-sm"
                    aria-label="Submit mental health inquiry"
                  >
                    <span>Submit Inquiry</span>
                    <FiSend className="cta-icon" aria-hidden="true" />
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

export default Home;