import React, { useEffect, useRef } from "react";
import { FiPlay, FiBookOpen } from "react-icons/fi";
import HeroSectionImage from "../assets/about/About.gif";
import CEOImage from "../assets/about/CEO.gif";
import "../styles/About.css";

function About() {
  // Refs for hero section
  const heroTextRef = useRef(null);
  const heroImgWrapRef = useRef(null);
  // Refs for CEO section
  const ceoTextRef = useRef(null);
  const ceoImgWrapRef = useRef(null);

  // Sync image column height with text content for hero and CEO (lg+ only)
  useEffect(() => {
    const syncHeights = () => {
      if (heroTextRef.current && heroImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        heroImgWrapRef.current.style.minHeight = isLgUp
          ? `${heroTextRef.current.offsetHeight}px`
          : "unset";
      }
      if (ceoTextRef.current && ceoImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        ceoImgWrapRef.current.style.minHeight = isLgUp
          ? `${ceoTextRef.current.offsetHeight}px`
          : "unset";
      }
    };
    const ro = new ResizeObserver(syncHeights);
    if (heroTextRef.current) ro.observe(heroTextRef.current);
    if (ceoTextRef.current) ro.observe(ceoTextRef.current);
    syncHeights();
    window.addEventListener("resize", syncHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <meta
          name="keywords"
          content="BrightPoint Wellness, mental health counseling, compassionate care, healthcare services, patient-centered care, accessibility, medical expertise"
        />
        <meta name="author" content="BrightPoint Wellness Team" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.brightpointwellness.com/about"
        />
      </head>

      {/* Hero Section */}
      <section
        className="about-hero-section px-lg-5 px-sm-0"
        aria-labelledby="about-hero-title"
        itemScope
        itemType="https://schema.org/MedicalOrganization"
      >
        <meta itemProp="name" content="BrightPoint Wellness" />
        <meta
          itemProp="description"
          content="Learn about BrightPoint Wellness, offering compassionate mental health counseling, healthcare services, patient-centered care, accessibility, and medical expertise."
        />
        <meta itemProp="url" content="https://www.brightpointwellness.com" />
        <meta itemProp="telephone" content="+1-800-555-1234" />
        <meta itemProp="address" content="123 Wellness Way, Health City, USA" />
        <div
          className="container-fluid"
        >
          <div className="row mb-5 about-hero-row align-items-center g-1 px-3 px-lg-4">
            <article
              ref={heroTextRef}
              className="col-12 col-lg-6 about-hero-copy my-3 order-2 order-lg-1 text-start"
              itemProp="department"
            >
              <header>
                <h1
                  id="about-hero-title"
                  className="about-hero-heading mb-3"
                  itemProp="headline"
                >
                  About <span className="about-highlight-words">Us</span>
                </h1>
              </header>
              <p className="about-hero-taglines mb-4" itemProp="description">
                Embark on a transformative mental health counseling and
                healthcare services experience filled with compassionate care,
                patient-centered care, and unwavering support by connecting with
                us at BrightPoint Wellness today.
              </p>
              <div className="about-cta-wrap">
                <a
                  href="/contact"
                  className="btn about-cta-btn btn-sm text-uppercase"
                  aria-label="Connect with BrightPoint Wellness for mental health counseling and compassionate care"
                >
                  <span>Connect Now</span>
                  <FiPlay className="about-cta-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
            <figure
              ref={heroImgWrapRef}
              className="col-12 col-lg-6 about-hero-visual m-0 position-relative order-1 order-lg-2"
              itemProp="image"
            >
              <img
                src={HeroSectionImage}
                alt="BrightPoint Wellness mental health counseling services illustration showcasing compassionate care and patient-centered healthcare"
                className="about-doctor-image"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <hr className="mx-auto custom-hr" />

      {/* CEO Section */}
      <section
        className="about-ceo-section mt-5 mb-5 px-lg-5 px-sm-0"
        aria-labelledby="about-ceo-title"
        itemScope
        itemType="https://schema.org/MedicalOrganization"
      >
        <meta itemProp="name" content="BrightPoint Wellness CEO Message" />
        <meta
          itemProp="description"
          content="CEO message about our commitment to comprehensive mental health counseling, compassionate care, healthcare services, patient-centered care, accessibility, and medical expertise."
        />
        <meta
          itemProp="url"
          content="https://www.brightpointwellness.com/about"
        />
        <div className="container-fluid">
          <div
            className="row about-hero-row align-items-center g-1 px-3 px-lg-4"
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <figure
              ref={ceoImgWrapRef}
              className="col-12 col-lg-6 about-hero-visual m-0 position-relative order-1 order-lg-1"
              itemProp="image"
            >
              <img
                src={CEOImage}
                alt="CEO of BrightPoint Wellness delivering message on mental health counseling, compassionate care, and healthcare services"
                className="about-doctor-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <article
              ref={ceoTextRef}
              className="col-12 col-lg-6 about-hero-copy my-3 order-2 order-lg-2 text-start"
              itemProp="department"
            >
              <header>
                <h1
                  id="about-ceo-title"
                  className="about-hero-heading mb-3"
                  itemProp="headline"
                >
                  CEO <span className="about-highlight-words">Message</span>
                </h1>
              </header>
              <p className="about-hero-taglines mb-4" itemProp="description">
                At BrightPoint Wellness, we recognize that every individual's
                journey toward mental wellness is unique, and for some, it
                requires more comprehensive care than what standard outpatient
                services can provide. It is in response to this pressing need
                that we developed our IOP, a program tailored to offer the
                utmost support, resources, and guidance to those who require an
                elevated level of care with our medical expertise in mental
                health counseling.
              </p>
              <p className="about-hero-taglines mb-4" itemProp="description">
                To all those who have chosen BrightPoint as their beacon of hope
                and recovery in mental health counseling and healthcare
                services, I want to assure you that we will continue to evolve
                and adapt our programs to best meet your needs with
                accessibility and compassionate care.
              </p>
              <div className="about-cta-wrap">
                <a
                  href="/services"
                  className="btn about-cta-btn text-uppercase btn-sm"
                  aria-label="Explore our comprehensive mental health counseling and healthcare services programs"
                >
                  <span>Explore Programs</span>
                  <FiBookOpen className="about-cta-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Vision / Mission / Principles Timeline ===== */}
      <section
        className="px-lg-5 px-sm-0"
        aria-label="Our Vision, Mission, and Principles"
      >
        <div className="container-fluid vmp-container" style={{ marginTop: "3rem", marginBottom: "8rem" }}>
          {/* Vision */}
          <div className="row align-items-center how-it-works d-flex">
            <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">1</div>
            </div>
            <div className="col-10 col-md-8 col-lg-6">
              <h1
                className="about-hero-heading mb-3"
                style={{ fontSize: "46px" }}
                itemProp="headline"
              >
                Our <span className="about-highlight-words">Vission</span>
              </h1>
              <p style={{ fontSize: "20px" }}>
                BrightPoint vision is to revolutionize healthcare by providing
                accessible, patient-centered medical services that empower
                individuals to take control of their overall health. We envision
                a future where every person has the opportunity to lead a
                healthier and happier life through innovative and personalized
                healthcare solutions.
              </p>
            </div>
          </div>

          {/* Path between Vision-Mission */}
          <div className="row timeline">
            <div className="col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div>

          {/* Mission */}
          <div className="row align-items-center justify-content-end how-it-works d-flex">
            <div className="col-10 col-md-8 col-lg-6 text-right">
              <h1
                className="about-hero-heading mb-3"
                style={{ fontSize: "46px" }}
                itemProp="headline"
              >
                Our <span className="about-highlight-words">Mission</span>
              </h1>
              <p style={{ fontSize: "20px" }}>
                Our mission is to deliver comprehensive and compassionate
                medical care to individuals of all backgrounds. We are committed
                to fostering a healing environment that prioritizes the
                physical, emotional, and mental health of our patients. Through
                advanced technology, collaboration, and a dedicated team of
                healthcare professionals, we strive to deliver exceptional
                medical services that exceed expectations and improve lives.
              </p>
            </div>
            <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">2</div>
            </div>
          </div>

          {/* Path between Mission-Principles */}
          <div className="row timeline">
            <div className="col-2">
              <div className="corner right-bottom"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner top-left"></div>
            </div>
          </div>

          {/* Principles */}
          <div className="row align-items-center how-it-works d-flex">
            <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">3</div>
            </div>
            <div className="col-10 col-md-8 col-lg-6">
              <h1
                className="about-hero-heading mb-3"
                itemProp="headline"
                style={{ fontSize: "46px" }}
              >
                Our <span className="about-highlight-words">Principle</span>
              </h1>
              <p style={{ fontSize: "20px" }}>
                BrightPoint Wellness is guided by the following core principles:
              </p>

              <h6 style={{ fontSize: "34px" }}>Compassion and Empathy</h6>
              <p style={{ fontSize: "20px" }}>
                We understand that healthcare is not just about treating
                illnesses but also about fostering genuine connections, empathy,
                and understanding between patients and healthcare providers.
              </p>

              <h6 style={{ fontSize: "34px" }}>Excellence in Care</h6>
              <p style={{ fontSize: "20px" }}>
                We maintain the highest standards of medical expertise,
                continuously seeking innovative approaches and staying abreast
                of the latest advancements to provide exceptional healthcare
                services.
              </p>

              <h6 style={{ fontSize: "34px" }}>Patient-Centered Approach</h6>
              <p style={{ fontSize: "20px" }}>
                We prioritize the needs, preferences, and values of our
                patients, ensuring their voices are heard and respected
                throughout their healthcare journey.
              </p>

              <h6 style={{ fontSize: "34px" }}>Accessibility</h6>
              <p style={{ fontSize: "20px" }}>
                We are dedicated to breaking down barriers to healthcare access
                by offering affordable, convenient, and inclusive services that
                cater to the diverse needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
