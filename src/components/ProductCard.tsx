import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-card-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
            loading="lazy"
          />
          {product.featured && (
            <span className="product-card-badge">Sélection</span>
          )}
        </div>
        <div className="product-card-info">
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-category">{product.category}</p>
          <p className="product-card-price">{product.price}€</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
