import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">Trusted Local Construction Services</p>
          <h1>Hector&apos;s Construction</h1>
          <p className="hero-text">
            Quality construction, remodeling, and project support for residential
            and commercial clients.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="primary-btn">
              Our Services
            </Link>
            <Link to="/contact" className="secondary-btn hero-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;