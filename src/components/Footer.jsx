function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1>Exclusive Auto Body</h1>

        <p>Reliable auto body services with quality workmanship.</p>
        <p>3855 S Valley View Blvd #46, Las Vegas, NV 89103</p>
        <p>CALL US TODAY (702) 247-8962</p>

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