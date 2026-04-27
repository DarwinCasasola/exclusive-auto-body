function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Exclusive Auto Body</h3>

        <p>Reliable auto body services with quality workmanship.</p>
        <p>Serving Las Vegas and surrounding areas.</p>

        {/* Copyright */}
        <p className="site-footer">
          © {new Date().getFullYear()} Exclusive Auto Body. All rights reserved.
        </p>

        {/* Your credit (subtle + professional) */}
    
      </div>
    </footer>
  );
}

export default Footer;