import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <>
      <section className="inner-page-hero gallery-hero">
        <div className="inner-page-overlay">
          <div className="inner-page-content">
            <p className="section-label">Our Work</p>
            <h1>Project Gallery</h1>
            <p>
              Take a look at the type of Auto Body, renovation, and improvement
              work Mike
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="section-label">Gallery</p>
          <h2>Recent Project Highlights</h2>
        </div>

        <p className="gallery-intro-text">
          Our gallery is designed to showcase the quality, detail, and care that
          go into every project. As more project photos become available, this
          page can easily be updated with completed work and before-and-after
          examples.
        </p>

        <div className="main-gallery-grid">
          <div className="gallery-card large">Project Image 1</div>
          <div className="gallery-card">Project Image 2</div>
          <div className="gallery-card">Project Image 3</div>
          <div className="gallery-card">Project Image 4</div>
          <div className="gallery-card large">Project Image 5</div>
          <div className="gallery-card">Project Image 6</div>
        </div>
      </section>

      <section className="gallery-highlights-section">
        <div className="page-section">
          <div className="section-heading">
            <p className="section-label">Project Focus</p>
            <h2>Work That Reflects Quality and Function</h2>
          </div>

          <div className="gallery-highlights-grid">
            <div className="gallery-highlight-card">
              <h3>Residential Improvements</h3>
              <p>
                Home upgrades, remodels, repairs, and renovation work designed to
                improve comfort, appearance, and function.
              </p>
            </div>

            <div className="gallery-highlight-card">
              <h3>Commercial Projects</h3>
              <p>
                Professional improvements and build support for offices, work
                spaces, and commercial properties.
              </p>
            </div>

            <div className="gallery-highlight-card">
              <h3>Detail-Oriented Results</h3>
              <p>
                Every project is completed with attention to workmanship, durable
                results, and practical value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <div className="gallery-cta-content">
          <h2>Want to Start a Project of Your Own?</h2>
          <p>
            Reach out to MIKE
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