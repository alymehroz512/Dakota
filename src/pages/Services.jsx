import React, { useEffect, useRef } from "react";
import {
  FiPlay,
  FiTarget,
  FiUserCheck,
  FiUsers,
  FiVideo,
  FiBriefcase,
  FiHeart,
  FiSmile,
  FiBookOpen,
  FiShield,
  FiActivity,
  FiCheckCircle,
  FiDollarSign,
  FiHome,
  FiAlertCircle,
} from "react-icons/fi";
import ServicesHeroImage from "../assets/services/Services.gif";
import "../styles/Services.css";

function Services() {
  // -------- DATA (mapped to UI) --------
  const SERVICES = [
    {
      icon: FiTarget,
      title: "Intensive Outpatient (IOP)",
      text:
        "Structured, higher-touch support with flexible scheduling to elevate outcomes while maintaining daily routines.",
    },
    {
      icon: FiUserCheck,
      title: "Individual Counseling",
      text:
        "One-to-one sessions focused on personalized goals, coping strategies, and sustainable progress.",
    },
    {
      icon: FiUsers,
      title: "Group Therapy",
      text:
        "Therapist-led groups that foster connection, shared learning, and mutual accountability.",
    },
    {
      icon: FiVideo,
      title: "Tele-health Sessions",
      text:
        "Secure virtual appointments to keep care accessible and consistent from anywhere.",
    },
  ];

  // icons chosen to roughly fit the labels in your reference image
  const CONDITIONS = [
    { label: "Substance Abuse", icon: FiActivity },
    { label: "Depression", icon: FiHeart },
    { label: "Daily Gratitude", icon: FiBookOpen },
    { label: "Parenting skills", icon: FiUsers },
    { label: "Employment retaining to work after recovery", icon: FiBriefcase },
    { label: "Employment", icon: FiBriefcase },
    { label: "Coping Skills", icon: FiShield },
    { label: "Anxiety", icon: FiAlertCircle },
    { label: "One Less medication", icon: FiCheckCircle },
    { label: "healthy mind and positive thinking", icon: FiSmile },
    { label: "Family Conflict", icon: FiHome },
    { label: "Emotional regulation skills", icon: FiHeart },
    { label: "Financial Management", icon: FiDollarSign },
  ];

  // Refs for hero section height sync (lg+ only)
  const srvHeroTextRef = useRef(null);
  const srvHeroImgWrapRef = useRef(null);

  useEffect(() => {
    const syncHeights = () => {
      if (srvHeroTextRef.current && srvHeroImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        srvHeroImgWrapRef.current.style.minHeight = isLgUp
          ? `${srvHeroTextRef.current.offsetHeight}px`
          : "unset";
      }
    };
    const ro = new ResizeObserver(syncHeights);
    if (srvHeroTextRef.current) ro.observe(srvHeroTextRef.current);
    syncHeights();
    window.addEventListener("resize", syncHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, []);

  return (
    <>
      {/* ===== Services Hero Section ===== */}
      <section
        className="services-hero-section section-block px-lg-5 px-sm-0"
        aria-labelledby="services-hero-title"
        itemScope
        itemType="https://schema.org/MedicalOrganization"
      >
        <meta itemProp="name" content="BrightPoint Wellness Services" />
        <meta
          itemProp="description"
          content="Explore our mental health and wellness services, including intensive outpatient programs (IOP), counseling, and personalized care plans."
        />
        <meta
          itemProp="url"
          content="https://www.brightpointwellness.com/services"
        />

        <div className="container-fluid">
          <div className="row services-hero-row align-items-center g-1 px-3 px-lg-4">
            <article
              ref={srvHeroTextRef}
              className="col-12 col-lg-6 services-hero-copy my-3 order-2 order-lg-1 text-start"
              itemProp="department"
            >
              <header>
                <h1
                  id="services-hero-title"
                  className="services-hero-heading mb-3"
                  itemProp="headline"
                >
                  Our <span className="services-highlight-words">Services</span>
                </h1>
              </header>

              <p
                className="services-hero-taglines mb-4"
                itemProp="description"
              >
                From individualized counseling to our Intensive Outpatient
                Program, BrightPoint Wellness delivers compassionate,
                patient-centered care designed to meet you where you are and
                support your journey forward.
              </p>

              <ul className="contact-benefits mb-4" style={{fontSize: '20px'}}>
                <li>Intensive Outpatient Program (IOP)</li>
                <li>Individual & Group Counseling</li>
                <li>Tele-health & In-clinic Sessions</li>
                <li>Personalized Care Plans</li>
              </ul>

              <div className="services-cta-wrap">
                <a
                  href="#services-list"
                  className="btn services-cta-btn btn-sm text-uppercase"
                  aria-label="Explore BrightPoint Wellness services in detail"
                >
                  <span>Explore Services</span>
                  <FiPlay className="services-cta-icon" aria-hidden="true" />
                </a>
              </div>
            </article>

            <figure
              ref={srvHeroImgWrapRef}
              className="col-12 col-lg-6 services-hero-visual m-0 position-relative order-1 order-lg-2"
              itemProp="image"
            >
              <img
                src={ServicesHeroImage}
                alt="Illustration representing BrightPoint Wellness services and patient-centered care"
                className="services-hero-image"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <hr className="mx-auto custom-hr" />

      {/* ===== Services Cards (mapped) ===== */}
      <section
        id="services-list"
        className="services-grid-section section-block px-lg-5 px-sm-0"
        aria-label="Service offerings"
      >
        <div className="container-fluid mt-5 mb-5">
          <div className="row g-3 px-3 px-lg-4" style={{marginTop: '8rem' , marginBottom: '10rem'}}>
            <div className="col-12">
              <h2 className="services-grid-heading text-center mb-5">
                Explore <span>What We Offer</span>
              </h2>
            </div>

            {SERVICES.map(({ icon: Icon, title, text }, idx) => (
              <div key={idx} className="col-12 col-md-6 col-xl-3">
                <article className="services-card" role="article">
                  <div className="services-card__badge" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className="services-card__title">{title}</h3>
                  <p className="services-card__text">{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-auto custom-hr" />

      {/* ===== Conditions We Treat (mapped) ===== */}
      <section
        className="conditions-section section-block px-lg-5 px-sm-0"
        aria-labelledby="conditions-title"
      >
        <div className="container-fluid">
          <div className="row px-3 px-lg-4">
            <div className="col-12 text-center">
              <h2 id="conditions-title" className="conditions-heading">
                Conditions <span>We Treat</span>
              </h2>
              <p className="conditions-subtitle">
                Don’t let symptoms hold you back.
              </p>
            </div>
          </div>

          <div className="row px-3 px-lg-4">
            <ul className="conditions-grid">
              {CONDITIONS.map(({ label, icon: Icon }, i) => (
                <li key={i} className="conditions-item">
                  <div className="conditions-badge" aria-hidden="true">
                    <Icon />
                  </div>
                  <div className="conditions-label">{label}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
