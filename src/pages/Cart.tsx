import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <h1 className="cart-title">Votre Panier</h1>
          <div className="cart-empty-content">
            <p>Votre panier est vide</p>
            <Link to="/shop" className="cart-continue-shopping">
              Continuer les Achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <h1 className="cart-title">Votre Panier</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.product.id} className="cart-item">
                <Link to={`/product/${item.product.id}`} className="cart-item-image">
                  <img src={item.product.image} alt={item.product.name} />
                </Link>

                <div className="cart-item-info">
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="cart-item-name">{item.product.name}</h3>
                  </Link>
                  <p className="cart-item-category">{item.product.category}</p>
                  <p className="cart-item-price">{item.product.price}€</p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    aria-label="Diminuer la quantité"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    aria-label="Augmenter la quantité"
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  <p>{(item.product.price * item.quantity).toFixed(2)}€</p>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.product.id)}
                  aria-label="Retirer l'article"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-content">
              <div className="cart-summary-row">
                <span>Sous-total</span>
                <span>{total.toFixed(2)}€</span>
              </div>
              <div className="cart-summary-row">
                <span>Livraison</span>
                <span>Calculé à la commande</span>
              </div>
              <div className="cart-summary-total">
                <span>Total</span>
                <span>{total.toFixed(2)}€</span>
              </div>
            </div>

            <button className="cart-checkout-button">
              Passer la Commande
            </button>

            <button className="cart-clear-button" onClick={clearCart}>
              Vider le Panier
            </button>

            <Link to="/shop" className="cart-continue-shopping">
              Continuer les Achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
