// import React, { useState } from 'react';
import React from 'react';
// import axios from 'axios';
import './Footer.css'

const Footer = () => {
  // const [feedback, setFeedback] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('/api/feedback', { text: feedback });
  //     alert('Feedback submitted successfully');
  //     setFeedback(''); // Clear the textarea
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to submit feedback');
  //   }
  // };

  return (
    <>
      <footer className="dark-footer">
        <div className="footer-content">
          {/* <div className="footer-links">
            {/* <form onSubmit={handleSubmit}>
              <div className="contact-focus">
                <textarea
                  name="feedback"
                  required
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
                <button className="send-button" type="submit">
                  <img className="send-leaf" src="/leaf.png" alt="" />
                </button>
              </div>
            </form> */}
          {/* </div>  */}
          <div>
            <label className="credits">Made with 💚 Team <strong>AyoKrishi</strong></label>
          </div>
          <div className="footer-social">
            <ul>
              <li><a href="#" className="fab fa-youtube"></a></li>
              <li><a href="#" className="fab fa-x"></a></li>
              <li><a href="#" className="fab fa-instagram"></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
