
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Product from '../Product/Product';
import { fetchProducts, selectFilteredProducts } from '../../redux/Praducts/productsSlice ';
import "./List.scss"

const ProductList = () => {

  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);




 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Загрузка...</p>;
  if (status === 'failed') return <p>Ошибка: {error}</p>;

  return (
    <ul className='bbox'>
      {products.map(product => (
         <div  key={product.id}>
         <Product pro={product}/>
       
       </div>
      ))}
    </ul>
  );
};

export default ProductList;
