
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/Card/CartSlise';
import "./Style.scss"
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
    <div className="cart-header">
      <h2> Корзина</h2>
      <Link to="/" className="back-link">← Назад в каталог</Link>
    </div>

    {cartItems.length === 0 ? (
      <p className="empty">Корзина пуста</p>
    ) : (
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img className="item-image" src={item.image} alt={item.title} />
            <div className="item-info">
              <h4>{item.title}</h4>
              <p>{item.quantity} x ${item.price}</p>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">Удалить</button>
          </div>
        ))}
        <div className="cart-footer">
          <p className="total"><strong>Итого:</strong> ${total.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())} className="clear-btn">Очистить корзину</button>
        </div>
      </div>
    )}
  </div>
  );
};

export default Cart;
