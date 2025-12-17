import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ScrollReveal } from '../components/ScrollReveal';
import './Shop.css';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const selectedCategory = categoryParam || 'Tout';
  
  const filteredProducts = selectedCategory === 'Tout' 
    ? products 
    : products.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    if (category === 'Tout') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="shop">
      <div className="container">
        <ScrollReveal direction="down" delay={0.1}>
          <div className="shop-header">
            <h1 className="shop-title">Boutique</h1>
            <p className="shop-subtitle">Découvrez notre collection complète</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="category-filter-section">
            <div className="category-filter">
              <button
                className={`category-button ${selectedCategory === 'Tout' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('Tout')}
              >
                Tout
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="product-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'produit' : 'produits'}
              {selectedCategory !== 'Tout' && ` en ${selectedCategory}`}
            </p>
          </div>
        </ScrollReveal>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <ScrollReveal
                key={product.id}
                direction="up"
                delay={0.1 + (index % 4) * 0.1}
              >
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal direction="fade">
            <div className="no-products">
              <p>Aucun produit trouvé dans cette catégorie.</p>
              <button
                className="reset-filter-button"
                onClick={() => handleCategoryChange('Tout')}
              >
                Voir Tous les Produits
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};

export default Shop;

