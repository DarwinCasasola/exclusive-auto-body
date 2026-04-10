import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="inner-page-hero about-hero">
        <div className="inner-page-overlay">
          <div className="inner-page-content">
            <p className="section-label">About Us</p>
            <h1>Built on Hard Work, Quality, and Trust</h1>
            <p>
              Mike
            </p>
          </div>
        </div>
      </section>

      <section className="page-section about-story-section">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-heading">
              <p className="section-label">Who We Are</p>
              <h2>A Auto Body Company Focused on Getting the Job Done Right</h2>
            </div>

            <p>
              Mike
            </p>

            <p>
              Whether the work involves upgrades, repairs, remodeling, or general
              Auto Body support, our goal is to provide dependable service and
              quality results that clients can trust.
            </p>
          </div>

          <div className="about-image-box">
            Company / Project Image
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="page-section">
          <div className="section-heading">
            <p className="section-label">Our Values</p>
            <h2>What Matters Most on Every Project</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h3>Quality Workmanship</h3>
              <p>
                We believe every project should be completed with care, precision,
                and long-lasting quality.
              </p>
            </div>

            <div className="value-card">
              <h3>Honest Communication</h3>
              <p>
                We value clear communication throughout the process so clients know
                what to expect from start to finish.
              </p>
            </div>

            <div className="value-card">
              <h3>Reliable Service</h3>
              <p>
                We aim to be dependable, professional, and responsive on every job
                we take on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section choose-us-section">
        <div className="section-heading">
          <p className="section-label">Why Choose Us</p>
          <h2>A Practical, Professional Approach to Auto Body</h2>
        </div>

        <div className="choose-us-grid">
          <div className="choose-us-item">
            <span>01</span>
            <h3>Dependable Project Support</h3>
            <p>
              We work hard to provide reliable service and consistent results for
              each client and project.
            </p>
          </div>

          <div className="choose-us-item">
            <span>02</span>
            <h3>Attention to Detail</h3>
            <p>
              We focus on the details that help create clean, durable, and
              professional finished work.
            </p>
          </div>

          <div className="choose-us-item">
            <span>03</span>
            <h3>Residential and Commercial Experience</h3>
            <p>
              Our services are designed to support a wide range of property and
              project needs.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Let&apos;s Talk About Your Next Project</h2>
          <p>
            Contact Mike
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