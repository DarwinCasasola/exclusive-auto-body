function Contact() {
    return (
      <>
        <section className="inner-page-hero contact-hero">
          <div className="inner-page-overlay">
            <div className="inner-page-content">
              <p className="section-label">Contact Us</p>
              <h1>Request a Quote</h1>
              <p>
                Get in touch with Mike&apos;s Auto Body to discuss your project,
                ask questions, or request an estimate for your next job.
              </p>
            </div>
          </div>
        </section>
  
        <section className="page-section contact-page-section">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="section-heading">
                <p className="section-label">Get In Touch</p>
                <h2>Let&apos;s Talk About Your Project</h2>
              </div>
  
              <p>
                Whether you need Auto Body support, remodeling, repairs, or
                property improvements, we&apos;re here to help. Fill out the form and
                we&apos;ll get back to you as soon as possible.
              </p>
  
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <h3>Phone</h3>
                  <p>(702) 555-0123</p>
                </div>
  
                <div className="contact-info-item">
                  <h3>Email</h3>
                  <p>xxxxxxxxemailxxxx</p>
                </div>
  
                <div className="contact-info-item">
                  <h3>Service Area</h3>
                  <p>Las Vegas, Henderson, and surrounding areas</p>
                </div>
              </div>
            </div>
  
            <div className="contact-form-wrapper">
              <form
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
  
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      required
                    />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
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
                      placeholder="Your email address"
                      required
                    />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service" required>
                      <option value="">Select a service</option>
                      <option value="general-Auto Body">General Auto Body</option>
                      <option value="remodeling">Remodeling</option>
                      <option value="renovations">Renovations</option>
                      <option value="repairs">Repairs & Maintenance</option>
                      <option value="commercial-projects">Commercial Projects</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
  
                <div className="form-group">
                  <label htmlFor="address">Project Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Project address or city"
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="preferredContact">Preferred Contact Method</label>
                  <select id="preferredContact" name="preferredContact">
                    <option value="">Select one</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                  </select>
                </div>
  
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>
  
                <button type="submit" className="primary-btn submit-btn">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Contact;