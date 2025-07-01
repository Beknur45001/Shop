
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import like from "../assets/like.svg"
import "./Style.scss"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Card/CartSlise';
import { addToWishlist } from '../redux/wishList/wishListSlise';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('loading');


  const dispatch = useDispatch();

const handleBuyNow = () => {
  dispatch(addToCart(product));
};
const handleLikeClick = () => {
    dispatch(addToWishlist(product));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://6824116e65ba05803398c680.mockapi.io/products/${id}`);
        setProduct(res.data);
        setStatus('success');
      } catch (err) {
        setStatus('error');
      }
    };

    fetchProduct();
  }, [id]);

  if (status === 'loading') return <p>Загрузка...</p>;
  if (status === 'error') return <p>Ошибка загрузки продукта</p>;

  return (
    <div className='box'>
      <Link to="/">← Назад</Link>

      <img className='apple' src={product.image} alt="" />
      <div className='det'>
<div className="tex">
      <h2>{product.title}</h2>
      <p><strong>Цена:</strong> ${product.price || 'не указана'}</p>
      <p><strong>Категория:</strong> {product.category}</p>
      <p><strong>Описание:</strong> {product.description || 'Нет описания'}</p>
</div>

<div className='btn'>
    <div className="plus">
<button>-</button>
<p>1</p>
<button>+</button>
</div>
<button className='buy' onClick={handleBuyNow}>Buy Now</button>
<div className="img">
  <img src={like} alt="like" onClick={handleLikeClick} style={{ cursor: 'pointer' }} />
</div>

      </div>
    </div>
    </div>
)
}

export default Detail
