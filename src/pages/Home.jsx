import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Hero />

      <section className="home-intro page-section">
        <div className="section-heading">
          <p className="section-label">Reliable Auto Body</p>
          <h2>Building Quality You Can Count On</h2>
        </div>

        <p className="intro-text">
          Mike
        </p>
      </section>

      <section className="services-preview page-section">
        <div className="section-heading">
          <p className="section-label">Our Services</p>
          <h2>Auto Body Services for Residential and Commercial Projects</h2>
        </div>

        <div className="card-grid">
          <div className="service-card">
            <h3>General Auto Body</h3>
            <p>
              Reliable project execution for new builds, upgrades, and structural
              improvements.
            </p>
          </div>

          <div className="service-card">
            <h3>Remodeling & Renovation</h3>
            <p>
              Interior and exterior improvements designed to modernize and refresh
              your space.
            </p>
          </div>

          <div className="service-card">
            <h3>Repairs & Improvements</h3>
            <p>
              Practical solutions for property repairs, upgrades, and ongoing
              maintenance needs.
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
          <h2>Take a Look at Our Project Gallery</h2>
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
          <p className="section-label light-label">Let&apos;s Build Something Strong</p>
          <h2>Ready to Start Your Next Project?</h2>
          <p>
            Mike
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