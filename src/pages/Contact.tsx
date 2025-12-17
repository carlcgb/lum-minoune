import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="container">
        <ScrollReveal direction="fade" delay={0.2}>
          <div className="contact-hero">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-subtitle">Nous serions ravis de vous entendre</p>
          </div>
        </ScrollReveal>

        <div className="contact-content">
          <ScrollReveal direction="right" delay={0.1}>
            <div className="contact-info-section">
              <h2 className="section-heading">Informations de Contact</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <h3 className="contact-item-title">Email</h3>
                  <a href="mailto:hello@lum-boutique.com" className="contact-link">
                    hello@lum-boutique.com
                  </a>
                </div>
                <div className="contact-item">
                  <h3 className="contact-item-title">Suivez-nous</h3>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="contact-link">
                    @lumboutique
                  </a>
                </div>
                <div className="contact-item">
                  <h3 className="contact-item-title">Newsletter</h3>
                  <p className="contact-description">
                    Inscrivez-vous pour recevoir nos dernières nouveautés et offres exclusives.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="contact-form-section">
              <h2 className="section-heading">Envoyez-nous un message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Envoyer
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="contact-cta">
            <Link to="/shop" className="cta-link">
              Découvrir Notre Collection
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;
