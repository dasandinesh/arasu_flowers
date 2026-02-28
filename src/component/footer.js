import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../component/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Arasu Flowers</h3>
          <p>Bringing nature's beauty to your doorstep with fresh, handcrafted floral arrangements for every occasion.</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="social-icon">FB</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="social-icon">IG</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span className="social-icon">TW</span>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <span className="social-icon">PIN</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>

            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/wedding">Wedding Flowers</Link></li>
            <li><Link to="/services/events">Event Decor</Link></li>
            <li><Link to="/services/subscription">Flower Subscription</Link></li>
            <li><Link to="/services/corporate">Corporate Gifting</Link></li>
            <li><Link to="/services/delivery">Same Day Delivery</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <address>
            <p>📌 no.6,Arumuga Nadar street,<br /> Sivakamipuram. 
Alangulam Tk, <br />
Tenkasi district - 627808.</p>
            <p>📞 <a href="tel:+919443380524">+91 9443380524</a></p>
                        <p>📞 <a href="tel:+919150680524">+91 9150680524</a></p>

            <p>📧 <a href="thillai.arasu@yahoo.com">thillai.arasu@yahoo.com</a></p>
          </address>
          
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe for the latest updates and offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Arasu Flowers. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span> | </span>
              <Link to="/terms">Terms of Service</Link>
              <span> | </span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <span>💳</span>
              <span>🏦</span>
              <span>📱</span>
              <span>💲</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;