import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        {/* Add more links as needed */}
      </div>
      <div className="social-media-icons">
        {/* Add your social media icons here */}
      </div>
      <p className="contact-info">
        Contact us at: <a href="mailto:support@projectiva.com">support@projectiva.com</a>
      </p>
      <p className="copyright">&copy; {new Date().getFullYear()} Projectiva. All rights reserved.</p>
    </footer>
  );
}

export default Footer;