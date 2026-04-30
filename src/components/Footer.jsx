function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1>Exclusive Auto Body</h1>

        <p>Reliable auto body services with quality workmanship.</p>
        <p>3859 S Valley View Blvd #12, Las Vegas, NV 89103</p>

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