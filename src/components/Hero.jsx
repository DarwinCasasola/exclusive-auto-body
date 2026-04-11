import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">Trusted Local Auto Body Shop</p>
          <h1>Exclusive Auto Body</h1>
          <p className="hero-text">
            Collision repair, paint restoration, dent removal, and quality body work
            you can trust in Las Vegas.
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