import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="inner-page-hero about-hero">
        <div className="inner-page-overlay">
          <div className="inner-page-content">
            <p className="section-label">About Us</p>
            <h1>Built on Quality, Trust, and Reliable Service</h1>
            <p>
              Exclusive Auto Body is committed to professional repair work,
              honest service, and helping customers get their vehicles back in
              top shape with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section about-story-section">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-heading">
              <p className="section-label">Who We Are</p>
              <h2>An Auto Body Shop Focused on Doing the Job Right</h2>
            </div>

            <p>
              At Exclusive Auto Body, we take pride in delivering dependable
              repair services with attention to detail, professional care, and a
              strong commitment to customer satisfaction.
            </p>

            <p>
              Whether a vehicle needs collision repair, dent correction, a
              complete paint job, mechanical support, or inspection
              certification, our goal is to provide quality workmanship and a
              finished result our customers can trust.
            </p>
          </div>

          <div className="about-image-box">
            Shop / Vehicle Image
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="page-section">
          <div className="section-heading">
            <p className="section-label">Our Values</p>
            <h2>What Matters Most in Every Repair</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h3>Quality Workmanship</h3>
              <p>
                We believe every vehicle should be repaired with care,
                precision, and lasting quality.
              </p>
            </div>

            <div className="value-card">
              <h3>Honest Communication</h3>
              <p>
                We value clear communication so customers understand the repair
                process and know what to expect.
              </p>
            </div>

            <div className="value-card">
              <h3>Reliable Service</h3>
              <p>
                We aim to be dependable, professional, and responsive from the
                first estimate to the final result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section choose-us-section">
        <div className="section-heading">
          <p className="section-label">Why Choose Us</p>
          <h2>A Professional Approach to Auto Body Repair</h2>
        </div>

        <div className="choose-us-grid">
          <div className="choose-us-item">
            <span>01</span>
            <h3>Dependable Repair Service</h3>
            <p>
              We work hard to provide consistent service, quality repairs, and a
              smooth customer experience.
            </p>
          </div>

          <div className="choose-us-item">
            <span>02</span>
            <h3>Attention to Detail</h3>
            <p>
              We focus on the details that help create clean, professional, and
              high-quality finished results.
            </p>
          </div>

          <div className="choose-us-item">
            <span>03</span>
            <h3>Customer-Focused Care</h3>
            <p>
              We understand how important your vehicle is, and we aim to make
              the repair process as clear and stress-free as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Let&apos;s Talk About Your Vehicle</h2>
          <p>
            Contact Exclusive Auto Body today to request an estimate or ask
            about the services you need.
          </p>
          <Link to="/contact" className="primary-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;