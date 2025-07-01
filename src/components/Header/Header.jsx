import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { apiClient } from '../../axios/apiClient'
import "./Header.scss"
import apple from "../../assets/apple.svg"
import like from "../../assets/like.svg"
import cart from "../../assets/cart.svg"
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryFilter, selectUniqueCategories } from '../../redux/Praducts/productsSlice '


function Header() {
  const dispatch = useDispatch();
  const categories = useSelector(selectUniqueCategories);
  const selected = useSelector(state => state.products.selectedCategory);


  async function getCategoriesFromProducts() {
    try {
      const res = await apiClient.get('/products');  
      const products = res.data;
  
      
      const categories = [...new Set(products.map(product => product.category))];
      setList(categories)
      console.log(categories); 
    } catch (error) {
      console.error("Ошибка при получении продуктов:", error);
    }
  }
  
useEffect(() => {
  getCategoriesFromProducts()
} ,[])
  return (
    <div className='Header'>
<img src={apple} alt="" />

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setCategoryFilter(cat))}
            style={{
              padding: '5px 10px',
              backgroundColor: selected === cat ? '#007bff' : '#eee',
              color: selected === cat ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
   <div className='logo'>
   <Link to="/wishlist">
    <img src={like} alt="" />
    </Link>
    <Link to="/cart">
    <img src={cart} alt="" />
    </Link>
   </div>
    </div>
  )
}

export default Header
