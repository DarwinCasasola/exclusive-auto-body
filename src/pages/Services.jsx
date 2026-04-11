import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      <section className="inner-page-hero services-hero">
        <div className="inner-page-overlay">
          <div className="inner-page-content">
            <p className="section-label">Our Services</p>
            <h1>Auto Body Services Built Around Quality and Reliability</h1>
            <p>
              Exclusive Auto Body provides professional repair, refinishing, and
              inspection services designed to restore your vehicle with care,
              precision, and dependable workmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="section-label">What We Offer</p>
          <h2>Auto Body Solutions for Every Type of Vehicle Damage</h2>
        </div>

        <p className="services-intro-text">
          We focus on practical, high-quality repair work that helps restore your
          vehicle’s appearance, performance, and value. Whether you need collision
          repair, paint work, dent correction, mechanical service, or inspection
          certification, we approach every job with attention to detail and pride
          in the final result.
        </p>

        <div className="services-grid">
          <div className="service-detail-card">
            <h3>Collision Repair</h3>
            <p>
              Complete repair solutions for vehicles damaged in accidents, with
              careful attention to body alignment, finish, and overall appearance.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Ding & Dent Correction</h3>
            <p>
              Professional dent and ding repair designed to restore smooth body
              lines and improve the look of your vehicle.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Minor Repair</h3>
            <p>
              Fast, reliable repair work for scratches, chips, bumper damage, and
              other smaller body issues that still deserve quality attention.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Complete Paint Job</h3>
            <p>
              Full paint services and refinishing work that help renew your
              vehicle’s finish and bring back a clean, polished look.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Mechanical & A/C</h3>
            <p>
              Mechanical support and A/C service to help keep your vehicle running
              properly and comfortably after repair or inspection.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>VPO-64 Inspection Certification</h3>
            <p>
              Inspection and certification services handled with care and accuracy
              to help meet required standards and documentation needs.
            </p>
          </div>
        </div>
      </section>

      <section className="auto-body-process-section">
        <div className="page-section">
          <div className="section-heading">
            <p className="section-label">Our Process</p>
            <h2>A Straightforward Approach to Every Repair</h2>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <span>01</span>
              <h3>Inspection</h3>
              <p>
                We begin by reviewing the damage, discussing your concerns, and
                identifying the work your vehicle needs.
              </p>
            </div>

            <div className="process-step">
              <span>02</span>
              <h3>Estimate</h3>
              <p>
                We provide a clear estimate and outline the repair process so you
                know what to expect.
              </p>
            </div>

            <div className="process-step">
              <span>03</span>
              <h3>Repair</h3>
              <p>
                Our team completes the work with a focus on quality craftsmanship,
                clean results, and reliable service.
              </p>
            </div>

            <div className="process-step">
              <span>04</span>
              <h3>Final Review</h3>
              <p>
                We check the finished work carefully to make sure your vehicle is
                ready to return looking its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Need Help With Your Vehicle?</h2>
          <p>
            Contact Exclusive Auto Body today to request an estimate or ask about
            the repair services you need.
          </p>
          <Link to="/contact" className="primary-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;