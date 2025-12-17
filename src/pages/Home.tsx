import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { ParallaxSection } from '../components/ParallaxSection';
import './Home.css';

const Home: React.FC = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="home">
      {/* Hero Section avec Parallaxe */}
      <section className="hero">
        <ParallaxSection speed={0.3}>
          <div className="hero-background"></div>
        </ParallaxSection>
        <div className="container">
          <ScrollReveal direction="fade" delay={0.2}>
            <div className="hero-content">
              <h1 className="hero-title">Essentiels Sélectionnés</h1>
              <p className="hero-subtitle">
                Pièces soigneusement choisies pour un mode de vie moderne
              </p>
              <Link to="/shop" className="hero-cta">
                Découvrir la Collection
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Products avec animations */}
      {featuredProducts.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="section-title">Sélection</h2>
            </ScrollReveal>
            <div className="products-grid">
              {featuredProducts.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  direction="up"
                  delay={0.1 + index * 0.1}
                >
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="featured-cta">
                <Link to="/shop" className="view-all-button">
                  Voir Tous les Produits
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
