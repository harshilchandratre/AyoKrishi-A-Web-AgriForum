import React from 'react';
// import './Home.css';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="dark-footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="contact-focus">
                <input type="email" id="email" name="email" required placeholder="Ask AyoKrishi" />
                <button className='send-button' type="submit"><img className='send-leaf' src="/leaf.png" alt="" /></button>
            </div>
          </div>
          <div><label className="credits">Made with 💚 Team <strong>AyoKrishi</strong></label></div>
          <div className="footer-social">
            <ul>
              <li><a href="#" className="fab fa-youtube"></a></li>
              <li><a href="#" className="fab fa-instagram"></a></li>
              <li><a href="#" className="fab fa-twitter"></a></li>
            </ul>
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
