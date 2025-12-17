import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { ParallaxSection } from '../components/ParallaxSection';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <ParallaxSection speed={0.2}>
          <ScrollReveal direction="fade" delay={0.2}>
            <div className="about-hero">
              <h1 className="about-title">À Propos de LÜM</h1>
              <p className="about-tagline">Essentiels sélectionnés pour un mode de vie moderne</p>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        <div className="about-content">
          <ScrollReveal direction="right" delay={0.1}>
            <section className="about-section">
              <h2 className="section-heading">Notre Histoire</h2>
              <div className="section-content">
                <p>
                  LÜM est né d'une conviction simple : les essentiels du quotidien doivent être 
                  soigneusement conçus, magnifiquement designés et fabriqués avec soin. Nous 
                  sélectionnons une collection de produits premium de soin, parfum et lifestyle 
                  qui élèvent votre routine quotidienne.
                </p>
                <p>
                  Chaque produit de notre collection est soigneusement sélectionné pour sa qualité, 
                  ses ingrédients et son engagement envers l'excellence. Nous croyons en la 
                  transparence, la durabilité et le pouvoir des petits choix intentionnels.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <section className="about-section">
              <h2 className="section-heading">Nos Valeurs</h2>
              <div className="section-content">
                <div className="values-grid">
                  <ScrollReveal direction="up" delay={0.1}>
                    <div className="value-item">
                      <h3 className="value-title">Qualité d'Abord</h3>
                      <p className="value-description">
                        Nous nous approvisionnons uniquement en ingrédients les plus fins et 
                        travaillons avec des artisans et fabricants de confiance qui partagent 
                        notre engagement envers l'excellence.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={0.2}>
                    <div className="value-item">
                      <h3 className="value-title">Sélection Réfléchie</h3>
                      <p className="value-description">
                        Chaque produit de notre collection a été soigneusement sélectionné. Nous 
                        croyons en la qualité plutôt que la quantité, et chaque article sert un 
                        but dans votre routine quotidienne.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={0.3}>
                    <div className="value-item">
                      <h3 className="value-title">Durabilité</h3>
                      <p className="value-description">
                        Nous nous engageons à un approvisionnement responsable, des emballages 
                        écologiques et à soutenir les marques qui privilégient la conscience 
                        environnementale.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={0.4}>
                    <div className="value-item">
                      <h3 className="value-title">Transparence</h3>
                      <p className="value-description">
                        Nous croyons que vous devriez savoir exactement ce que vous mettez sur 
                        votre peau. Les listes complètes d'ingrédients et les informations 
                        d'approvisionnement sont toujours disponibles.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="about-cta">
              <Link to="/shop" className="cta-button">
                Découvrir Notre Collection
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default About;

