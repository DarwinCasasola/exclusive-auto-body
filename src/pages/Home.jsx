import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Hero />

      <section className="home-intro page-section">
        <div className="section-heading">
          <p className="section-label">Reliable Auto Body Repair</p>
          <h2>Quality Repairs. Honest Service. Professional Results.</h2>
        </div>

        <p className="intro-text">
          Exclusive Auto Body provides dependable collision repair, dent removal,
          paint refinishing, and restoration services for drivers who want their
          vehicles looking their best again.
        </p>
      </section>

      <section className="services-preview page-section">
        <div className="section-heading">
          <p className="section-label">Our Services</p>
          <h2>Auto Body Services Designed to Restore Your Vehicle</h2>
        </div>

        <div className="card-grid">
          <div className="service-card">
            <h3>Collision Repair</h3>
            <p>
              Professional body repair for damaged vehicles with attention to fit,
              finish, and detail.
            </p>
          </div>

          <div className="service-card">
            <h3>Paint & Refinishing</h3>
            <p>
              Quality paint work and refinishing services to restore appearance and
              protect your vehicle.
            </p>
          </div>

          <div className="service-card">
            <h3>Dent & Bumper Repair</h3>
            <p>
              Practical solutions for dents, bumper damage, and exterior cosmetic
              issues.
            </p>
          </div>
        </div>

        <div className="section-button-wrap">
          <Link to="/services" className="primary-btn">
            View All Services
          </Link>
        </div>
      </section>

      <section className="recent-work page-section">
        <div className="section-heading">
          <p className="section-label">Recent Work</p>
          <h2>See Some of Our Auto Body Projects</h2>
        </div>

        <div className="gallery-preview-grid">
          <div className="gallery-box">Project Photo 1</div>
          <div className="gallery-box">Project Photo 2</div>
          <div className="gallery-box">Project Photo 3</div>
        </div>

        <div className="section-button-wrap">
          <Link to="/gallery" className="secondary-btn">
            View Gallery
          </Link>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta-content">
          <p className="section-label light-label">Let’s Get Your Vehicle Looking Right Again</p>
          <h2>Need an Estimate or Have Questions?</h2>
          <p>
            Contact Exclusive Auto Body today to get started.
          </p>

          <Link to="/contact" className="primary-btn light-btn">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;