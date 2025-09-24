import React, { useEffect, useRef } from "react";
import { FiPlay, FiBookOpen } from "react-icons/fi";
import HeroSectionImage from "../assets/about/About.gif";
import CEOImage from "../assets/about/CEO.gif";
import PrincipalIcon from "../assets/about/PrincipalIcon.svg";
import VisionIcon from "../assets/about/Vision.svg";
import MissionIcon from "../assets/about/Mission.svg";
import "../styles/About.css";
function About() {
  // Refs for hero section
  const heroTextRef = useRef(null);
  const heroImgWrapRef = useRef(null);
  // Refs for CEO section
  const ceoTextRef = useRef(null);
  const ceoImgWrapRef = useRef(null);
  // Refs for Principle and Vision columns
  const principleTextRef = useRef(null);
  const principleImgWrapRef = useRef(null);
  const visionTextRef = useRef(null);
  const visionImgWrapRef = useRef(null);
  // Refs for Compassion and Excellence columns
  const compassionTextRef = useRef(null);
  const compassionImgWrapRef = useRef(null);
  const excellenceTextRef = useRef(null);
  const excellenceImgWrapRef = useRef(null);
  // Refs for Patient-Centered and Accessibility columns
  const patientCenteredTextRef = useRef(null);
  const patientCenteredImgWrapRef = useRef(null);
  const accessibilityTextRef = useRef(null);
  const accessibilityImgWrapRef = useRef(null);
  // Sync image column height with text content for hero, CEO, Principle/Vision, Compassion/Excellence, and Patient-Centered/Accessibility (lg+ only)
  useEffect(() => {
    const syncHeights = () => {
      // Hero section
      if (heroTextRef.current && heroImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        heroImgWrapRef.current.style.minHeight = isLgUp
          ? `${heroTextRef.current.offsetHeight}px`
          : "unset";
      }
      // CEO section
      if (ceoTextRef.current && ceoImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        ceoImgWrapRef.current.style.minHeight = isLgUp
          ? `${ceoTextRef.current.offsetHeight}px`
          : "unset";
      }
      // Principle column
      if (principleTextRef.current && principleImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        principleImgWrapRef.current.style.minHeight = isLgUp
          ? `${principleTextRef.current.offsetHeight}px`
          : "unset";
      }
      // Vision column
      if (visionTextRef.current && visionImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        visionImgWrapRef.current.style.minHeight = isLgUp
          ? `${visionTextRef.current.offsetHeight}px`
          : "unset";
      }
      // Compassion column
      if (compassionTextRef.current && compassionImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        compassionImgWrapRef.current.style.minHeight = isLgUp
          ? `${compassionTextRef.current.offsetHeight}px`
          : "unset";
      }
      // Excellence column
      if (excellenceTextRef.current && excellenceImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        excellenceImgWrapRef.current.style.minHeight = isLgUp
          ? `${excellenceTextRef.current.offsetHeight}px`
          : "unset";
      }
      // Patient-Centered column
      if (patientCenteredTextRef.current && patientCenteredImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        patientCenteredImgWrapRef.current.style.minHeight = isLgUp
          ? `${patientCenteredTextRef.current.offsetHeight}px`
          : "unset";
      }
      // Accessibility column
      if (accessibilityTextRef.current && accessibilityImgWrapRef.current) {
        const isLgUp = window.matchMedia("(min-width: 992px)").matches;
        accessibilityImgWrapRef.current.style.minHeight = isLgUp
          ? `${accessibilityTextRef.current.offsetHeight}px`
          : "unset";
      }
    };
    const ro = new ResizeObserver(syncHeights);
    if (heroTextRef.current) ro.observe(heroTextRef.current);
    if (ceoTextRef.current) ro.observe(ceoTextRef.current);
    if (principleTextRef.current) ro.observe(principleTextRef.current);
    if (visionTextRef.current) ro.observe(visionTextRef.current);
    if (compassionTextRef.current) ro.observe(compassionTextRef.current);
    if (excellenceTextRef.current) ro.observe(excellenceTextRef.current);
    if (patientCenteredTextRef.current)
      ro.observe(patientCenteredTextRef.current);
    if (accessibilityTextRef.current) ro.observe(accessibilityTextRef.current);
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
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <div className="row about-hero-row align-items-center g-4 px-3 px-lg-4">
            <article
              ref={heroTextRef}
              className="col-12 col-lg-6 about-hero-copy my-3 order-2 order-lg-1 text-start"
              itemProp="department"
            >
              <header>
                <h1 id="about-hero-title" className="about-hero-heading mb-3" itemProp="headline">
                  About <span className="about-highlight-words">Us</span>
                </h1>
              </header>
              <p className="about-hero-taglines mb-4" itemProp="description">
                Embark on a transformative mental health counseling and healthcare services experience filled with compassionate care, patient-centered care, and unwavering support by connecting with us at BrightPoint Wellness today.
              </p>
              <div className="about-cta-wrap">
                <a
                  href="#contact"
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
        className="about-ceo-section px-lg-5 px-sm-0"
        aria-labelledby="about-ceo-title"
        itemScope
        itemType="https://schema.org/MedicalOrganization"
      >
        <meta
          itemProp="name"
          content="BrightPoint Wellness CEO Message and Values"
        />
        <meta
          itemProp="description"
          content="CEO message and core values about our commitment to comprehensive mental health counseling, compassionate care, healthcare services, patient-centered care, accessibility, and medical expertise."
        />
        <meta
          itemProp="url"
          content="https://www.brightpointwellness.com/about"
        />
        <div
          className="container-fluid"
        >
          {/* CEO Message */}
          <div
            className="row about-hero-row align-items-center g-4 px-3 px-lg-4"
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
                <h1 id="about-ceo-title" className="about-hero-heading mb-3" itemProp="headline">
                  CEO <span className="about-highlight-words">Message</span>
                </h1>
              </header>
              <p className="about-hero-taglines mb-4" itemProp="description">
                At BrightPoint Wellness, we recognize that every individual's
                journey toward mental wellness is unique, and for some, it
                requires more comprehensive care than what standard outpatient
                services can provide. It is in response to this pressing need
                that we developed our IOP, a program tailored to offer the utmost
                support, resources, and guidance to those who require an
                elevated level of care with our medical expertise in mental health counseling.
              </p>
              <p className="about-hero-taglines mb-4" itemProp="description">
                To all those who have chosen BrightPoint as their beacon of hope
                and recovery in mental health counseling and healthcare services, I want to assure you that we will continue to
                evolve and adapt our programs to best meet your needs with accessibility and compassionate care.
              </p>
              <div className="about-cta-wrap">
                <a
                  href="#contact"
                  className="btn about-cta-btn text-uppercase btn-sm"
                  aria-label="Explore our comprehensive mental health counseling and healthcare services programs"
                >
                  <span>Explore Programs</span>
                  <FiBookOpen className="about-cta-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
          {/* Vision and Mission */}
          <div
            className="row about-hero-row align-items-center g-4 px-3 px-lg-4"
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <div className="col-12 col-lg-6 about-vision-col order-1 order-lg-1">
              <figure
                ref={principleImgWrapRef}
                className="about-hero-visual m-0 position-relative mb-4"
                itemProp="image"
              >
                <img
                  src={PrincipalIcon}
                  alt="Vision Icon for BrightPoint Wellness representing healthcare innovation in mental health counseling and patient-centered care"
                  className="about-principle-icon"
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="200"
                />
              </figure>
              <article
                ref={principleTextRef}
                className="about-hero-copy my-3 text-center"
                itemProp="department"
              >
                <meta itemProp="name" content="Our Vision at BrightPoint Wellness" />
                <meta itemProp="description" content="BrightPoint Wellness vision is to revolutionize healthcare by providing accessible, patient-centered medical services that empower individuals to take control of their overall health. We envision a future where every person has the opportunity to lead a healthier and happier life through innovative and personalized healthcare solutions including mental health counseling and compassionate care." />
                <header>
                  <h1 id="about-vision-title" className="about-services-title text-center mb-3" itemProp="headline">
                    Our <span className="about-highlight-words">Vision</span>
                  </h1>
                </header>
                <p className="about-hero-taglines mb-4" itemProp="description">
                  BrightPoint Wellness vision is to revolutionize healthcare by providing
                  accessible, patient-centered medical services that empower
                  individuals to take control of their overall health. We
                  envision a future where every person has the opportunity to
                  lead a healthier and happier life through innovative and
                  personalized healthcare solutions including mental health counseling, compassionate care, and medical expertise.
                </p>
              </article>
            </div>
            <div className="col-12 col-lg-6 about-mission-col order-2 order-lg-2">
              <figure
                ref={visionImgWrapRef}
                className="about-hero-visual m-0"
                itemProp="image"
              >
                <img
                  src={VisionIcon}
                  alt="Mission Icon for BrightPoint Wellness representing our commitment to compassionate care and healthcare services"
                  className="about-principle-icon"
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="200"
                />
              </figure>
              <article
                ref={visionTextRef}
                className="about-hero-copy my-3 text-center"
                itemProp="department"
              >
                <meta itemProp="name" content="Our Mission at BrightPoint Wellness" />
                <meta itemProp="description" content="Our mission is to deliver comprehensive and compassionate medical care to individuals of all backgrounds. We are committed to fostering a healing environment that prioritizes the physical, emotional, and mental health of our patients. Through advanced technology, collaboration, and a dedicated team of healthcare professionals, we strive to deliver exceptional medical services that exceed expectations and improve lives with patient-centered care and accessibility." />
                <header>
                  <h1
                    id="about-mission-title"
                    className="about-services-title mb-3 text-center"
                    itemProp="headline"
                  >
                    Our <span className="about-highlight-words">Mission</span>
                  </h1>
                </header>
                <p className="about-hero-taglines mb-4" itemProp="description">
                  Our mission is to deliver comprehensive and compassionate
                  medical care to individuals of all backgrounds. We are
                  committed to fostering a healing environment that prioritizes
                  the physical, emotional, and mental health of our patients.
                  Through advanced technology, collaboration, and a dedicated
                  team of healthcare professionals, we strive to deliver
                  exceptional medical services that exceed expectations and
                  improve lives with patient-centered care, accessibility, and medical expertise.
                </p>
              </article>
            </div>
          </div>
          {/* Core Values Icon and Heading */}
          <div
            className="row about-hero-row g-4 px-3 px-lg-4"
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <figure className="about-hero-visual m-0 position-relative mb-4 text-center" itemProp="image">
              <img
                src={MissionIcon}
                alt="Core Values Icon for BrightPoint Wellness representing our commitment to compassionate care, patient-centered care, and accessibility in healthcare services"
                className="about-mission-icon"
                loading="lazy"
                decoding="async"
                width="200"
                height="200"
              />
            </figure>
            <header className="text-center mb-4">
              <h1 id="about-core-values-title" className="about-services-title text-center" itemProp="headline">
                Our <span className="about-highlight-words">Core Values</span>
              </h1>
            </header>
          </div>
          {/* Compassion and Excellence */}
          <div
            className="row about-hero-row align-items-start g-4 px-3 px-lg-4"
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <div className="col-12 col-lg-6 about-compassion-col order-1">
              <article
                ref={compassionTextRef}
                className="about-hero-copy my-3"
                itemProp="department"
              >
                <meta itemProp="name" content="Compassion and Empathy at BrightPoint Wellness" />
                <meta itemProp="description" content="We understand that healthcare services and mental health counseling are not just about treating illnesses but also about fostering genuine connections, empathy, and understanding between patients and healthcare providers with compassionate care." />
                <header>
                  <h1 id="about-compassion-title" className="about-services-title text-center mb-3" style={{ fontSize: '34px' }} itemProp="headline">
                    Compassion and Empathy
                  </h1>
                </header>
                <p className="about-hero-taglines text-center mb-4" itemProp="description" style={{ fontSize: '20px' }}>
                  We understand that healthcare services and mental health counseling are not just about treating
                  illnesses but also about fostering genuine connections,
                  empathy, and understanding between patients and healthcare
                  providers with compassionate care.
                </p>
              </article>
            </div>
            <div className="col-12 col-lg-6 about-excellence-col order-2">
              <article
                ref={excellenceTextRef}
                className="about-hero-copy my-3"
                itemProp="department"
              >
                <meta itemProp="name" content="Excellence in Care at BrightPoint Wellness" />
                <meta itemProp="description" content="We maintain the highest standards of medical expertise, continuously seeking innovative approaches and staying abreast of the latest advancements to provide exceptional healthcare services." />
                <header>
                  <h1 id="about-excellence-title" className="about-services-title text-center mb-3" style={{ fontSize: '34px' }} itemProp="headline">
                    Excellence in Care
                  </h1>
                </header>
                <p className="about-hero-taglines text-center mb-4" itemProp="description" style={{ fontSize: '20px' }}>
                  We maintain the highest standards of medical expertise,
                  continuously seeking innovative approaches and staying abreast
                  of the latest advancements to provide exceptional healthcare
                  services.
                </p>
              </article>
            </div>
          </div>
          {/* Patient-Centered and Accessibility */}
          <div
            className="row about-hero-row align-items-start g-4 px-3 px-lg-4"
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <div className="col-12 col-lg-6 about-patient-centered-col order-1">
              <article
                ref={patientCenteredTextRef}
                className="about-hero-copy my-3"
                itemProp="department"
              >
                <meta itemProp="name" content="Patient-Centered Approach at BrightPoint Wellness" />
                <meta itemProp="description" content="We prioritize the needs, preferences, and values of our patients in our patient-centered care, ensuring their voices are heard and respected throughout their healthcare journey." />
                <header>
                  <h1
                    id="about-patient-centered-title"
                    className="about-services-title text-center mb-3"
                    style={{ fontSize: '34px' }}
                    itemProp="headline"
                  >
                    Patient-Centered Approach
                  </h1>
                </header>
                <p className="about-hero-taglines text-center mb-4" itemProp="description" style={{ fontSize: '20px' }}>
                  We prioritize the needs, preferences, and values of our
                  patients in our patient-centered care, ensuring their voices are heard and respected
                  throughout their healthcare journey.
                </p>
              </article>
            </div>
            <div className="col-12 col-lg-6 about-accessibility-col order-2">
              <article
                ref={accessibilityTextRef}
                className="about-hero-copy my-3 text-start"
                itemProp="department"
              >
                <meta itemProp="name" content="Accessibility at BrightPoint Wellness" />
                <meta itemProp="description" content="We are dedicated to breaking down barriers to healthcare access by offering affordable, convenient, and inclusive services that cater to the diverse needs of our community with accessibility in mental health counseling and healthcare services." />
                <header>
                  <h1 id="about-accessibility-title" className="about-services-title text-center mb-3" style={{ fontSize: '34px' }} itemProp="headline">
                    Accessibility
                  </h1>
                </header>
                <p className="about-hero-taglines text-center" itemProp="description" style={{ fontSize: '20px' }}>
                  We are dedicated to breaking down barriers to healthcare
                  access by offering affordable, convenient, and inclusive
                  services that cater to the diverse needs of our community with accessibility in mental health counseling and healthcare services.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;