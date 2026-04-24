import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="section-label">Request Sent</p>
        <h1>Thank You</h1>
      </div>

      <p>
        Your estimate request has been submitted. Exclusive Auto Body will review
        your information and contact you soon.
      </p>

      <div className="section-button-wrap">
        <Link to="/" className="primary-btn">
          Back Home
        </Link>
      </div>
    </section>
  );
}

export default ThankYou;