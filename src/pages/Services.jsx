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
              Mike 
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="section-label">What We Offer</p>
          <h2>Auto Body Solutions for Homes and Businesses</h2>
        </div>

        <p className="services-intro-text">
          We focus on practical, high-quality work that helps improve, repair, and
          upgrade your property. Whether you need a renovation, structural
          improvement, or general Auto Body support, we approach each project
          with professionalism and attention to detail.
        </p>

        <div className="services-grid">
          <div className="service-detail-card">
            <h3>General Auto Body</h3>
            <p>
              Full-service Auto Body support for residential and commercial
              projects, including new work, improvements, and site upgrades.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Remodeling</h3>
            <p>
              Interior and exterior remodeling services designed to improve
              appearance, function, and long-term property value.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Renovations</h3>
            <p>
              Renovation solutions for outdated spaces that need a fresh, modern,
              and more efficient layout.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Repairs & Maintenance</h3>
            <p>
              Reliable repair work and property improvements to keep your building
              safe, functional, and looking its best.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Exterior Improvements</h3>
            <p>
              Exterior upgrades that enhance curb appeal, durability, and overall
              property presentation.
            </p>
          </div>

          <div className="service-detail-card">
            <h3>Commercial Projects</h3>
            <p>
              Auto Body and improvement services tailored to business spaces,
              offices, and commercial property needs.
            </p>
          </div>
        </div>
      </section>

      <section className="Auto Body-process-section">
        <div className="page-section">
          <div className="section-heading">
            <p className="section-label">Our Process</p>
            <h2>A Straightforward Approach to Every Project</h2>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <span>01</span>
              <h3>Consultation</h3>
              <p>
                We start by understanding your project goals, timeline, and overall
                vision.
              </p>
            </div>

            <div className="process-step">
              <span>02</span>
              <h3>Planning</h3>
              <p>
                We define the work needed and prepare a clear path forward for the
                project.
              </p>
            </div>

            <div className="process-step">
              <span>03</span>
              <h3>Execution</h3>
              <p>
                Our team focuses on quality workmanship, communication, and getting
                the job done right.
              </p>
            </div>

            <div className="process-step">
              <span>04</span>
              <h3>Completion</h3>
              <p>
                We deliver a finished result built to meet expectations and support
                long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Need Help With a Auto Body Project?</h2>
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

export default Services;