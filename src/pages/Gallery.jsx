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
          every vehicle we service.
        </p>

        <div className="main-gallery-grid">

          <div className="gallery-card corvette-card">
            <img src="/images/gallery-1.jpg" alt="Auto body gallery image 1" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-2.jpg" alt="Auto body gallery image 2" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-3.jpg" alt="Auto body gallery image 3" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-4.jpg" alt="Auto body gallery image 4" />
          </div>

          <div className="gallery-card medium">
            <img src="/images/gallery-5.jpg" alt="Auto body gallery image 5" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-6.jpg" alt="Auto body gallery image 6" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-7.jpg" alt="Auto body gallery image 7" />
          </div>

          <div className="gallery-card truck-card">
            <img src="/images/gallery-8.jpg" alt="Auto body gallery image 8" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-9.jpg" alt="Auto body gallery image 9" />
          </div>

          {/* NEW IMAGES */}

          <div className="gallery-card">
            <img src="/images/gallery-10.jpg" alt="Auto body gallery image 10" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-11.jpg" alt="Auto body gallery image 11" />
          </div>

          <div className="gallery-card medium">
            <img src="/images/gallery-12.jpg" alt="Auto body gallery image 12" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-13.jpg" alt="Auto body gallery image 13" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-14.jpg" alt="Auto body gallery image 14" />
          </div>

          <div className="gallery-card">
            <img src="/images/gallery-15.jpg" alt="Auto body gallery image 15" />
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