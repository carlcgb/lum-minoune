import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">LÜM</h3>
            <p className="footer-description">
              Essentiels sélectionnés pour un mode de vie moderne.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Boutique</h4>
            <ul className="footer-links">
              <li>
                <Link to="/shop?category=Soin%20de%20la%20Peau">Soin de la Peau</Link>
              </li>
              <li>
                <Link to="/shop?category=Soin%20du%20Corps">Soin du Corps</Link>
              </li>
              <li>
                <Link to="/shop?category=Parfum">Parfum</Link>
              </li>
              <li>
                <Link to="/shop?category=Maison">Maison</Link>
              </li>
              <li>
                <Link to="/shop?category=Accessoires">Accessoires</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Info</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">À Propos</Link>
              </li>
              <li>
                <a href="#">Livraison</a>
              </li>
              <li>
                <a href="#">Retours</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Suivez-nous</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LÜM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
