import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center' }}>
        <h1>Produit introuvable</h1>
        <button onClick={() => navigate('/shop')}>Retour à la Boutique</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optional: Show feedback or navigate to cart
  };

  return (
    <div className="product-detail">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Retour
        </button>

        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <div className="product-detail-header">
              <span className="product-detail-category">{product.category}</span>
              <h1 className="product-detail-name">{product.name}</h1>
              <p className="product-detail-price">{product.price}€</p>
            </div>

            <p className="product-detail-description">{product.description}</p>

            <div className="product-detail-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantité</label>
                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Diminuer la quantité"
                  >
                    −
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Augmenter la quantité"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="add-to-cart-button"
                onClick={handleAddToCart}
              >
                Ajouter au Panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
