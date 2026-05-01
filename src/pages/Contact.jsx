import React from 'react';

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <p className="section-label">Exclusive Auto Body</p>
            <h1>Request an Estimate</h1>
            <p>
              Submit your details below and our team will review your request and
              contact you with the next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section page-section">
        <div className="contact-container">
          <div className="contact-info">
            <p className="section-label">Get In Touch</p>
            <h2>We’ll Help Get Your Vehicle Back to Perfect</h2>

            <p>
              Whether you need collision repair, paint work, mechanical service,
              or inspection certification, our team is ready to assist. Send us
              your details and we’ll follow up as soon as possible.
            </p>

            <div className="contact-details">
              <p><strong>Phone:</strong> (702) 247-8962</p>
              <p><strong>Email:</strong> autobodyexclusive@gmail.com</p>
              <p><strong>Location:</strong> 3855 S Valley View Blvd #46, Las Vegas, NV 89103</p>
            </div>
          </div>

          {/* 🔥 CLICKABLE MAP */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=3855+S+Valley+View+Blvd+%2346+Las+Vegas+NV+89103"
            target="_blank"
            rel="noopener noreferrer"
            className="map-card"
          >
            <iframe
              title="Exclusive Auto Body Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.187851932832!2d-115.19132119999999!3d36.121576399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6a0f8608789%3A0x2599a3533c308872!2s3855%20S%20Valley%20View%20Blvd%20%2346%2C%20Las%20Vegas%2C%20NV%2089103!5e1!3m2!1sen!2sus!4v1777646825951!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>

          <form
            name="estimate-request"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="estimate-request" />

            <p className="hidden">
              <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" />
              </label>
            </p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(702) 247-8962"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="Collision Repair">Collision Repair</option>
                  <option value="Ding & Dent Correction">Ding & Dent Correction</option>
                  <option value="Minor Repair">Minor Repair</option>
                  <option value="Complete Paint Job">Complete Paint Job</option>
                  <option value="Mechanical & A/C">Mechanical & A/C</option>
                  <option value="VPO-64 Inspection Certification">
                    VPO-64 Inspection Certification
                  </option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="vinNumber">VIN Number</label>
              <input
                type="text"
                id="vinNumber"
                name="vinNumber"
                placeholder="Enter VIN number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Describe the Damage or Service Needed</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what happened or what service you need..."
                required
              ></textarea>
            </div>

            <button type="submit" className="primary-btn">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;