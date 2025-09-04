import React from 'react';
import {
  FaInfoCircle,
  FaQuestionCircle,
  FaCommentDots,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-hero">
      <h1>Contact Us</h1>
      <p className="subtitle">Get in touch and let us know how we can help</p>

      <div className="contact-cards">
        <div className="card">
          <FaInfoCircle className="card-icon" />
          <h3>General Inquiry</h3>
          <p>For project collaboration or culture-based discussions, contact us here.</p>
          <div className="card-info">
            <p><FaEnvelope className="info-icon" /> general@cultureatlas.com</p>
            <p><FaPhoneAlt className="info-icon" /> +91 98765 43210</p>
            <p><FaMapMarkerAlt className="info-icon" /> Ahmedabad, Gujarat</p>
          </div>
          <button onClick={() => navigate('/ContactUs/contactForm')}>Contact Now</button>
        </div>

        <div className="card">
          <FaQuestionCircle className="card-icon" />
          <h3>Help & Support</h3>
          <p>Get assistance for bugs, access issues, or feature guidance.</p>
          <div className="card-info">
            <p><FaEnvelope className="info-icon" /> support@cultureatlas.com</p>
            <p><FaPhoneAlt className="info-icon" /> +91 99887 77665</p>
            <p><FaMapMarkerAlt className="info-icon" /> Campus Block B, Ahmedabad</p>
          </div>
          <button onClick={() => navigate('/ContactUs/contactForm')}>Get Support</button>
        </div>

        <div className="card">
          <FaCommentDots className="card-icon" />
          <h3>Suggestions</h3>
          <p>Share feedback or ideas to improve Culture Atlas.</p>
          <div className="card-info">
            <p><FaEnvelope className="info-icon" /> feedback@cultureatlas.com</p>
            <p><FaPhoneAlt className="info-icon" /> +91 90123 45678</p>
            <p><FaMapMarkerAlt className="info-icon" /> Student Lab, CE Dept</p>
          </div>
          <button onClick={() => navigate('/ContactUs/contactForm')}>Share Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;

