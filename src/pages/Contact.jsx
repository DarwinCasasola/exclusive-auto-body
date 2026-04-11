import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    vinNumber: "",
    message: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      const fileArray = files ? Array.from(files) : [];

      setFormData((prev) => ({
        ...prev,
        images: fileArray,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("Request submitted. We’ll contact you shortly.");
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <p className="section-label">Exclusive Auto Body</p>
            <h1>Request an Estimate</h1>
            <p>
              Submit your details below and upload photos of the damage so we can
              provide a faster and more accurate estimate.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="contact-section page-section">
        <div className="contact-container">

          {/* LEFT SIDE INFO */}
          <div className="contact-info">
            <p className="section-label">Get In Touch</p>
            <h2>We’ll Help Get Your Vehicle Back to Perfect</h2>

            <p>
              Whether you need collision repair, paint work, mechanical service,
              or inspection certification, our team is ready to assist. Upload
              images for a quicker estimate.
            </p>

            <div className="contact-details">
              <p><strong>Phone:</strong> (702) 555-1234</p>
              <p><strong>Email:</strong> info@exclusiveautobody.com</p>
              <p><strong>Location:</strong> Las Vegas, NV</p>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            
            {/* NAME + PHONE */}
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(702) 555-1234"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* EMAIL + SERVICE */}
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option>Collision Repair</option>
                  <option>Ding & Dent Correction</option>
                  <option>Minor Repair</option>
                  <option>Complete Paint Job</option>
                  <option>Mechanical & A/C</option>
                  <option>VPO-64 Inspection Certification</option>
                </select>
              </div>
            </div>

            {/* VIN */}
            <div className="form-group">
              <label>VIN Number</label>
              <input
                type="text"
                name="vinNumber"
                placeholder="Enter VIN (optional)"
                value={formData.vinNumber}
                onChange={handleChange}
              />
            </div>

            {/* IMAGE UPLOAD */}
            <div className="form-group">
              <label>Add Image(s)</label>
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleChange}
              />

              <small className="file-help-text">
                Upload clear photos of the damage (Max ~5 images recommended)
              </small>

              {/* IMAGE PREVIEW */}
              {formData.images.length > 0 && (
                <div className="image-preview-grid">
                  {formData.images.map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="image-preview"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label>Describe the Damage</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us what happened or what you need..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* SUBMIT */}
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