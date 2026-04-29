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

          <div className="about-image-box about-carousel">
  <div className="about-carousel-track">
    <img src="/images/about-shop-1.jpg" alt="Exclusive Auto Body shop work 1" />
    <img src="/images/about-shop-2.jpg" alt="Exclusive Auto Body shop work 2" />
    <img src="/images/about-shop-3.jpg" alt="Exclusive Auto Body shop work 3" />
    <img src="/images/about-shop-4.jpg" alt="Exclusive Auto Body shop work 4" />
    <img src="/images/about-shop-5.jpg" alt="Exclusive Auto Body shop work 5" />
  </div>
</div>
        </div>
      </section>

      {/* Pawn Stars Section */}
      <section className="pawn-stars-section">
  <div className="page-section pawn-stars-content">
    <div className="pawn-stars-heading">
      <p className="section-label">Featured Work</p>
      <h2>Seen Previously on Pawn Stars</h2>
      <p className="pawn-subtext">
        Featured on History Channel. Formerly known as Triple AAA Collision.
      </p>
    </div>

    <div className="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/jbzGCnuk_2o"
        title="Pawn Stars Feature"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
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