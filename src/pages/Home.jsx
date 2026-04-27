import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">Las Vegas Auto Body Professionals</p>

          <h1>
            Quality Auto Body Repair
            <span className="hero-accent"> Done Right</span>
          </h1>

          <p className="hero-text">
          COLLISION REPAIR, DING AND DENT CORRECTION, COMPLETE PAINT JOBS, MECHANICAL SERVICE, AND VPO-64 INSPECTION CERTIFICATION HANDLED WITH CARE, PRECISION, AND PROFESSIONAL RESULTS.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="primary-btn">
              Request an Estimate
            </Link>

            <Link to="/gallery" className="secondary-btn hero-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;