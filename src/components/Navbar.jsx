import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo-wrap">
          <img
            src="/images/logo.png"
            alt="Exclusive Auto Body Logo"
            className="logo-img"
          />

          <div className="logo-text-wrap">
            <span className="logo-main">Exclusive Auto Body</span>
            <span className="logo-sub">Restoring Vehicles. Delivering Confidence</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;