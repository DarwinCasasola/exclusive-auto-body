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
            <p>Complete repair solutions for vehicles damaged in accidents.</p>
          </div>

          <div className="service-detail-card">
            <h3>Ding & Dent Correction</h3>
            <p>Restore smooth body lines and improve vehicle appearance.</p>
          </div>

          <div className="service-detail-card">
            <h3>Minor Repair</h3>
            <p>Fix scratches, chips, and bumper damage quickly and cleanly.</p>
          </div>

          <div className="service-detail-card">
            <h3>Complete Paint Job</h3>
            <p>Full refinishing work for a clean, polished finish.</p>
          </div>

          <div className="service-detail-card">
            <h3>Mechanical & A/C</h3>
            <p>We provide mechanical repairs and A/C service to keep your vehicle reliable, efficient, and comfortable year-round.</p>
          </div>

          <div className="service-detail-card">
            <h3>VP-064 Inspection</h3>
            <p>VP-064 inspection certification verifies that your vehicle meets Nevada DMV safety and identification requirements after repairs or restoration.</p>
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
              <h2>Inspection</h2>
              <h4><p>We carefully inspect your vehicle and assess the damage.</p></h4>
            </div>

            <div className="process-step">
              <span>02</span>
              <h2>Estimate</h2>
              <h4><p>We provide a clear and accurate estimate for the repair.</p></h4>
            </div>

            <div className="process-step">
              <span>03</span>
              <h2>Repair</h2>
              <h4><p>We complete the work with precision and attention to detail.</p></h4>
            </div>

            <div className="process-step">
              <span>04</span>
              <h2>Final Review</h2>
              <h4><p>We review the finished work to ensure everything meets our standards.</p></h4>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ GOOGLE REVIEWS SECTION */}
     {/* Google Reviews Section */}
<section className="reviews-section">
  <div className="page-section reviews-content">
    <div className="section-heading center">
      <p className="section-label">Customer Reviews</p>
      <h2>What Our Customers Are Saying</h2>
    </div>

    <div className="reviews-embed">
      <div
        className="elfsight-app-f1704e35-92c9-463a-b2fd-395d135b38d5"
        data-elfsight-app-lazy
      ></div>
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