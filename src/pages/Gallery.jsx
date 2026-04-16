import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <>
      <section className="inner-page-hero gallery-hero">
        <div className="inner-page-overlay">
          <div className="inner-page-content">
            <p className="section-label">Our Work</p>
            <h1>Auto Body Repair Gallery</h1>
            <p>
              Explore examples of collision repair, dent correction, paint work,
              and restoration services completed by Exclusive Auto Body.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="section-label">Gallery</p>
          <h2>Recent Repair & Refinishing Highlights</h2>
        </div>

        <p className="gallery-intro-text">
          Our gallery highlights the care, detail, and workmanship that go into
          every vehicle we service. As more customer vehicles are completed,
          this page can continue to grow with before-and-after photos, paint
          work, and finished repairs.
        </p>

        <div className="main-gallery-grid">
          <div className="gallery-card large">
            <img src="/images/gallery-1.jpg" alt="Collision repair work on vehicle front end" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-2.jpg" alt="Vehicle dent correction and body repair" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-3.jpg" alt="Auto body paint refinishing work" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-4.jpg" alt="Minor vehicle body repair result" />
          </div>

          <div className="gallery-card large">
            <img src="/images/gallery-5.jpg" alt="Complete paint job on repaired vehicle" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-6.jpg" alt="Finished auto body restoration work" />
          </div>
        </div>
      </section>

      <section className="gallery-highlights-section">
        <div className="page-section">
          <div className="section-heading">
            <p className="section-label">What We Handle</p>
            <h2>Repair Work That Restores Appearance and Confidence</h2>
          </div>

          <div className="gallery-highlights-grid">
            <div className="gallery-highlight-card">
              <h3>Collision Repair</h3>
              <p>
                We restore damaged vehicles with careful repair work focused on
                fit, finish, and overall quality.
              </p>
            </div>

            <div className="gallery-highlight-card">
              <h3>Paint & Refinishing</h3>
              <p>
                From touch-ups to complete paint jobs, we help bring vehicles
                back with a cleaner, sharper finish.
              </p>
            </div>

            <div className="gallery-highlight-card">
              <h3>Dent & Minor Repair</h3>
              <p>
                We handle dents, dings, scratches, and other body damage with
                attention to detail and professional care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <div className="gallery-cta-content">
          <h2>Need Work Done on Your Vehicle?</h2>
          <p>
            Contact Exclusive Auto Body today to request an estimate or ask
            about your repair needs.
          </p>
          <Link to="/contact" className="primary-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Gallery;