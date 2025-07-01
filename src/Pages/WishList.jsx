
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishList/wishListSlise';
import { Link } from 'react-router-dom';
import "./Style.scss"

const Wishlist = () => {
  const items = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-container">
    <h2> Избранные товары</h2>

    {items.length === 0 ? (
      <p className="empty">Список пуст. Добавьте товары в избранное.</p>
    ) : (
      <div className="wishlist-grid">
        {items.map(item => (
          <div className="wishlist-card" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} className="product-image" />
            </Link>
            <div className="info">
              <h4>{item.title}</h4>
              <p>Цена: ${item.price}</p>
            </div>
            <button onClick={() => dispatch(removeFromWishlist(item.id))} className="remove-btn">
              Удалить
            </button>
          </div>
        ))}
      </div>
    )}

    <Link to="/" className="back-btn">← Назад в магазин</Link>
  </div>
  );
};

export default Wishlist;
