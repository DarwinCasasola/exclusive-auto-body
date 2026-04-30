import { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const aboutImages = [
    '/images/about-shop-1.jpg',
    '/images/about-shop-2.jpg',
    '/images/about-shop-3.jpg',
    '/images/about-shop-4.jpg',
    '/images/about-shop-5.jpg',
  ];

  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? aboutImages.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (difference > 50) nextImage();
    if (difference < -50) prevImage();

    setTouchStart(null);
  };

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
            At Exclusive Auto Body, we deliver dependable repair services with attention to detail and professional care. Our goal is to restore every vehicle—whether collision, paint, or mechanical work—with quality results you can trust. Please see a personal letter from the owner below.
            </p>

            {/* 🔥 OWNER MESSAGE */}
            <div className="owner-message">
              <p className="owner-greeting">To our customers,</p>

              <p>
                I opened my body shop back in 1999 with a strong passion for cars
                and a desire to provide quality work for a reasonable price. This
                goal stays with us today.
              </p>

              <p>
                We have been proud to serve the Las Vegas community for over 25
                years, and we strive to make every repair 100% back to original.
                We truly appreciate your business and look forward to working
                with you.
              </p>

              <div className="owner-signoff">
                <p>Thanks,</p>
                <img
                  src="/images/mike-signature.png"
                  alt="Mike Kaboli signature"
                  className="signature-img"
                />
                <p className="owner-name">Mike Kaboli</p>
              </div>
            </div>
          </div>

          {/* 🔥 CAROUSEL */}
          <div
            className="about-image-box about-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={aboutImages[activeImage]}
              alt={`Exclusive Auto Body shop work ${activeImage + 1}`}
            />

            <button
              type="button"
              className="carousel-arrow carousel-arrow-left"
              onClick={prevImage}
            >
              ‹
            </button>

            <button
              type="button"
              className="carousel-arrow carousel-arrow-right"
              onClick={nextImage}
            >
              ›
            </button>

            <div className="carousel-dots">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    activeImage === index ? 'active' : ''
                  }`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pawn Stars */}
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
            Contact Exclusive Auto Body today to request an estimate or ask about
            the services you need.
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