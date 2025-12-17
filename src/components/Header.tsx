import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.header-nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <Link to="/" className="header-logo">
            <span className="logo-text">LÜM</span>
          </Link>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            </li>
            <li>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Boutique</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>À Propos</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>

          <Link to="/cart" className="header-cart">
            <span className="cart-label">Panier</span>
            {cartItemCount > 0 && (
              <span className="cart-badge" aria-label={`${cartItemCount} articles dans le panier`}>
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
