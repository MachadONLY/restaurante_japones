import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="mailto:email@exemplo.com" aria-label="Email"><FaEnvelope /></a>
      </div>
      <p className="footer-text">© 2024 Restaurante Japonês. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
