import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-icon-container">
      <FaFacebook className="footer-icon" />
      <FaTwitter className="footer-icon" />
      <FaInstagram className="footer-icon" />
      <FaLinkedin className="footer-icon" />
      <FaYoutube className="footer-icon" />
      <FaWhatsapp className="footer-icon" />
      <FaMailBulk className="footer-icon" />
    </div>
    <p className="copyright-para">
      Copyright © 2017-24 Webingo. All rights reserved.
    </p>
    <div className="footer-bottom-images">
      <img
        src="https://images.dmca.com/Badges/dmca-badge-w250-2x1-01.png"
        className="footer-img"
        alt="footer-img"
      />
      <img
        src="https://www.brandbucket.com/sites/default/files/logo_uploads/376243/large_youareprotected_0.png"
        className="footer-img"
        alt="footer-img"
      />
      <img
        src="https://www.geocerts.com/certcommand/assets/marketing/site-seals/positive-trust-seal-70a5acf11ed8ed9e0a6f7054550583606fec005425040bb2eb35f03c4eb8016e.png"
        className="footer-img"
        alt="footer-img"
      />
    </div>
  </div>
)

export default Footer
