import React from "react";
import "../styles/Timeline.css";

function Timeline() {
  return (
    <div className="container-fluid">
      <h2 className="pb-3 pt-2 border-bottom mb-5">Our Vision, Mission, and Principles</h2>
      {/* Vision Section */}
      <div className="row align-items-center how-it-works d-flex">
        <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
          <div className="circle font-weight-bold">1</div>
        </div>
        <div className="col-6">
          <h5 style={{ fontSize: "44px" }}>Our Vision</h5>
          <p style={{ fontSize: "20px" }}>
            BrightPoint vision is to revolutionize healthcare by providing accessible, patient-centered medical services that empower individuals to take control of their overall health. We envision a future where every person has the opportunity to lead a healthier and happier life through innovative and personalized healthcare solutions.
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
      {/* Mission Section */}
      <div className="row align-items-center justify-content-end how-it-works d-flex">
        <div className="col-6 text-right">
          <h5 style={{ fontSize: "44px" }}>Our Mission</h5>
          <p style={{ fontSize: "20px" }}>
            Our mission is to deliver comprehensive and compassionate medical care to individuals of all backgrounds. We are committed to fostering a healing environment that prioritizes the physical, emotional, and mental health of our patients. Through advanced technology, collaboration, and a dedicated team of healthcare professionals, we strive to deliver exceptional medical services that exceed expectations and improve lives.
          </p>
        </div>
        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
          <div className="circle font-weight-bold">2</div>
        </div>
      </div>
      {/* Path between Mission-Principle */}
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
      {/* Principle Section */}
      <div className="row align-items-center how-it-works d-flex">
        <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
          <div className="circle font-weight-bold">3</div>
        </div>
        <div className="col-6">
          <h5 style={{ fontSize: "44px" }}>Our Principle</h5>
          <p style={{ fontSize: "20px" }}>
            BrightPoint Wellness is guided by the following core principles:
          </p>
          <h6 style={{ fontSize: "34px" }}>Compassion and Empathy</h6>
          <p style={{ fontSize: "20px" }}>
            We understand that healthcare is not just about treating illnesses but also about fostering genuine connections, empathy, and understanding between patients and healthcare providers.
          </p>
          <h6 style={{ fontSize: "34px" }}>Excellence in Care</h6>
          <p style={{ fontSize: "20px" }}>
            We maintain the highest standards of medical expertise, continuously seeking innovative approaches and staying abreast of the latest advancements to provide exceptional healthcare services.
          </p>
          <h6 style={{ fontSize: "34px" }}>Patient-Centered Approach</h6>
          <p style={{ fontSize: "20px" }}>
            We prioritize the needs, preferences, and values of our patients, ensuring their voices are heard and respected throughout their healthcare journey.
          </p>
          <h6 style={{ fontSize: "34px" }}>Accessibility</h6>
          <p style={{ fontSize: "20px" }}>
            We are dedicated to breaking down barriers to healthcare access by offering affordable, convenient, and inclusive services that cater to the diverse needs of our community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;